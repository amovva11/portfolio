import Clock from "react-live-clock";

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
