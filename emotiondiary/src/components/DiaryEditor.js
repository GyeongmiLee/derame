import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

import Myheader from "../components/MyHeader";
import MyButton from "../components/MyButton";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "../App";
import styles from "./DiaryEditor.module.css";

const DiaryEditor = ({ isEdit, originData }) => {
  const navigate = useNavigate();
  //input에 저장되는 숫자 저장
  const [date, setDate] = useState(getStringDate(new Date()));
  //emotion전달하는 state
  const [emotion, setEmotion] = useState(3);
  //이미지 state
  const [image, setImage] = useState("");
  //이미지 id같은 개념
  const imgRef = useRef();
  //텍스트 전달 state
  const [content, setContent] = useState("");
  const textRef = useRef();
  const { onCreate, onRemove, onEdit } = useContext(DiaryDispatchContext);
  //이미지 업로드 input의 onChange함수
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    // console.log(file);
    const reader = new FileReader(); //객체형태
    reader.readAsDataURL(file); //파일을 url로 만듦
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
  //클릭시 emotion state로 바뀌기
  const handleClickEmotion = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);
  //작성완료
  const handleSubmit = () => {
    //적어도 한글자 이상 적혀있어야함
    if (content.length < 1) {
      textRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion, image);
      } else {
        onEdit(originData.id, content, emotion, date, image);
      }
    }
    navigate("/home", { replace: true });
  };
  //삭제
  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/home", { replace: true });
    }
  };
  //isEdit, originData가 바뀔때만 실행
  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
      setImage(originData.img);
    }
  }, [isEdit, originData]);
  return (
    <div className={styles.DiaryEditor}>
      <Myheader
        leftChildren={
          <MyButton type={"white"} text={"<"} onClick={() => navigate(-1)} />
        }
        headerText={isEdit ? "일기 수정하기 " : "새 일기쓰기"}
        rightChildren={
          isEdit && (
            <img
              src={process.env.PUBLIC_URL + `/assets/delete.png`}
              onClick={handleRemove}
              alt={"delete"}
            />
          )
        }
      />
      <div className={styles.fir_sec}>
        <div className={styles.today_left}>
          <h4>오늘은</h4>
          <input
            className={styles.input_date}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className={styles.today_right}>
          <audio
            src="/assets/audio.mp3"
            autoPlay
            loop
            controls
            muted
            id="my_audio"
          ></audio>
        </div>
      </div>
      <section>
        <div className={styles.today_em_title}>오늘의 감정</div>
        <div className={`${styles.input_box} ${styles.emotion_list_wrapper}`}>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.emotion_id}
              {...it}
              onClick={handleClickEmotion}
              isSelected={it.emotion_id === emotion}
            />
          ))}
        </div>
      </section>
      <section>
        <div className={styles.thi_sec}>
          <h4>오늘의 기록✏️</h4>
          <form>
            <label className={styles.img_label} htmlFor="img_reader">
              <h4>이미지 불러오기📁</h4>
            </label>
            <input
              className={styles.img_input}
              type="file"
              accept="image/*"
              id="img_reader"
              onChange={saveImgFile}
              ref={imgRef}
            />
          </form>
        </div>
        <div className={`${styles.input_box} ${styles.text_wrapper}`}>
          {image && (
            <img
              src={image ? image : ""}
              className={styles.input_img}
              alt={"img"}
            />
          )}
          <textarea
            placeholder="오늘은 어땠나요"
            ref={textRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </section>
      <section className={styles.for_sec}>
        <MyButton text={"취소하기"} onClick={() => navigate(0)} />
        <MyButton type={"positive"} text={"작성완료"} onClick={handleSubmit} />
      </section>
    </div>
  );
};

export default DiaryEditor;
