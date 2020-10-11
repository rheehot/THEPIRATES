import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const StoreContainer = styled.div`
  width: 388px;
  height: 240px;
  background-color: white;
  margin: 0 auto;
  border: 1px solid #d1d2d4;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #d1d2d4;
`;

//store header
const StoreHeader = styled.div`
  width: 100%;
  height: 65px;
  padding: 15px;
  position: relative;
`;
const Title = styled.h6`
  font-size: 15px;
  font-weight: bold;
  display: inline;
  padding-right: 5px;
`;
const SubTitle = styled.span`
  font-size: 13px;
`;
const Description = styled.div`
  color: gray;
  margin-top: 7px;
  font-size: 13px;
`;
const Rating = styled.div`
  color: #f4a623;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 13px;
`;
const OpenState = styled.div`
  color: #2d79bc;
  position: absolute;
  top: 35px;
  right: 15px;
  font-size: 13px;
`;

// store img
const StoreImgWrap = styled.div`
  width: 100%;
  height: 175px;
  position: relative;
`;
const Img = styled.div`
  width: 100%;
  height: 175px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #d1d2d4;
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
const Favorite = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  background-color: rgba(000, 000, 000, 0.4);
  border-radius: 3px;
  color: #d1d2d4;
  text-align: center;
  line-height: 2;
  cursor: pointer;
`;

const Store = ({ item }) => {
  return (
    <StoreContainer>
      <StoreHeader>
        <Title>{item.label}</Title>
        <SubTitle>{item.market}</SubTitle>
        {item.description.length > 30 ? (
          <Description>{`${item.description.substring(0, 30)}...`}</Description>
        ) : (
          <Description>{item.description}</Description>
        )}
        <Rating>{`⭐ ${item.summary.rating}`}</Rating>
        <OpenState>{item.state === "OPEN" ? "영업중" : <></>}</OpenState>
      </StoreHeader>
      {/* IMG */}
      <StoreImgWrap>
        <Img img={item.thumbnail}></Img>
        {item.tags[0] === "today-price" ? (
          <TodayPrice>오늘시세</TodayPrice>
        ) : (
          <></>
        )}
        {item.favorite === "off" ? (
          <Favorite>
            <FontAwesomeIcon icon={faHeart} size={"lg"} />
          </Favorite>
        ) : (
          <Favorite>{"Yes"}</Favorite>
        )}
      </StoreImgWrap>
    </StoreContainer>
  );
};

export default Store;
