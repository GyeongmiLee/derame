import "./App.css";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";
import CommonHeader from "./components/CommonHeader";
import Main from "./pages/Main";
import Info from "./pages/Info";
import Center from "./pages/Center";

//페이지 들어올때 최상단 보여줌
export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "auto",
  });
};
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    //데이터 받을때
    case "INIT": {
      return action.data;
    }
    //새로운 데이터를 만들때
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    //데이터 삭제
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  //newState가 변화할때마다 localStorage 데이터 넣어주기
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

// 어디서든 데이터를 꺼내서 쓸수있게 하는거니까 App 컴포넌트 밖에!
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

// dummydata
// const dummydata = [
//   {
//     id: 1,
//     emotion: 4,
//     content:
//       "예시용 내용입니다, 일기를 작성하면 이런식으로 데이터가 들어갑니다!",
//     date: 1670001834001,
//   },
//   {
//     id: 2,
//     emotion: 2,
//     content:
//       "예시용 내용입니다, 일기를 작성하면 이런식으로 데이터가 들어갑니다!",
//     date: 1673606261904,
//   },
//   {
//     id: 3,
//     emotion: 1,
//     content:
//       "예시용 내용입니다, 사진을 넣으면 이런식으로 데이터가 들어갑니다. 고양이 귀엽죠(●'◡'●)",
//     date: 1672680234000,
//     img: `${process.env.PUBLIC_URL}/assets/cat.png`,
//   },
// ];

function App() {
  // useReducer(데이터 관리)
  const [data, dispatch] = useReducer(reducer, []);
  // id 자동으로 올라가게 만들려면
  const dataId = useRef(0); //초기값 0 넣어주기
  //dom 요소에 접근 - useRef 사용!
  const [showButton, setShowButton] = useState(false);
  const handleShowButton = () => {
    if (window.scrollY || document.documentElement.scrollTop > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  //top버튼 누르면 top 0되게
  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  // localStorage 사용해서 사용자가 입력한 일기 저장되게
  useEffect(() => {
    const localData = localStorage.getItem("diary");
    //있을때만 수행하게
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );
      //localData id보다 1 크게!(내림차순)
      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;
        //초기값으로 설정
        dispatch({ type: "INIT", data: diaryList });
      }
    }
    // scrollToTop실행
    window.addEventListener("scroll", handleShowButton);
  }, []);

  // dispatch 함수 필요한 경우
  // CREATE
  const onCreate = (date, content, emotion, img) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        emotion,
        content,
        date: new Date(date).getTime(), // new Date(date) 안넣어주면 현재 시간 들어감!
        img,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  };
  // EDIT
  const onEdit = (targetId, content, emotion, date, img) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
        img,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            {showButton && (
              <img
                src={process.env.PUBLIC_URL + `/assets/letter.png`}
                className="btn_gotop"
                onClick={handleScroll}
                alt={"go_top"}
              />
            )}
            <CommonHeader />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/home" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/info/:id" element={<Info />} />
              <Route path="/center" element={<Center />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
