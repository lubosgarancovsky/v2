const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3.25 1.75h3v4.5h-3zM9.75 6.25h3m-3-4.5h1.5v4M9.75 9.75h3v4.5h-3zM3.25 14.25h3m-3-4.5h1.5v4" />
  </svg>
);
export default SvgComponent;
