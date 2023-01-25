import React from "react";
import styles from "./InfoAnxiety.module.css";
import { anxiety } from "../util/Infolist";

const InfoAnxiety = () => {
  return (
    <div className={styles.InfoAnxiety}>
      <div className={styles.justify_box}>
        <div className={styles.jus_title}>불안증의 정의</div>
        <div className={styles.jus_content}>
          · <b>불안이란</b> 광범위하게 매우 불쾌한 막연히 불안한 느낌과 관련된
          신체증상(가슴두근거림, 혈압상승, 빈맥, 진땀, 떨림 등)과
          행동증상(과민성, 서성거림)을 동반합니다.
          <br />· 불안은 신체가 친숙하지 않은 환경에 적응하고자 할 때 나타나는
          가장 기본적인 반응양상이지만, 같은 자극에도 부적절하게 반응하게 되는
          것을 <b>불안증</b>이라고 합니다.
        </div>
      </div>
      <div className={styles.symptom}>
        <div className={styles.jus_title}>불안증의 증상</div>
        <div className={styles.jus_content}>
          · 치료하지 않는 경우 수개월에서 수년까지 지속
          <br />
          · 만성화 될 경우, 개인적 고통 및 사회경제적 손실이 큼
          <br />
          · 적절한 상담이 없을 경우, 학업이나 직업의 실패
          <br />
          · 가족 및 대인관계의 문제 발생
          <br />· 사회적 고립
        </div>
      </div>
      {/*  */}
      <div className={styles.overcome_box}>
        <div className={styles.overcome_title}>불안증의 치료</div>
        <ul className={styles.overcome_wrapper}>
          {anxiety.map((content, idx) => {
            return (
              <li key={idx}>
                <div className={styles.title}>{content.a_title}</div>
                <div className={styles.box}>
                  <div className={styles.content}>
                    {content.a_content.map((el, idx) => {
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

export default InfoAnxiety;
