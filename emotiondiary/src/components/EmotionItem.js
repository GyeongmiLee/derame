import React from "react";
import styles from "./EmotionItem.module.css";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_des,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        styles.emotionItem,
        isSelected
          ? `${styles["EmotionItem_" + emotion_id]}`
          : "EmotionItem_off",
      ].join(" ")}
    >
      <img
        src={emotion_img}
        className={styles.emotionItem_img}
        alt={"emotion_img"}
      />
      <span>{emotion_des}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
