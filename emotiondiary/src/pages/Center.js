import { CustomOverlayMap, MapMarker, Map } from "react-kakao-maps-sdk";
import React, { useState, useEffect } from "react";
import { scrollToTop } from "../App";
const Center = () => {
  const [isOpen, setIsOpen] = useState(""); //원래 false
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
    scrollToTop();
    //마운트될때 정보 가져오는거까지 완료
    getData();
  }, []);

  return (
    <>
      <img
        src={process.env.PUBLIC_URL + `/assets/center_detail.png`}
        style={{
          width: "550px",
          height: "215px",
          position: "relative",
          transform: "translate(-50%, 0)",
          left: "50%",
          top: "50%",
        }}
      />
      <Map // 지도를 표시할 Container
        id={`map`}
        center={{
          // 지도의 중심좌표
          lat: 37.5400456,
          lng: 126.9921017,
        }}
        style={{
          // 지도의 크기
          width: "80%",
          height: "600px",
          position: "relative",
          transform: "translate(-50%, 0)",
          left: "50%",
          marginTop: "23px",
        }}
        level={10} // 지도의 확대 레벨
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
                    <div
                      className="wrap"
                      style={{ backgroundColor: "white", borderRadius: "25px" }}
                    >
                      <div className="info">
                        <div
                          className="title"
                          style={{
                            borderBottom: "1px solid #ececec",
                            margin: "10px",
                            padding: "10px",
                            fontWeight: "800",
                            fontFamily: "ONE-Mobile-Regular",
                          }}
                        >
                          {cnterNm}📌
                          <img
                            className="close"
                            src={process.env.PUBLIC_URL + `/assets/x.png`}
                            onClick={() => setIsOpen(false)}
                            style={{
                              position: "absolute",
                              right: "4%",
                              width: "11px",
                            }}
                            title="닫기"
                          />
                        </div>
                        <div
                          className="body"
                          style={{
                            padding: "0 10px",
                            paddingBottom: "10px",
                          }}
                        >
                          <div className="desc">
                            <div
                              style={{
                                paddingTop: "1px",
                                fontFamily: "ONE-Mobile-Regular",
                                fontSize: "14px",
                              }}
                            >
                              홈페이지 주소: {hmpgAddr}
                            </div>
                            <div
                              className="ellipsis"
                              style={{
                                paddingTop: "5px",
                                fontFamily: "ONE-Mobile-Regular",
                                fontSize: "14px",
                              }}
                            >
                              도로명 주소: {roadNmAddr}
                            </div>
                            <div
                              className="jibun ellipsis"
                              style={{
                                paddingTop: "5px",
                                fontFamily: "ONE-Mobile-Regular",
                                fontSize: "14px",
                              }}
                            >
                              상담 운영 시간: {operHrCn}
                            </div>
                            <div
                              className="jibun ellipsis"
                              style={{
                                paddingTop: "5px",
                                fontFamily: "ONE-Mobile-Regular",
                                fontSize: "14px",
                              }}
                            >
                              전화 상담: {rprsTelno}
                            </div>
                            <div
                              className="jibun ellipsis"
                              style={{
                                paddingTop: "5px",
                                fontFamily: "ONE-Mobile-Regular",
                                fontSize: "14px",
                              }}
                            >
                              주요 프로그램: {sprtCnt}
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
    </>
  );
};

export default Center;
