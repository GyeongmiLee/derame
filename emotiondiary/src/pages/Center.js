import { CustomOverlayMap, MapMarker, Map } from "react-kakao-maps-sdk";
import React, { useState, useEffect } from "react";
import { scrollToTop } from "../App";
import Footer from "../components/Footer";
import styles from "./Center.module.css";

const Center = () => {
  const [isOpen, setIsOpen] = useState("");
  const [centerData, setCenterData] = useState([]);

  const url = `https://apis.data.go.kr/1383000/gmis/teenDscsnSrcnService/getTeenDscsnSrcnList?serviceKey=SpXRW0ibO0mb4Ao%2FAztVDtAJERk%2BvEbOI1fTpnOkH7au9ySG2C1PfuSPRfPrHarZ0E1qbBiouZNNyi%2FgP3pKGA%3D%3D&pageNo=1&numOfRows=111&type=json`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const locations = data.response.body.items.item.map((spot) => [
      spot.cnterNm,
      spot.lat,
      spot.lot,
      spot.hmpgAddr,
      spot.operHrCn,
      spot.roadNmAddr,
      spot.rprsTelno,
      spot.sprtCnt,
    ]);
    setCenterData(locations);
  };
  useEffect(() => {
    getData();
    //타이틀 바꿔주기
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `dearme - center`;
    scrollToTop();
  }, []);

  return (
    <>
      <img
        src={process.env.PUBLIC_URL + `/assets/center_detail.png`}
        className={styles.center_info}
        alt="center_detail"
      />
      <Map // 지도를 표시할 Container
        id={`map`}
        center={{
          // 지도의 중심좌표
          lat: 37.5400456,
          lng: 126.9921017,
        }}
        className={styles.map}
        level={9} // 지도의 확대 레벨
      >
        {centerData &&
          centerData.map((it, idx) => {
            let [
              cnterNm,
              lat,
              lot,
              hmpgAddr,
              operHrCn,
              roadNmAddr,
              rprsTelno,
              sprtCnt,
            ] = it;
            return (
              <div key={idx}>
                <MapMarker
                  position={{ lat: +lat, lng: +lot }}
                  onClick={() => setIsOpen(idx)}
                />
                {isOpen === idx && (
                  <CustomOverlayMap position={{ lat: +lat, lng: +lot }}>
                    <div className={styles.wrap}>
                      <div className={styles.info}>
                        <div className={styles.title}>
                          {cnterNm}📌
                          <img
                            className={styles.close}
                            src={process.env.PUBLIC_URL + `/assets/x.png`}
                            onClick={() => setIsOpen(false)}
                            title="닫기"
                            alt="x"
                          />
                        </div>
                        <div className={styles.body}>
                          <div className={styles.desc}>
                            <div>
                              <b>홈페이지 주소:</b> {hmpgAddr}
                            </div>
                            <div className={styles.ellipsis}>
                              <b>도로명 주소:</b> {roadNmAddr}
                            </div>
                            <div className={styles.ellipsis}>
                              <b>상담 운영 시간:</b> {operHrCn}
                            </div>
                            <div className={styles.ellipsis}>
                              <b>전화 상담:</b> {rprsTelno}
                            </div>
                            <div className={styles.ellipsis}>
                              <b>주요 프로그램:</b> {sprtCnt}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    ;
                  </CustomOverlayMap>
                )}
              </div>
            );
          })}
      </Map>
      <Footer />
    </>
  );
};

export default Center;
