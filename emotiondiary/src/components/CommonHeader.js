import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./CommonHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const CommonHeader = () => {
  //state 전달
  const navigate = useNavigate();
  //반응형 헤더
  const [isToggled, setIsToggled] = useState(false);
  // const [res, setIsRes] = useState(false);
  //페이지용 달라지는 헤더용
  const location = useLocation();

  // 스크롤 내려오면 계산해서 fixed 만들기(scrollY: 최상단으로부터 현재 스크롤 / )
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    // console.log(scrollPosition);
  });
  const style = (pathname) => {
    if (
      pathname === "/center" ||
      pathname === "/info/0" ||
      pathname === "/info/1" ||
      pathname === "/info/2"
    ) {
      return { backgroundColor: `transparent` };
    }
  };
  //사이즈 달라질때 => set함수로 걸어둬야겠다

  return (
    <div
      className={
        scrollPosition < 400
          ? `${styles.CommonHeader}`
          : `${styles.CommonHeader_fixed}`
      }
      style={style(location.pathname)}
    >
      {/* <div className={styles.CommonHeader} style={style(location.pathname)}> */}
      <div className={styles.logo}>로고</div>
      <img
        src={process.env.PUBLIC_URL + `/assets/main_logo.png`}
        onClick={() => navigate(`/`)}
        className={styles.logo_img}
        alt={"main_logo"}
      />
      {/* toggle */}
      <div
        className={styles.toggle}
        onClick={() => {
          setIsToggled(!isToggled);
          // setIsRes(!res);
        }}
      >
        {/* <FontAwesomeIcon icon={faBars} /> */}
        <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
        {/* 다시 초기화도 시켜야함, 건강정보에 대한 디테일 손보기! */}
      </div>
      <ul className={styles.hd_gnb}>
        <li className={styles.menu_li}>
          {/* <div className="menu_icon diary"></div> */}
          <img
            className={`${styles.menu_icon} ${styles.diary}`}
            src={process.env.PUBLIC_URL + `/assets/icon_diary.png`}
            onClick={() => navigate(`/home`)}
            alt={"home"}
          />
          <span className={styles.text}>마음일기</span>
        </li>
        <li className={styles.menu_li}>
          {/* <div className="menu_icon location"></div> */}
          <img
            className={`${styles.menu_icon} ${styles.location}`}
            src={process.env.PUBLIC_URL + `/assets/icon_location.png`}
            onClick={() => navigate(`/center`)}
            alt={"diary"}
          />
          <span className={styles.text}>센터</span>
        </li>
        <li className={styles.menu_li} id={styles.li_3}>
          {/* <div className="menu_icon info"></div> */}
          <img
            className={`${styles.menu_icon} ${styles.info}`}
            src={process.env.PUBLIC_URL + `/assets/icon_healthinfo.png`}
            onClick={() => navigate(`/info/0`)}
            alt={"center"}
          />
          {/* {!res ? <span className={styles.text}>정보</span> : ""} */}
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
          {/* <div className="menu_icon login"></div> */}
          <img
            className={`${styles.menu_icon} ${styles.login}`}
            src={process.env.PUBLIC_URL + `/assets/icon_login.png`}
            onClick={() => navigate(`/`)}
            alt={"login"}
          />
          <span className={styles.text}>로그인</span>
        </li>
      </ul>
    </div>
  );
};

export default CommonHeader;
