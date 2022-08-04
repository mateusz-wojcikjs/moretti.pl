const size = {
  mobile: "480px",
  tablet: "768px",
  smallDesktop: "1024px",
  desktop: "1280px",
  monitor: "1440px",
  xxl: "1740px",
};
const device = {
  xs: `(max-width: ${size.mobile})`,
  sm: `(max-width: ${size.tablet})`,
  m: `(max-width: ${size.smallDesktop})`,
  lg: `(max-width: ${size.desktop})`,
  xl: `(max-width: ${size.monitor})`,
  xxl: `(max-width: ${size.xxl})`,
};

const breakpoints = { size, device };

export default breakpoints;
