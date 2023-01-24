import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./InfoDepress.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoDepress = () => {
  useEffect(() => {
    AOS.init();
  });

  const { id } = useParams();
  const overcome = [
    {
      id: "open_book",
      o_title: "독서하기",
      o_content:
        "나와 다른 사람의 감정과 행동의 이해를 돕는 독서는 문제해결과 의사결정에 도움이 됩니다.",
      img: process.env.PUBLIC_URL + `/assets/open-book.png`,
    },
    {
      id: "meditation",
      o_title: "명상하기",
      o_content:
        "명상은 평온한 상태에서 긍정적 감정들을 느끼게 하며 육체적, 정신적 긴장을 감소시킵니다.",
      img: process.env.PUBLIC_URL + `/assets/meditation.png`,
    },
    {
      id: "selfcare",
      o_title: "스스로 관리하기",
      o_content:
        "컴퓨터 자기관리 프로그램으로 우울상태를 체크하고 온라인 자가 증진 프로그램에 참여하는 등 스스로 관리합니다.",
      img: process.env.PUBLIC_URL + `/assets/selfcare.png`,
    },
    {
      id: "rosemary",
      o_title: "아로마 향으로 안정 찾기",
      o_content:
        "아로마 향은 식물에 존재하는 향기를 통해 정신적 스트레스와 긴장을 풀고 피로를 회복하며 안정을 찾도록 도움을 줍니다.",
      img: process.env.PUBLIC_URL + `/assets/rosemary.png`,
    },
    {
      id: "exercise",
      o_title: "운동하기",
      o_content:
        "신체를 사용하는 운동은 신체와 정신을 조절하여 스트레스나 불안을 해소시켜줍니다.",
      img: process.env.PUBLIC_URL + `/assets/exercise.png`,
    },
    {
      id: "sun",
      o_title: "햇볕쬐기",
      o_content:
        "계절성 우울은 햇빛과 관계가 있기 때문에 햇빛을 받으면 우울감을 완화하는데 좋습니다.",
      img: process.env.PUBLIC_URL + `/assets/sun.png`,
    },
  ];
  return (
    <div className={styles.InfoDepress}>
      <div className={styles.justify_box}>
        <div className={styles.jus_title}>우울의정의</div>
        <div className={styles.jus_content}>
          우울증은 <span>‘정신과의 감기’</span>라고 할 정도로 흔한 질병입니다.
          여자는 평생동안 10-25%, 남자는 평생동안 5-12%가 적어도 한번은 우울증에
          걸린다고 보고합니다. 세계보건기구(WHO)에서는 2020년 우울증이
          질병부담률 2위로 상승할 것을 예측합니다.
        </div>
      </div>
      <div className={styles.overcome_box}>
        <div className={styles.overcome_title}>우울증 관리방법 6가지</div>
        <ul className={styles.overcome_wrapper}>
          {overcome.map((content, idx) => {
            return (
              <li key={idx} className={styles[content.id]}>
                <div className={styles.title}>{content.o_title}</div>
                <div className={styles.box}>
                  <img src={content.img} className={styles.img} />
                  <div className={styles.content}>{content.o_content}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InfoDepress;
