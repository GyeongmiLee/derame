import React, { useState, useEffect } from "react";
import styles from "./Info.module.css";
import InfoAnxiety from "../components/InfoAnxiety";
import InfoDepress from "../components/InfoDepress";
import InfoStress from "../components/InfoStress";
import { useParams, Link, useNavigate } from "react-router-dom";
import { scrollToTop } from "../App";

const Info = () => {
  //params
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    if (id >= 3) {
      window.confirm("없는 페이지입니다.");
      navigate("/", { replace: true });
    }
  }, [id]);

  useEffect(() => {
    scrollToTop();
  }, []);

  // 페이지 객체로 만들어주기
  const obj = {
    0: <InfoDepress />,
    1: <InfoStress />,
    2: <InfoAnxiety />,
  };
  // tab 메뉴
  const arr = ["우울", "스트레스", "불안"];

  return (
    <div className={`${styles.Info} ${styles.contents_area}`}>
      <ul className={styles.tabs}>
        {arr.map((content, idx) => {
          return (
            <Link to={`/info/${idx}`} key={idx}>
              <li key={idx}>
                <div className={styles.txt_box}>
                  {content}
                  <div
                    className={idx === +id ? styles["click"] : styles["hover"]}
                  ></div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
      <div className={styles.contents}>
        {/* 지금 선택된 activeTab */}
        {obj[+id]}
      </div>
    </div>
  );
};

export default Info;
