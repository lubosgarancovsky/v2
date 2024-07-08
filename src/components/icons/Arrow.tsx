const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={8}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M.646 3.646a.5.5 0 0 0 0 .708l3.182 3.182a.5.5 0 0 0 .708-.708L1.707 4l2.829-2.828a.5.5 0 0 0-.708-.708L.646 3.646ZM31 3.5H1v1h30v-1Z"
    />
  </svg>
);
export default SvgComponent;
