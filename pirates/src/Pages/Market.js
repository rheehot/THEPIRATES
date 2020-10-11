import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import StoreData from "../Data/storeData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import MarketPriceData from "../components/MarketPriceData";
import MarketMenuData from "../components/MarketMenuData";
import MarketContentData from "../components/MarketContentData";
import MarketTab from "../components/MarketTab";
import MarketDetail from "../components/MarketDetail";

const MarketContainer = styled.div`
  width: 420px;
  margin: 0 auto;
  background-color: #f1f2f3;
`;

// Header
const HeaderWrap = styled.div`
  ${(props) => {
    if (props.scrollY) {
      return css`
        width: 420px;
        z-index: 10;
        position: fixed;
        opacity: 0.9;
      `;
    } else {
      return css`
        width: 100%;
        z-index: 1;
        position: none;
        opacity: 1;
      `;
    }
  }}
`;
const Header = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #edeced;
  padding: 10px;
  position: relative;
`;
const BackBtn = styled.div`
  color: #313841;
  cursor: pointer;
  font-size: 15px;
`;
const Title = styled.h1`
  font-size: 18px;
  padding-left: 10px;
  line-height: 1.5;
`;
const Lookup = styled.div`
  font-size: 13px;
  color: gray;
  position: absolute;
  top: 18px;
  right: 100px;
`;
const LikeBtn = styled.div`
  color: gray;
  font-size: 13px;
  position: absolute;
  top: 10px;
  right: 20px;
  width: 65px;
  height: 30px;
  border: 0.5px solid gray;
  border-radius: 3px;
  background-color: white;
  text-align: center;
  line-height: 2.3;
  cursor: pointer;
`;

// IMG
const ImgWrap = styled.div`
  width: 100%;
  height: 175px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
const TodayPrice = styled.div`
  width: 55px;
  height: 25px;
  color: white;
  background-color: #80db35;
  border-radius: 3px;
  font-size: 13px;
  text-align: center;
  line-height: 1.9;
  position: absolute;
  bottom: 15px;
  left: 15px;
`;
const Rating = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 25px;
  background-color: rgba(000, 000, 000, 0.4);
  border-radius: 3px;
  color: #d1d2d4;
  text-align: center;
  line-height: 2;
  cursor: pointer;
`;

const Market = () => {
  const [scrollY, setScrollY] = useState(false);
  const history = useHistory();
  let MarketData;
  const searchMarket = () =>
    StoreData.map((item) => {
      if (item.uri === history.location.pathname) {
        MarketData = item;
      }
    });
  searchMarket();

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 0) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <MarketContainer>
      {/* Header */}
      <HeaderWrap scrollY={scrollY}>
        <Header>
          <BackBtn
            onClick={() => {
              history.push("/");
            }}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} size={"2x"} />
          </BackBtn>
          <Title>{`${MarketData.label} | ${MarketData.market}`}</Title>
          <Lookup>
            <FontAwesomeIcon icon={faEye} />
            {" 2만"}
          </Lookup>
          <LikeBtn>
            <FontAwesomeIcon icon={faHeart} />
            {" 153"}
          </LikeBtn>
        </Header>
      </HeaderWrap>
      {/* IMG */}
      <ImgWrap img={MarketData.thumbnail}>
        <TodayPrice>오늘시세</TodayPrice>
        <Rating>{`⭐ ${MarketData.summary.rating}`}</Rating>
      </ImgWrap>
      {/* Component */}
      <MarketDetail MarketData={MarketData}></MarketDetail>
      <MarketTab></MarketTab>
      <MarketPriceData></MarketPriceData>
      <MarketMenuData></MarketMenuData>
      <MarketContentData></MarketContentData>
    </MarketContainer>
  );
};

export default Market;
