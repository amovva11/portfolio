import { Scrollbars } from "react-custom-scrollbars";

/**
 * The custom scrollbar every content page wraps itself in, with the auto-hide
 * timings applied consistently instead of repeated at each call site.
 */
const PageScroll: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Scrollbars
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    universal={true}
  >
    {children}
  </Scrollbars>
);

export default PageScroll;
