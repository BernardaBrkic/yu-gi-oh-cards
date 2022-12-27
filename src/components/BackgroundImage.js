import classes from "./BackgroundImage.module.css";

const BackgroundImage = (props) => {
  return (
    <div className={classes["background-image"]}>
      <div className={classes.overlay}></div>
    </div>
  );
};

export default BackgroundImage;
