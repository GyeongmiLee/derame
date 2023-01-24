import React from "react";
import styles from "./InfoStress.module.css";

const InfoStress = () => {
  const stress = [
    {
      id: 0,
      s_title: "✔️스트레스 유발하는 원인을 조절하는 방법",
      s_content: [
        "· 문제해결: 스트레스가 되는 문제의 근본적인 원인의 해결",
        "· 기간관리: 촉박한 시간으로 인한 압박감에서 벗어남",
        "· 영양관리: 과식을 피하고 수분과 영양을 적절히 취함",
        "· 인지된 자극을 피하는 것: 스트레스가 유발되는 상황을 피함",
      ],
    },
    {
      id: 1,
      s_title: "✔️스트레스 억제 기술",
      s_content: [
        "· 적절한 수면",
        "· 이완요법(명상, 심상, 이완음악 등)",
        "· 항불안제 사용 : 의사의 처방에 따라 복용",
      ],
    },
    {
      id: 2,
      s_title: "✔️스트레스 환기 기술",
      s_content: [
        `· 신체적 운동 : 산책, 조깅, 테니스 등의 운동`,
        `· 정화법 : 가까운 사람과 스트레스에 대해 허심탄회하게 대화를 나눔 `,
      ],
    },
  ];
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
      {/*  */}
      <div className={styles.overcome_box}>
        <div className={styles.overcome_title}>스트레스의 관리법</div>
        <ul className={styles.overcome_wrapper}>
          {stress.map((content, idx) => {
            return (
              <li key={idx}>
                <div className={styles.title}>{content.s_title}</div>
                <div className={styles.box}>
                  <img
                    src={content.img}
                    className={styles.img}
                    alt={"content_img"}
                  />
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
