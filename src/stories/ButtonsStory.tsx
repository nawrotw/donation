import { Button as MuiButton } from "@mui/material";
import styles from "./storyBook.module.scss";

export const ButtonsStory = () => {
  return (<>
    <div className={styles.flex}>
      <div className={styles.column}>
        Default:
        <MuiButton color='primary'>Submit</MuiButton>
        <MuiButton variant='outlined'>Cancel</MuiButton>
        <MuiButton color='secondary' variant='text'>Action</MuiButton>
      </div>
      <div className={styles.column}>
        Hover:
        <MuiButton className='hover'>Submit</MuiButton>
        <MuiButton className='hover' variant='outlined'>cancel</MuiButton>
        <MuiButton color='secondary' variant='text' className='hover'>Action</MuiButton>
      </div>
      <div className={styles.column}>
        Pressed:
        <MuiButton className='active'>Submit</MuiButton>
        <MuiButton className='active' variant='outlined'>cancel</MuiButton>
        <MuiButton color='secondary' variant='text' className='active'>Action</MuiButton>
      </div>
    </div>
  </>);
};
