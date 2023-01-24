import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { strDate, strDay } from "../util/kor_date";
import styles from "./DiaryItem.module.css";

const DiaryItem = ({ id, emotion, content, date, img }) => {
  const { onRemove } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  // 페이지들로 이동
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  const goRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(id);
      navigate("/home", { replace: true });
    }
  };

  return (
    <div className={styles.DiaryItem}>
      <div className={styles.item_top}>
        <div className={styles.emotion_img_wrapper} onClick={goDetail}>
          <img
            src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
            alt={"emotion"}
          />
        </div>
        <div className={styles.info_wrapper} onClick={goDetail}>
          <h3 className={styles.diary_date}>{strDate(new Date(date))}</h3>
          <div className={styles.diary_day}>{`${strDay(
            new Date(date)
          )}요일`}</div>
        </div>
        <div className={styles.btn_wrapper}>
          <img
            src={process.env.PUBLIC_URL + `assets/check.png`}
            onClick={goEdit}
            alt={"check"}
          />
          <div className={styles.btn_name} onClick={goEdit}>
            수정
          </div>
          <img
            src={process.env.PUBLIC_URL + `assets/delete.png`}
            onClick={goRemove}
            alt={"delete"}
          />
          <div className={styles.btn_name} onClick={goRemove}>
            삭제
          </div>
        </div>
      </div>
      <div className={styles.item_bottom} onClick={goDetail}>
        <div className={styles.diary_content_preview}>
          {content.slice(0, 65)}
        </div>
        {img && (
          <img src={img ? img : ""} className={styles.input_img} alt={"img"} />
        )}
      </div>
    </div>
  );
};
export default React.memo(DiaryItem);
