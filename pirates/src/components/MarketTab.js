import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faMapMarkedAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const DetailBottomWrap = styled.div`
  width: 100%;
  background-color: #f1f2f3;
  font-size: 15px;
  color: #313841;
  text-align: center;
`;
const TabTitleWrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const darkMode = css`
  color: #f1f2f3;
  background-color: #313841;
`;
const defaultMode = css`
  color: #313841;
  background-color: #f1f2f3;
`;
const TabTitle = styled.button`
  width: 33.3%;
  height: 35px;
  border: 0;
  outline: 0;
  cursor: pointer;
  ${(props) => {
    if (props.state === true) {
      return css`
        ${darkMode}
      `;
    } else {
      return css`
        ${defaultMode}
      `;
    }
  }}
`;
const TabDescWrap = styled.div`
  box-shadow: 0px 1px 2px #d1d2d4;
`;
const TabDesc = styled.div`
  padding: 20px;
  padding-bottom: 0;
`;
const TabDescText = styled.div`
  padding: 5px 0 0 0;
`;
const TabDescBtnWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;
const TabDescBtn = styled.div`
  width: 120px;
  height: 30px;
  border: 0.5px solid #313841;
  border-radius: 3px;
  line-height: 1.8;
  cursor: pointer;
`;

const MarketTab = () => {
  const [visitToggle, setVisitToggle] = useState(true);
  const [commentToggle, setCommentToggle] = useState(false);
  const [mapToggle, setMapToggle] = useState(false);

  return (
    <DetailBottomWrap>
      <TabTitleWrap>
        <TabTitle
          onClick={() => {
            setVisitToggle(true);
            setCommentToggle(false);
            setMapToggle(false);
          }}
          state={visitToggle}
        >
          <FontAwesomeIcon icon={faStar} />
          {" 탐방기"}
        </TabTitle>
        <TabTitle
          onClick={() => {
            setVisitToggle(false);
            setCommentToggle(true);
            setMapToggle(false);
          }}
          state={commentToggle}
        >
          <FontAwesomeIcon icon={faComments} />
          {" 댓글"}
        </TabTitle>
        <TabTitle
          onClick={() => {
            setVisitToggle(false);
            setCommentToggle(false);
            setMapToggle(true);
          }}
          state={mapToggle}
        >
          <FontAwesomeIcon icon={faMapMarkedAlt} />
          {" 약도"}
        </TabTitle>
      </TabTitleWrap>
      {visitToggle ? (
        <TabDescWrap>
          <TabDesc>
            <TabDescText>최근 시세 : 2020년 10월 10일</TabDescText>
            <TabDescText>
              오늘자 시세가 아닙니다. 시세에 변동이 있을 수 있습니다.
            </TabDescText>
            <TabDescText>
              재난지원금(서울 지역만 가능), 제로페이 사용 가능
            </TabDescText>
            <TabDescBtnWrap>
              <TabDescBtn>전화걸기</TabDescBtn>
              <TabDescBtn>주소복사</TabDescBtn>
              <TabDescBtn>공유하기</TabDescBtn>
            </TabDescBtnWrap>
          </TabDesc>
          <TabDesc></TabDesc>
          <TabDesc></TabDesc>
        </TabDescWrap>
      ) : (
        <>
          {commentToggle ? (
            <TabDescWrap>
              <br />
              댓글창
              <br />
              <br />
            </TabDescWrap>
          ) : (
            <>
              {mapToggle ? (
                <TabDescWrap>
                  <br />
                  약도
                  <br />
                  <br />
                </TabDescWrap>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </DetailBottomWrap>
  );
};

export default MarketTab;
