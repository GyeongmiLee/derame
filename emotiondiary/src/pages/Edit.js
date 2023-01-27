import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";
import styles from "./CommonDiary.module.css";
import { scrollToTop } from "../App";

const Edit = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  //불러온 데이터를 쓸 state만들어주기
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  //제일먼저 id를 통해 잘 들어오는지 확인
  const { id } = useParams();
  //dataList불러오기
  const diaryList = useContext(DiaryStateContext);
  //edit이 mount 되었을때 id맞는 list 불러오기
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      // console.log(targetDiary);
      //예외처리
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/home", { replace: true });
      }
    }
  }, [diaryList, id]);

  //타이틀 바꿔주기
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `dearme, - ${id}번 일기 수정`;
  }, []);

  return (
    <div>
      <div className={styles.CommonDiary}>
        <div className={styles.Diary_wrapper}>
          {/* originData가 있으면 DiaryEditor랜더하도록! */}
          {originData && <DiaryEditor isEdit={true} originData={originData} />}
        </div>
      </div>
    </div>
  );
};
export default Edit;
