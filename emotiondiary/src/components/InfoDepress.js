import { useParams } from "react-router-dom";
import styles from "./InfoDepress.module.css";
import { overcome } from "../util/Infolist";

const InfoDepress = () => {
  const { id } = useParams();

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
