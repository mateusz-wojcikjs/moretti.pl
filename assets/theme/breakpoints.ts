const size = {
  xs: "480px",
  tablet: "768px",
  smallDesktop: "1024px",
  desktop: "1280px",
  monitor: "1440px",
};
const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.tablet})`,
  m: `(max-width: ${size.smallDesktop})`,
  lg: `(max-width: ${size.desktop})`,
  xl: `(max-width: ${size.monitor})`,
};
export default { size, device };
