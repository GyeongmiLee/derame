import "./App.css";
import React, { useReducer, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";
import RouterTest from "./components/RouterTest";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
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
        it.id === action.targetId ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

// 어디서든 데이터를 꺼내서 쓸수있게 하는거니까 App 컴포넌트 밖에!
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  // useReducer(데이터 관리)
  const [data, dispatch] = useReducer(reducer, []);
  // id 자동으로 올라가게 만들려면
  const dataId = useRef(0); //초기값 0 넣어주기

  // dispatch 함수 필요한 경우
  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        content,
        emotion,
        date: new Date(date).getTime(), // new Date(date) 안넣어주면 현재 시간 들어감!
        id: dataId.current,
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
  const onEdit = (targetId, content, emotion, date) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <MyHeader
              leftChildren={
                <MyButton
                  type={"positive"}
                  text={"<"}
                  onClick={() => {
                    alert("왼쪽 클릭함");
                  }}
                />
              }
              headerText={"2022년 1월"}
              rightChildren={
                <MyButton
                  type={"negative"}
                  text={">"}
                  onClick={() => alert("오른쪽 클릭함")}
                />
              }
            />
            {/* <img src={process.env.PUBLIC_URL + `./assets/좋은감정.png`} /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/edit" element={<Edit />} />
            </Routes>
            <RouterTest />
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
