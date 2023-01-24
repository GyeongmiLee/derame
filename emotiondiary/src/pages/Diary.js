import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import { strDate, strDay, strYear } from "../util/kor_date";
import { emotionList } from "../util/emotion";
// import styles from "./CommonDiary.module.css";
import styles from "./Diary.module.css";
import { scrollToTop } from "../App";

const Diary = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState();
  const navigate = useNavigate();
  //id로 들어오면 그려주기
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        window.confirm("없는 일기입니다.");
        navigate("/home", { replace: true });
      }
    }
  }, [id, diaryList]);
  //타이틀 바꿔주기
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정일기장 - ${id}번 일기`;
  }, []);

  if (!data) {
    return <div className="Diary">로딩중입니다..</div>;
  }
  // id같은 이모지 담은 currEmotionData, 맞을때만 들어와서 화면 그려줘야함
  else {
    const currEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    return (
      <div className={styles.CommonDiary}>
        <div className={styles.Diary_wrapper}>
          <div className={styles.Diary}>
            <MyHeader
              leftChildren={
                <MyButton
                  type={"white"}
                  text={"<"}
                  onClick={() => navigate(-1)}
                />
              }
              headerText={`${strYear(new Date(data.date))} ${strDate(
                new Date(data.date)
              )} ${strDay(new Date(data.date))}요일`}
              rightChildren={
                <img
                  src={process.env.PUBLIC_URL + `/assets/check.png`}
                  onClick={() => navigate(`/edit/${data.id}`)}
                  alt={"check"}
                />
              }
            />
            <article>
              <section className={styles.diary_title_wrapper}>
                <h4>{`그날의 감정: ${currEmotionData.emotion_des}`}</h4>
                <img src={`${currEmotionData.emotion_img}`} alt={"emotion"} />
              </section>
              <section className={styles.diary_content_wrapper}>
                <h4>그날의 일기</h4>
                {data.img && (
                  <img src={data.img ? data.img : " "} alt={"img"} />
                )}
                <div>{data.content}</div>
              </section>
            </article>
          </div>
        </div>
      </div>
    );
  }
};
export default Diary;
