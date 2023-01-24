import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.Footer} ${styles.contents_area}`}>
      <img
        src={process.env.PUBLIC_URL + `/assets/favicon_logo.png`}
        alt="main_logo"
        className={styles.footer_logo}
        onClick={() => navigate(`/`)}
      />
      <div className={styles.footer_box}>
        <div className={styles.footer_title}>Dearme,</div>
        <div className={styles.footer_content}>
          00000, 서울시 영등포구 신길동 대표 : 이경미
          <br />
          사업자등록번호 100-00-00000 | 통신판매업신고: 2023-00000
          <br />
          문의처: dl_rudal@naver.com | 카카오 문의: 아이디 "dl_rudal"
          <br />
          Copyright Dearme, INC All Rights Reserved.
        </div>
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + `/assets/call.png`}
          alt="main_logo"
          className={styles.footer_call}
        />
      </div>
    </div>
  );
};

export default Footer;
