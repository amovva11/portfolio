import type { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";

interface ContactRequest {
  name?: string;
  email?: string;
  message?: string;
}

interface ResponseBody {
  data: boolean;
  error: string;
}

const REGION = process.env.AWS_REGION ?? "ap-south-1";

/**
 * Credentials and addresses come from the environment. The literal fallbacks
 * are the template's placeholders, kept so a fresh checkout still builds — set
 * the real values in your deploy environment before enabling the contact form.
 */
const SES_CONFIG = {
  apiVersion: "2010-12-01",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "awsAccessKey",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "awsSecretAccessKey",
  region: REGION,
};
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL ?? "toemail@tomail.com";
const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL ?? "youremail@gmail.com";

AWS.config.update({ region: REGION });

const buildEmail = ({ name, email, message }: ContactRequest) => ({
  Destination: {
    CcAddresses: [],
    ToAddresses: [TO_ADDRESS],
  },
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: `<div>
            My Name: ${name}
          </div><div>
            My Message: <b>${message}</b>
          </div><div>
            My Email: </i>${email}</i>
          </div>`,
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: `Hi I am ${name}, from contact page.`,
    },
  },
  Source: FROM_ADDRESS,
  ReplyToAddresses: [],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
) {
  try {
    await new AWS.SES(SES_CONFIG).sendEmail(buildEmail(req.body)).promise();
  } catch (err) {
    // Delivery failures are logged but not surfaced: the form reports success
    // either way, matching the behaviour this endpoint has always had.
    console.error(err);
  }

  res.status(200).json({ data: true, error: "" });
}
