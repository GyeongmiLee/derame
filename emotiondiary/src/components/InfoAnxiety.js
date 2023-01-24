import React from "react";
import styles from "./InfoAnxiety.module.css";

const InfoAnxiety = () => {
  const anxiety = [
    {
      id: 0,
      a_title: "✔️ 약물치료",
      a_content: [
        "· 신체 자율신경계의 균형이나 뇌신경전달물질의 이상으로 불안장애가 올 수 있다는 원인론에 비추어 볼 때 그것에 해당하는 약물치료가 우선적으로 중요합니다.",
      ],
    },
    {
      id: 1,
      a_title: "✔️ 인지치료",
      a_content: [
        "· 잘못된 고정관념을 교정하는 것을 목표로 하는 치료방법. 여러 가지 생각을 검토해보고 객관적으로 그것에 대해 생각해 봄으로써 타당한 생각으로 교정해 나가는 것.",
        "· 사람은 생각이 바뀌면 감정도 바뀌므로 과도한 불안이 교정 가능합니다.",
      ],
    },
    {
      id: 2,
      a_title: "✔️ 행동치료",
      a_content: [
        `· 주로 공포증(고소공포증, 동물공포증, 폐쇄공포증 등)의 치료에 사용. 이완훈련을 동반한 탈감작법, 실제상황에 노출 시키면서 치료하는 노출훈련법, 혐오 자극법`,
      ],
    },
    {
      id: 3,
      a_title: "✔️ 개인정신치료",
      a_content: [
        `· 심층정신치료를 통해 불안의 무의식적인 근원을 찾아볼 수 있으며, 현실의 문제를 위주로 지지 정신치료를 할 수 있습니다.`,
      ],
    },
    {
      id: 4,
      a_title: "✔️ 집단치료",
      a_content: [
        `· 일반적으로 인지치료를 5-10명 정도가 함께 하는 경우. 성공적인 경험을 나눌 수도 있고 지지그룹이 형성되어 좋은 효과를 볼 수 있습니다.`,
      ],
    },
  ];
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
