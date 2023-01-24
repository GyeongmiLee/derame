import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import DiaryList from "../components/DiaryList";
import styles from "./CommonDiary.module.css";
import { scrollToTop } from "../App";

const Home = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  // useContext로 dummydata 받아가지고 오기
  const diaryList = useContext(DiaryStateContext);

  // 날짜 state
  const [currDate, setCurrDate] = useState(new Date());
  const headerText = `${currDate.getFullYear()}년 ${currDate.getMonth() + 1}월`;

  // 가공된 데이터 useState로 관리해줄것임
  const [data, setData] = useState();

  // 현재 달의 일기만 보여주는 로직
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstday = new Date(
        currDate.getFullYear(),
        currDate.getMonth(),
        1
      ).getTime();

      const lastday = new Date(
        currDate.getFullYear(),
        currDate.getMonth() + 1,
        0, //일
        23, //시
        59, //분
        59 //초
      ).getTime();

      setData(
        diaryList.filter((it) => it.date >= firstday && it.date <= lastday)
      );
    }
  }, [currDate, diaryList]);

  //타이틀 바꿔주기
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정일기장`;
  }, []);

  // 버튼 클릭시 이벤트
  const increaseMonth = () => {
    setCurrDate(
      new Date(
        currDate.getFullYear(),
        currDate.getMonth() + 1,
        currDate.getDate()
      )
    );
  };
  const decreaseMonth = () => {
    setCurrDate(
      new Date(
        currDate.getFullYear(),
        currDate.getMonth() - 1,
        currDate.getDate()
      )
    );
  };

  return (
    <div className={styles.CommonDiary}>
      <div className="Home">
        <div className={styles.Diary_wrapper}>
          <MyHeader
            leftChildren={
              <MyButton text={"<"} onClick={decreaseMonth} type={"white"} />
            }
            headerText={headerText}
            rightChildren={
              <MyButton text={">"} onClick={increaseMonth} type={"white"} />
            }
          />
          <DiaryList diaryList={data} />
        </div>
      </div>
    </div>
  );
};
export default Home;
