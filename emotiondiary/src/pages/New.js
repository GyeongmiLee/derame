import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";
import CommonHeader from "../components/CommonHeader";
import styles from "./CommonDiary.module.css";
import { scrollToTop } from "../App";

const New = () => {
  //타이틀 바꿔주기
  useEffect(() => {
    scrollToTop();
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정일기장 - 새 일기 작성`;
  }, []);

  return (
    <div className={styles.CommonDiary}>
      {/* <div className={styles.CommonDiary}> */}
      <div className={styles.Diary_wrapper}>
        <DiaryEditor />
      </div>
      {/* </div> */}
    </div>
  );
};
export default New;
