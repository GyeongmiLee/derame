import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";
import styles from "./DiaryList.module.css";

//sortOptionList만들기
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];
const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];
const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className={styles.ControlMenu}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
});

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("latest");
  const [emofilter, setemoFilter] = useState("all");
  const navigate = useNavigate();

  //filter조건
  const filteredCondition = (item) => {
    if (emofilter === "good") {
      return parseInt(item.emotion) <= 3;
    } else {
      return parseInt(item.emotion) > 3;
    }
  };

  const getProcessDiaryList = () => {
    const copyList = JSON.parse(JSON.stringify(diaryList));

    // sort정렬
    const compare = (a, b) => {
      if (sortType === "latest") { //내림차순 = 최신순
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    //filter정렬
    const filteredList =
      emofilter === "all"
        ? copyList
        : copyList.filter((it) => filteredCondition(it));
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className={styles.DiaryList}>
      <div className={styles.menu_wrapper}>
        <h3>{`기록 ${diaryList.length}개`}</h3>
        <div className={styles.right_col}>
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={emofilter}
            onChange={setemoFilter}
            optionList={filterOptionList}
          />
          <MyButton
            type={"positive"}
            text={"일기 쓰기✏️"}
            onClick={() => navigate(`/new`)}
          />
        </div>
      </div>
      {/* 랜더될때마다 바뀌는 content */}
      {getProcessDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};
//defaultPorps전달해주기, 전달 안되어도 에러 안나게
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
