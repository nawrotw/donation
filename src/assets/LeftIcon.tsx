import { forwardRef, SVGProps } from 'react';

const LeftIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg width='24' height='24' viewBox="0 0 24 24" {...props} ref={ref}>
    <path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" fill="#AAAAAA"/>
    <path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" fill="black" fillOpacity="0.2"/>
  </svg>
));

export default LeftIcon;
