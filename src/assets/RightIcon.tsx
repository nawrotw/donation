import { forwardRef, SVGProps } from 'react';

const RightIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg width='24' height='24' viewBox="0 0 24 24" {...props} ref={ref}>
    <path d="M9.4 18L8 16.6L12.6 12L8 7.4L9.4 6L15.4 12L9.4 18Z" fill="#AAAAAA"/>
    <path d="M9.4 18L8 16.6L12.6 12L8 7.4L9.4 6L15.4 12L9.4 18Z" fill="black" fillOpacity="0.2"/>
  </svg>
));

export default RightIcon;
