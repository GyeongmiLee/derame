import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CommonHeader.module.css";

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <ul className={styles.hd_gnb}>
      <li className={styles.menu_li}>
        <div className={styles.img_box}>
          <img
            className={`${styles.menu_icon} ${styles.diary}`}
            src={process.env.PUBLIC_URL + `/assets/icon_diary.png`}
            onClick={() => navigate(`/home`)}
            alt={"home"}
          />
        </div>
        <span className={styles.text} onClick={() => navigate(`/home`)}>
          마음일기
        </span>
      </li>
      <li className={styles.menu_li}>
        <div className={styles.img_box}>
          <img
            className={`${styles.menu_icon} ${styles.location}`}
            src={process.env.PUBLIC_URL + `/assets/icon_location.png`}
            onClick={() => navigate(`/center`)}
            alt={"diary"}
          />
        </div>
        <span className={styles.text} onClick={() => navigate(`/center`)}>
          센터
        </span>
      </li>
      <li className={styles.menu_li} id={styles.li_3}>
        <div className={styles.img_box}>
          <img
            className={`${styles.menu_icon} ${styles.info}`}
            src={process.env.PUBLIC_URL + `/assets/icon_healthinfo.png`}
            onClick={() => navigate(`/info/0`)}
            alt={"center"}
          />
        </div>
        <ul className={styles.hd_info_pan}>
          <li className={styles.pan_menu} onClick={() => navigate(`/info/0`)}>
            우울
          </li>
          <li className={styles.pan_menu} onClick={() => navigate(`/info/1`)}>
            스트레스
          </li>
          <li className={styles.pan_menu} onClick={() => navigate(`/info/2`)}>
            불안
          </li>
        </ul>
      </li>
      <li className={styles.menu_li}>
        <div className={styles.img_box}>
          <img
            className={`${styles.menu_icon} ${styles.login}`}
            src={process.env.PUBLIC_URL + `/assets/icon_login.png`}
            onClick={() => navigate(`/`)}
            alt={"login"}
          />
        </div>
        <span className={styles.text} onClick={() => navigate(`/`)}>
          로그인
        </span>
      </li>
    </ul>
  );
};

export default HeaderComponent;
