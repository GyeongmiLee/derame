import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./CommonHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import HeaderComponent from "./HeaderComponent";

const CommonHeader = () => {
  //state 전달
  const navigate = useNavigate();
  //반응형 헤더
  const [isToggled, setIsToggled] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 600 });
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 600 });
    return isMobile ? children : null;
  };

  //페이지용 달라지는 헤더용
  const location = useLocation();

  // 스크롤 내려오면 계산해서 fixed 만들기(scrollY: 최상단으로부터 현재 스크롤 / )
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
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

  return (
    <div
      className={
        scrollPosition < 240
          ? `${styles.CommonHeader}`
          : `${styles.CommonHeader_fixed}`
      }
      style={style(location.pathname)}
    >
      <div className={styles.logo}>로고</div>
      <img
        src={process.env.PUBLIC_URL + `/assets/main_logo.png`}
        onClick={() => navigate(`/`)}
        className={styles.logo_img}
        alt={"main_logo"}
      />
      {!isMobile && <HeaderComponent />}
      {/* 반응형헤더 */}
      <Mobile>
        <div
          className={styles.toggle}
          onClick={() => {
            setIsToggled(!isToggled);
            // 평소에 없다가, 작은 화면일때만 들어가게!
          }}
        >
          <FontAwesomeIcon
            icon={isToggled ? faBars : faTimes}
            className={styles.icon}
          />
          <div
            style={!isToggled ? { display: "block" } : { display: "none" }}
            className={styles.ham_box}
          >
            <HeaderComponent />
          </div>
        </div>
      </Mobile>
    </div>
  );
};

export default CommonHeader;
