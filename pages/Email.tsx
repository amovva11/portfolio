import { NextPage } from "next";
import { useState } from "react";
import PageMeta from "../Components/ui/PageMeta";
import PageScroll from "../Components/ui/PageScroll";
import { useIsTabletOrMobile } from "../hooks/useIsTabletOrMobile";

const DESCRIPTION =
  "Get in touch about software engineering roles, internships, or projects.";
const SPINNER = "https://img.icons8.com/ios/50/ffffff/loading-circle.gif";
const THANK_YOU_GIF = "https://c.tenor.com/mCiM7CmGGI4AAAAC/naruto.gif";

const INPUT_CLASSES =
  "mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none";

const Email: NextPage = () => {
  const isTabletOrMobile = useIsTabletOrMobile();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message, name }),
    });

    setError("");
    setEmail("");
    setMessage("");
    setName("");
    setLoading(false);
    setDone(true);
  };

  const handleSubmit = () => {
    if (email === "") return setError("Please enter your email.");
    if (message === "") return setError("Please enter your message.");
    if (name === "") return setError("Please enter your name.");
    setError("");
    sendEmail();
  };

  const inputWidth = isTabletOrMobile ? "w-full" : "w-100";

  const intro = (
    <div className={isTabletOrMobile ? "p-3" : "p-6 mr-2 mt-8 sm:rounded-lg"}>
      <h1
        className={`text-4xl ${
          isTabletOrMobile ? "" : "sm:text-5xl mx-auto "
        }text-gray-200 dark:text-white font-extrabold tracking-tight`}
      >
        Get in touch
      </h1>
      <p
        className={`text-normal text-lg ${
          isTabletOrMobile ? "" : "sm:text-2xl "
        }font-medium text-gray-600 dark:text-gray-400 mt-2`}
      >
        Fill in the form to start a conversation
      </p>
      <p className="text-normal text-md font-normal text-gray-400 dark:text-gray-400 mt-2">
        Reach out about software engineering roles and internships, or just to
        talk shop — AI/ML systems, full-stack work, or whatever you happen to be
        building. I read everything that comes through here.
      </p>
      <p className="text-sm text-red-600 dark:text-gray-400 mt-2">{error}</p>
    </div>
  );

  const form = (
    <form
      className={
        isTabletOrMobile ? "p-3 pb-20 justify-center" : "p-6 flex flex-col justify-center"
      }
    >
      <div className={isTabletOrMobile ? "" : "flex flex-col"}>
        <label htmlFor="name" className="hidden">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className={`${inputWidth} ${INPUT_CLASSES}`}
        />
      </div>

      <div className={isTabletOrMobile ? "mt-2" : "flex flex-col mt-2"}>
        <label htmlFor="email" className="hidden">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`${inputWidth} ${INPUT_CLASSES}`}
        />
      </div>

      <div className={isTabletOrMobile ? "mt-2" : "flex flex-col mt-2"}>
        <label htmlFor="details" className="hidden">
          Message
        </label>
        <textarea
          name="details"
          value={message}
          id="details"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputWidth} ${INPUT_CLASSES}`}
        ></textarea>
      </div>

      {!loading ? (
        <button
          type="button"
          onClick={handleSubmit}
          className={`md:w-32 ${
            isTabletOrMobile ? "mb-20 " : ""
          }bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300`}
        >
          Submit
        </button>
      ) : (
        <div
          className={`spinner-border flex pt-4 ${
            isTabletOrMobile ? "mb-20 " : ""
          }text-indigo-500`}
          role="status"
        >
          <img
            src={SPINNER}
            alt="Sending"
            className="rounded-full flex"
            width="30"
            height="30"
          />
          <span className="flex-auto text-white pl-2 font-medium pt-1">
            Loading...{" "}
          </span>
        </div>
      )}
    </form>
  );

  const confirmation = (
    <div
      className={`flex items-center justify-center ${
        isTabletOrMobile ? "p-2 pt-5 pb-20 w-full" : "w-4/3"
      }`}
    >
      <div className="text-center justify-center text-gray-300 font-medium text-sm">
        <div className="text-left text-lg pb-3">
          Thank you for your message. <br /> Will get back to you as soon as
          possible.
        </div>
        <div className="text-left pb-3">
          <img
            src={THANK_YOU_GIF}
            alt="Thanks"
            width={isTabletOrMobile ? "100%" : "75%"}
            height="100"
            className="text-center rounded-lg"
          />
        </div>
      </div>
    </div>
  );

  return (
    <PageScroll>
      <PageMeta
        title="Contact me"
        description={DESCRIPTION}
        ogTitle="Contact me"
      />
      <div className={`h-full w-full ${isTabletOrMobile ? "pb-20" : "mx-auto"}`}>
        <section
          className={`shadow-xl items-center justify-center rounded-md ${
            isTabletOrMobile ? "" : "mx-auto"
          }`}
        >
          <div className={isTabletOrMobile ? "" : "max-w-6xl mx-auto pt-10 pb-10"}>
            <div className={isTabletOrMobile ? "overflow-hidden" : "mt-8 overflow-hidden"}>
              {/* Only the wide layout puts the intro and form side by side. */}
              {isTabletOrMobile ? (
                <>
                  {intro}
                  {done ? confirmation : form}
                </>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {intro}
                  {done ? confirmation : form}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </PageScroll>
  );
};

export default Email;
