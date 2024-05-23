import { forwardRef } from 'react';

const PeopleWithHeartIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg width='58' height='56' viewBox="0 0 58 56" {...props} ref={ref}>
    <path
      d="M54.125 52.125V28.875V29.85V52.125ZM50 17.625C51.15 17.625 52.125 17.225 52.925 16.425C53.725 15.625 54.125 14.65 54.125 13.5C54.125 12.35 53.725 11.375 52.925 10.575C52.125 9.775 51.15 9.375 50 9.375C48.85 9.375 47.875 9.775 47.075 10.575C46.275 11.375 45.875 12.35 45.875 13.5C45.875 14.65 46.275 15.625 47.075 16.425C47.875 17.225 48.85 17.625 50 17.625ZM50 21C47.85 21 46.0625 20.2875 44.6375 18.8625C43.2125 17.4375 42.5 15.65 42.5 13.5C42.5 11.4 43.2125 9.625 44.6375 8.175C46.0625 6.725 47.85 6 50 6C52.1 6 53.875 6.725 55.325 8.175C56.775 9.625 57.5 11.4 57.5 13.5C57.5 15.65 56.775 17.4375 55.325 18.8625C53.875 20.2875 52.1 21 50 21ZM29 14.625C30.55 14.625 31.875 14.0875 32.975 13.0125C34.075 11.9375 34.625 10.6 34.625 9C34.625 7.45 34.075 6.125 32.975 5.025C31.875 3.925 30.55 3.375 29 3.375C27.4 3.375 26.0625 3.925 24.9875 5.025C23.9125 6.125 23.375 7.45 23.375 9C23.375 10.6 23.9125 11.9375 24.9875 13.0125C26.0625 14.0875 27.4 14.625 29 14.625ZM29 18C26.45 18 24.3125 17.1375 22.5875 15.4125C20.8625 13.6875 20 11.55 20 9C20 6.5 20.8625 4.375 22.5875 2.625C24.3125 0.875 26.45 0 29 0C31.5 0 33.625 0.875 35.375 2.625C37.125 4.375 38 6.5 38 9C38 11.55 37.125 13.6875 35.375 15.4125C33.625 17.1375 31.5 18 29 18ZM15.125 31.125C15.125 32.925 16.0125 34.9875 17.7875 37.3125C19.5625 39.6375 23.125 43.2 28.475 48L29 48.45L29.6 47.925C34.75 43.225 38.25 39.725 40.1 37.425C41.95 35.125 42.875 33.025 42.875 31.125C42.875 29.425 42.325 28 41.225 26.85C40.125 25.7 38.75 25.125 37.1 25.125C36.15 25.125 35.25 25.35 34.4 25.8C33.55 26.25 32.775 26.825 32.075 27.525L28.85 30.675H29.15L25.85 27.525C25.15 26.825 24.3875 26.25 23.5625 25.8C22.7375 25.35 21.85 25.125 20.9 25.125C19.25 25.125 17.875 25.7 16.775 26.85C15.675 28 15.125 29.425 15.125 31.125ZM11.675 31.125C11.675 28.675 12.6125 26.4875 14.4875 24.5625C16.3625 22.6375 18.5 21.675 20.9 21.675C22.35 21.675 23.7625 22.025 25.1375 22.725C26.5125 23.425 27.675 24.35 28.625 25.5L29 25.95L29.375 25.5C30.325 24.35 31.475 23.425 32.825 22.725C34.175 22.025 35.6 21.675 37.1 21.675C39.45 21.675 41.575 22.6375 43.475 24.5625C45.375 26.4875 46.325 28.675 46.325 31.125C46.325 33.625 45.3875 36.125 43.5125 38.625C41.6375 41.125 37.875 44.95 32.225 50.1L29 53.1L25.85 50.175C20.05 44.925 16.2375 41.0625 14.4125 38.5875C12.5875 36.1125 11.675 33.625 11.675 31.125ZM8 17.625C9.15 17.625 10.125 17.225 10.925 16.425C11.725 15.625 12.125 14.65 12.125 13.5C12.125 12.35 11.725 11.375 10.925 10.575C10.125 9.775 9.15 9.375 8 9.375C6.85 9.375 5.875 9.775 5.075 10.575C4.275 11.375 3.875 12.35 3.875 13.5C3.875 14.65 4.275 15.625 5.075 16.425C5.875 17.225 6.85 17.625 8 17.625ZM29.225 55.5V52.125H54.125V29.85C54.125 29.6 54.025 29.375 53.825 29.175C53.625 28.975 53.4 28.875 53.15 28.875H44.075V25.5H53.15C54.35 25.5 55.375 25.925 56.225 26.775C57.075 27.625 57.5 28.65 57.5 29.85V55.5H29.225ZM3.875 52.125H29.225V55.5H0.5V29.85C0.5 28.65 0.925 27.625 1.775 26.775C2.625 25.925 3.65 25.5 4.85 25.5H13.925V28.875H4.85C4.55 28.875 4.3125 28.975 4.1375 29.175C3.9625 29.375 3.875 29.6 3.875 29.85V52.125ZM8 21C5.85 21 4.0625 20.2875 2.6375 18.8625C1.2125 17.4375 0.5 15.65 0.5 13.5C0.5 11.4 1.2125 9.625 2.6375 8.175C4.0625 6.725 5.85 6 8 6C10.1 6 11.875 6.725 13.325 8.175C14.775 9.625 15.5 11.4 15.5 13.5C15.5 15.65 14.775 17.4375 13.325 18.8625C11.875 20.2875 10.1 21 8 21Z"
      fill="#423C66"/>
  </svg>
));

export default PeopleWithHeartIcon;
