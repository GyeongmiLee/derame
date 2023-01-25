import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";
import { EffectCards } from "swiper";
import { useNavigate } from "react-router-dom";

const Swiperslide = () => {
  const navigate = useNavigate();

  return (
    <div className="Swiperslide">
      <div className="slide_title">
        내 마음에 필요한
        <br />
        깊고 복잡한 문제, 자세히 들여다봐요
      </div>
      <div id="wrap">
        <div id="wrap_app">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + "/assets/stress.png"}
                alt="스트레스"
                onClick={() => navigate("/info/1")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + `/assets/anxiety.png`}
                alt="불안"
                onClick={() => navigate("/info/2")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + `/assets/depress.png`}
                alt="우울"
                onClick={() => navigate("/info/0")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + `/assets/manic_depression.png`}
                alt="조울증"
                onClick={() => navigate("/info/0")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + `/assets/Psychosis.png`}
                alt="정신증"
                onClick={() => navigate("/info/0")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + `/assets/addiction.png`}
                alt="중독"
                onClick={() => navigate("/info/0")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + `/assets/suicide.png`}
                alt="자살"
                onClick={() => navigate("/info/0")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + `/assets/feeding.png`}
                alt="섭식"
                onClick={() => navigate("/info/0")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={process.env.PUBLIC_URL + `/assets/sleep.png`}
                alt="수면"
                onClick={() => navigate("/info/0")}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Swiperslide;
