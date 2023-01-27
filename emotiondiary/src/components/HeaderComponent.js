import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CommonHeader.module.css";

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <ul className={styles.hd_gnb}>
      <li className={styles.menu_li} onClick={() => navigate(`/home`)}>
        <div className={styles.img_box}>
          <img
            className={`${styles.menu_icon} ${styles.diary}`}
            src={process.env.PUBLIC_URL + `/assets/icon_diary.png`}
            alt={"home"}
          />
        </div>
        <span className={styles.text}>마음일기</span>
      </li>
      <li className={styles.menu_li} onClick={() => navigate(`/center`)}>
        <div className={styles.img_box}>
          <img
            className={`${styles.menu_icon} ${styles.location}`}
            src={process.env.PUBLIC_URL + `/assets/icon_location.png`}
            alt={"diary"}
          />
        </div>
        <span className={styles.text}>센터</span>
      </li>
      <li
        className={styles.menu_li}
        id={styles.li_3}
        onClick={() => navigate(`/info/0`)}
      >
        <div className={styles.img_box}>
          <img
            className={`${styles.menu_icon} ${styles.info}`}
            src={process.env.PUBLIC_URL + `/assets/icon_healthinfo.png`}
            alt={"center"}
            onClick={() => navigate(`/info/0`)}
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
      <li className={styles.menu_li} onClick={() => navigate(`/`)}>
        <div className={styles.img_box}>
          <img
            className={`${styles.menu_icon} ${styles.login}`}
            src={process.env.PUBLIC_URL + `/assets/icon_login.png`}
            alt={"login"}
          />
        </div>
        <span className={styles.text}>로그인</span>
      </li>
    </ul>
  );
};

export default HeaderComponent;
