import React, { useState, useMemo, useRef } from "react";
import styles from "./MainTab.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import SmallTop from "./SmallTop";
import MyButton from "./MyButton";

const MainTab = () => {
  //토글
  const [isToggled, setIsToggled] = useState(false);
  const [visible, setVisible] = useState([true, false, false, false]);
  console.log(visible[0], visible[1], visible[2], visible[3]);

  const toggle_content = useMemo(() => {
    if (isToggled) {
      return { display: "block" };
    } else {
      return { display: "none" };
    }
  });
  //input 데이터 전달
  const [firstData, setFirstData] = useState("");
  const [secondData, setSecondData] = useState("");
  const [thirdData, setThirdData] = useState("");
  const [diary, setDiary] = useState("");
  const firstDataRef = useRef();
  const diaryRef = useRef();
  // click시 하나만 트루이게
  const chg = (num) => {
    // let tmp = [...visible];
    // console.log(tmp);
    let tmp = visible.map(() => false);
    tmp[num] = true;
    console.log(tmp);
    setVisible(tmp);
  };

  // button누르면 다음 페이지로 넘어가게
  const handleNextPage = (num, state, ref) => {
    if (firstData.length < 1 || secondData.length < 1 || thirdData.length < 1) {
      window.confirm("모든 항목을 채워주세요");
      return;
    }
    if (state.length < 5) {
      ref.current.focus();
      console.log(`${state}Ref`);
      window.confirm("5글자 이상 입력해주세요!");
      return;
    }
    return chg(num);
  };
  const handlePrevPage = (num) => {
    return chg(num);
  };
  return (
    <div className={styles.MainTab}>
      <section className={`${styles.FourthSec} ${styles.contents_area}`}>
        <div className={styles.left_col}>
          <div className={styles.col_title}>
            <p>나의 하루는</p>
            <p>어땠나요?</p>
            <img
              src={process.env.PUBLIC_URL + `/assets/cloud.png`}
              alt="cloud"
            />
          </div>
          <div className={styles.col_sec_wrapper}>
            <p onClick={() => chg(0)}>오늘 하루 힘들었어요</p>
            <p onClick={() => chg(1)}>오늘도 이룬 게 없는 것 같아요</p>
          </div>
        </div>
        <div className={styles.right_col}>
          <div className={styles.phone_img}>
            <div className={styles.phone_top}>
              <div className={styles.phone_mid}></div>
            </div>
            <div className={styles.contents_wrapper}>
              {visible[0] && (
                <div className={styles.contents_wrapper_1}>
                  <div className={styles.phone_title}>
                    <p>마음을 안정시키는 playlist</p>
                  </div>
                  <iframe
                    width="230px"
                    height="410px"
                    src="https://www.youtube.com/embed/FQKOfCDsyr4"
                    title="마음수련 1분 명상 ASMR | 하늘"
                    allowFullScreen
                  ></iframe>
                  <div className={styles.script}>
                    <img
                      src={process.env.PUBLIC_URL + `/assets/icon_script.png`}
                      alt="icon_script"
                    />
                    <div className={styles.script_title}>스크립트 발췌</div>
                    <div
                      className={styles.toggle}
                      onClick={() => setIsToggled(!isToggled)}
                    >
                      <FontAwesomeIcon
                        icon={!isToggled ? faAngleDown : faAngleUp}
                      />
                    </div>
                  </div>
                  <div className={styles.script_content} style={toggle_content}>
                    부드럽게, 길게, 그리고 아주 깊게 숨을 쉬어봅니다. 시원한
                    공기가 몸 속으로 들어와 가득 차고, 부드럽고 따뜻한 숨이
                    내쉬어지는 것을 느껴보세요. 모든 생각과 스트레스가 내쉬는
                    호흡과 함께 내 몸에서 빠져나가는 것을 느껴보세요. 들이쉬고
                    내쉬고… 몸이 긴장해 있는지 마음으로 살펴봅니다. 만약 긴장해
                    있다면, 심호흡을 하며 긴장을 몰아냅니다. 호흡에 집중하세요.
                    <br />
                    <br />
                    이제 마음의 눈을 통해 길고 좁은 나무 계단을 따라갑니다.
                    맨발을 내디뎌 거칠고 오래된 나무계단과 발바닥이 맞닿는
                    감촉을 느껴봅니다.
                    <br />
                    <br />
                    계단을 하나씩 내려올 때마다 몸의 긴장이 더 부드럽게 사라지는
                    것을 느낍니다. 계단을 내려오면서, 고개를 들어보니, 밝고 하얀
                    모래가, 내가 볼 수 있는 곳 끝까지 해안선을 따라 펼쳐져
                    있다는 것을 알아차립니다.
                  </div>
                  <div className={styles.script_outer}>
                    어떤가요? 당신이 심상을 마쳤을때, 긍정적인 기분을 느꼈다면
                    좋겠어요.
                    <br />
                    <br />
                    심상은 많은 분들이 도움 받는 마음 치유 방법 중 하나랍니다.
                    꾸준히 연습해서 지칠 때, 힘든 감정이 올라올 때 적절히 사용해
                    주세요!
                  </div>
                </div>
              )}
              {visible[1] && (
                <div
                  className={styles.contents_wrapper_2_1}
                  style={visible[1] && { display: "flex" }}
                >
                  <SmallTop pageId={"1"} />
                  <img
                    src={process.env.PUBLIC_URL + `/assets/donelist.jpg`}
                    className={styles.contents_img}
                    alt={"donelist"}
                  />
                  <div className={styles.contents_msg}>
                    내가 최근에 해온 일들에 대해 Done List를 작성해보세요!
                    <br />
                    <br />
                    Done List는 오늘 하루 '한' 일에 집중하여 목록을 작성하는
                    것입니다. 숨을 쉰것도, 밥을 챙겨먹은것도 Done List에 들어 갈
                    수 있어요.
                  </div>
                  <div className={styles.input_box}>
                    <div className={styles.input_box_title}>
                      <img
                        src={process.env.PUBLIC_URL + `/assets/score_100.png`}
                        className={styles.input_box_img}
                        alt={"score_100"}
                      />
                      <div className={styles.input_title}>나의 DoneList</div>
                    </div>
                    <div className={styles.input_items}>
                      <input
                        value={firstData}
                        onChange={(e) => setFirstData(e.target.value)}
                        ref={firstDataRef}
                        placeholder="자유롭게 입력해주세요"
                      />
                      <input
                        value={secondData}
                        onChange={(e) => setSecondData(e.target.value)}
                        // ref={SecondDataRef}
                        placeholder="자유롭게 입력해주세요"
                      />
                      <input
                        value={thirdData}
                        onChange={(e) => setThirdData(e.target.value)}
                        // ref={ThirdDataRef}
                        placeholder="자유롭게 입력해주세요"
                      />
                    </div>
                  </div>
                  <MyButton
                    text={"다음으로 넘어갈래요!"}
                    onClick={() => handleNextPage(2, firstData, firstDataRef)}
                  />
                </div>
              )}
              {visible[2] && (
                <div
                  className={styles.contents_wrapper_2_2}
                  style={visible[2] && { display: "flex" }}
                >
                  <SmallTop pageId={"2"} />
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    onClick={() => handlePrevPage(1)}
                  />
                  <div className={styles.second_msg}>
                    이 중에서 내가 해낼 수 있었음에 감사했던 일은 무엇일까요?
                    <br />
                    <br />
                    이번에는 Done list중 한가지를 선택해서, 감사할 대상을
                    찾아보고 짤막한 감사일기를 써 볼 거예요.
                  </div>
                  <div className={styles.done_list}>
                    <p>✓ {firstData}</p>
                    <p>✓ {secondData}</p>
                    <p>✓ {thirdData}</p>
                    <div>ALL DONE!</div>
                  </div>
                  <div className={styles.second_msg_content}>
                    이 중에서 내가 해낼 수 있었음에 감사했던 일은 무엇일까요?
                    <br />
                    <br />
                    ✔️ 누군가의 도움이 있었나요?
                    <br />
                    ✔️ 이 일을 위해 노력할 수 있게 만들어준 주변 환경은
                    어땠나요?
                    <br />
                    ✔️ 일이 끝나고 나에게 남은 것은 무엇인가요?
                  </div>
                  <div className={styles.thanks_diary}>
                    <div className={styles.thanks_diary_title}>
                      📖나의 감사일기
                    </div>
                    <p>✓ {firstData}</p>
                    <p>✓ {secondData}</p>
                    <p>✓ {thirdData}</p>
                    <textarea
                      value={diary}
                      ref={diaryRef}
                      onChange={(e) => setDiary(e.target.value)}
                      placeholder="감사일기를 작성해주세요"
                    />
                  </div>
                  <MyButton
                    text={"입력했어요!"}
                    onClick={() => handleNextPage(3, diary, diaryRef)}
                  />
                </div>
              )}
              {visible[3] && (
                <div
                  className={styles.contents_wrapper_2_3}
                  style={visible[3] && { display: "flex" }}
                >
                  <SmallTop pageId={"3"} />
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    onClick={() => handlePrevPage(2)}
                  />
                  <div className={styles.thanks_diary_last}>
                    <div className={styles.thanks_diary_last_title}>
                      📖나의 감사일기
                    </div>
                    <div className={styles.thanks_diary_txt}>{diary}</div>
                  </div>
                  <div className={styles.last_greet}>
                    아주 좋아요, 오늘 하루를 마치며 Done List를 작성했다면, 그
                    중 어떤일에 감사할지, 하나씩 떠올려보는 것은 나의 하루를
                    더더욱 충만하게 만들거예요
                    <br />
                    <br />
                    앞을 향해 내달리는 것만큼, 뒤를 돌아보며 걸어온 길에
                    감사하는 것도 삶의 한 부분이라는 것을 기억해주세요🙋‍♀️
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainTab;
