import React, { useEffect, useRef, useState } from "react";
import styles from "./Main.module.css";
import MainTab from "../components/MainTab";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import Swiperslide from "../components/Swiperslide";
import Footer from "../components/Footer";
import { scrollToTop } from "../App";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  // 화면 로딩하면 한번만 실행되게
  useEffect(() => {
    scrollToTop();
  }, []);
  //타이핑
  const txt = "나의 마음을 위한 앱, 디어미";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
    const interval = setInterval(() => {
      setText(text + txt[count]); //이전 set한문자 + 다음 문자
      setCount(count + 1);
    }, 100);
    if (text.length === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const navigate = useNavigate();

  return (
    <div className={styles.Main}>
      <div className={styles.color_box}>
        <section
          className={`${styles.FirstSec} ${styles.contents_area}`}
          // translatd3d(0,50%,0)
          style={{ opacity: 0 }}
        >
          <div className={styles.main_title} id={styles.font_med}>
            기록해보세요
          </div>
          <div className={styles.main_title} id={styles.font_big}>
            나에게만 하고싶은 이야기
          </div>
        </section>
        <section className={`${styles.SecondSec} ${styles.contents_area}`}>
          <div className={styles.ad_wrapper}>
            <img
              src={process.env.PUBLIC_URL + `/assets/favicon_logo.png`}
              alt="main_logo"
              className={styles.ad_logo}
            />
            <div className={styles.ad_text}>{text}</div>
            <img
              src={process.env.PUBLIC_URL + `/assets/handshapetwo.png`}
              alt="hand_shape"
              className={styles.ad_handshape}
            />
          </div>
        </section>
        <section className={`${styles.ThirdSec} ${styles.contents_area}`}>
          <div className={styles.left_col} data-aos="fade-left">
            <p>내 마음</p>
            <p>잘 알고 있나요?</p>
          </div>
          <div className={styles.right_col} data-aos="fade-right">
            <div className={styles.bold_txt}>
              <p>시기마다 마주쳤던 마음의 벽,</p>
              <p>어쩌면 내 마음을 몰랐기 때문이었는지 몰라요.</p>
            </div>
            <div className={styles.nom_txt}>
              <p>디어미는 당신이 건강하고 균형잡힌 삶으로</p>
              <p>나아갈 수 있도록 돕습니다.</p>
            </div>
          </div>
        </section>
        <div className={styles.button_box}>
          <MyButton
            type={"negative"}
            text={"건강정보 보러가기"}
            onClick={() => navigate("/info/0")}
          />
        </div>
        <MainTab />
        <section className={`${styles.FifthSec} ${styles.contents_area}`}>
          <div className={styles.ad_box} data-aos="fade-right">
            <p className={`${styles.ad_text} ${styles.ad_text_title}`}>
              Dear me,
            </p>
            <p className={styles.ad_text}>
              일기를 쓰면서
              <br />
              오늘 하루도 나에게
              <br />
              귀기울여보세요
            </p>
          </div>
          <img
            src={process.env.PUBLIC_URL + `/assets/diary.gif`}
            alt="main_logo"
            className={styles.ad_handshape}
            data-aos="fade-left"
          />
        </section>
        <div className={styles.button_box}>
          <MyButton
            type={"negative"}
            text={"일기 쓰러 가기"}
            onClick={() => navigate("/home")}
          />
        </div>
        <Swiperslide />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
