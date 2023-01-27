import styles from "./SmallTop.module.css";

const SmallTop = ({ pageId }) => {
  return (
    <div className={styles.title_wrapper}>
      <div className={styles.title}>Done List!</div>
      <div className={styles.progress}>{`${pageId}/3`}</div>
      <div className={styles.bar}>
        <img
          src={process.env.PUBLIC_URL + `/assets/percent.png`}
          className="bar_img"
          alt="percent"
        />
      </div>
    </div>
  );
};

export default SmallTop;
