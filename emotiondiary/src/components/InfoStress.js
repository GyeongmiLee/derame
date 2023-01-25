import React from "react";
import styles from "./InfoStress.module.css";
import { stress } from "../util/Infolist";

const InfoStress = () => {
  return (
    <div className={styles.InfoStress}>
      <div className={styles.justify_box}>
        <div className={styles.jus_title}>스트레스의 정의</div>
        <div className={styles.jus_content}>
          우리의 생활 속에 존재하는 외적 자극에 대한
          <span> '신체적, 정신적 반응'</span> 을 말합니다.
          <br /> 일은 능률을 떨어뜨리고 신체적, 심리적 장애를 가져오는 부정적인
          면도 있지만, 모든 스트레스가 나쁘게 작용하는 것은 아닙니다. 생활속에서
          적당한 긴장감으로 생기를 주고 성취욕구와 에너지를 일깨우는 긍정적인
          역할을 하기도 합니다.
        </div>
        <div className={styles.stress_wrapper}>
          <div className={styles.img_box}>
            <img
              src={process.env.PUBLIC_URL + `/assets/normal_stress.png`}
              alt={"normal_stress"}
            />
            <div className={styles.txt_box}>
              <div className={styles.txt_title}>정상적 스트레스</div>
              <div className={styles.txt_contents}>
                건강과 업무수행능력을 증진시키는 긍정적인 자극
              </div>
            </div>
          </div>
          <div className={styles.img_box}>
            <img
              src={process.env.PUBLIC_URL + `/assets/bad_stress.png`}
              alt={"bad_stress"}
            />
            <div className={styles.txt_box}>
              <div className={styles.txt_title}>유해 스트레스</div>
              <div className={styles.txt_contents}>
                질병을 일으키거나 건강을 해치는 부정적인 자극
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overcome_box}>
        <div className={styles.overcome_title}>스트레스의 관리법</div>
        <ul className={styles.overcome_wrapper}>
          {stress.map((content, idx) => {
            return (
              <li key={idx}>
                <div className={styles.title}>{content.s_title}</div>
                <div className={styles.box}>
                  <div className={styles.content}>
                    {content.s_content.map((el, idx) => {
                      return <div key={idx}>{el}</div>;
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InfoStress;
