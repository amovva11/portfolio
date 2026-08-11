import Link from "next/link";
import { headerLinks } from "../../data/explorer";

const WINDOW_DOT_COLORS = [
  "rgba(248, 113, 113, 1)",
  "rgba(251, 191, 36, 1)",
  "rgba(52, 211, 153, 1)",
];

const BackButton: React.FC = () => (
  <button
    onClick={() => history.back()}
    aria-label="Go back"
    className="flex flex-col justify-center items-center p-1 rounded-full text-gray-400 transition-color focus:outline-none"
  >
    <svg
      className="h-5 w-5"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      style={{ fill: "white" }}
      aria-hidden="true"
    >
      <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z" />
    </svg>
  </button>
);

/** The window chrome across the top: app icon, primary links, and traffic lights. */
const TitleBar: React.FC<{ showWindowControls: boolean }> = ({
  showWindowControls,
}) => (
  <div className="header w-full">
    <div className="logo pl-2">
      <img
        src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
        alt="Visual Studio Code Styled Portofolio Icon"
        width="60"
        height="60"
      />
    </div>
    <ul className="header-menu">
      {headerLinks.map((link) => (
        <li key={link.href} className="header-menu-link">
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
    {showWindowControls && (
      <div className="header-app-icons">
        <div className="flex flex-row items-center">
          <BackButton />
          {WINDOW_DOT_COLORS.map((color, index) => (
            <div
              key={color}
              className={`text-white rounded-full p-1 ${
                index === WINDOW_DOT_COLORS.length - 1 ? "mr-5" : "mr-2"
              }`}
              style={{
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      </div>
    )}
  </div>
);

export default TitleBar;
