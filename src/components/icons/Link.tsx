const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 192 192"
    {...props}
  >
    <g stroke="currentColor" strokeWidth={12}>
      <circle cx={96} cy={96} r={74} />
      <ellipse cx={96} cy={96} rx={30} ry={74} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M28 72h136M28 120h136"
      />
    </g>
  </svg>
);
export default SvgComponent;
