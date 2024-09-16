const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="currentColor" strokeWidth={2}>
      <path d="M14 19h2a2 2 0 0 0 2-2v-2.438a2 2 0 0 1 1.515-1.94l1.515-.38c.252-.063.252-.421 0-.485l-1.515-.378A2 2 0 0 1 18 9.439V5h-4M10 5H8a2 2 0 0 0-2 2v2.438a2 2 0 0 1-1.515 1.94l-1.515.38c-.252.063-.252.421 0 .485l1.515.378A2 2 0 0 1 6 14.561V19h4" />
    </g>
  </svg>
);
export default SvgComponent;
