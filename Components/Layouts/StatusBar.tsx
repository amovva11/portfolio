import dynamic from "next/dynamic";

/**
 * The clock is client-only on purpose.
 *
 * Server-rendering it bakes the build-time timestamp into the HTML, which never
 * matches the time the browser hydrates at — React reports that as
 * "Text content does not match server-rendered HTML". A ticking clock has no
 * meaningful server-rendered value anyway.
 */
const Clock = dynamic(() => import("react-live-clock"), { ssr: false });

const CLOCK_FORMAT = "dddd, MMMM Mo, YYYY, h:mm:ss A";

interface StatusBarProps {
  isTabletOrMobile: boolean;
  visitorCount: string;
}

/** Editor-style status bar pinned to the bottom of the viewport. */
const StatusBar: React.FC<StatusBarProps> = ({
  isTabletOrMobile,
  visitorCount,
}) => {
  // The narrow layout drops the clock and encoding readouts, which do not fit.
  const stack = isTabletOrMobile
    ? ["NEXT.JS", "TypeScript", "Tailwind"]
    : ["Made in", "NEXT.JS", "TypeScript", "Tailwind", "React"];

  return (
    <div className="bottom-header pb-6 relative">
      <ul className="right pt-1" style={{ fontSize: "12px" }}>
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul className="left">
        <li>{visitorCount} Total Visits</li>
        {!isTabletOrMobile && (
          <>
            <li>
              <Clock format={CLOCK_FORMAT} ticking={true} />
            </li>
            <li>UTF-8</li>
            <li>
              <i className="fa fa-radiation-alt"></i> Port: 443
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default StatusBar;
