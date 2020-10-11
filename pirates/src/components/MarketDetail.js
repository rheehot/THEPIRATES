import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const DetailTopWrap = styled.div`
  width: 100%;
  background-color: #042060;
  color: white;
  padding: 25px;
  font-size: 15px;
`;
const Text = styled.div`
  padding-bottom: 15px;
  &:last-child {
    padding-bottom: 0;
  }
`;
const LayoutWrap = styled.div`
  display: flex;
  padding-bottom: 10px;
  &:last-child {
    padding-bottom: 0;
  }
`;
const SubTitle = styled.div`
  padding-right: 20px;
`;
const SubDescription = styled.div``;
const TimeTableBtn = styled.div`
  cursor: pointer;
  font-size: 14px;
  padding-bottom: 10px;
`;
const SubTel = styled.div`
  width: 100px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  line-height: 2.5;
  border-radius: 3px;
  background-color: white;
  color: #042060;
  padding-bottom: 10px;
  cursor: pointer;
  &:last-child {
    padding-bottom: 0;
  }
`;

const MarketDetail = ({ MarketData }) => {
  const [timeTableToggle, setTimeTableToggle] = useState(false);

  return (
    <DetailTopWrap>
      <Text>{MarketData.market}</Text>
      <LayoutWrap>
        <SubTitle>영업시간</SubTitle>
        <SubDescription>
          <Text>현재 영업 중입니다.</Text>
          <Text>* 토요일(오늘): 11:00~00:00</Text>
          <Text>* 일요일(내일): 11:00~00:00</Text>
          <Text>* 월요일(모래): 11:00~00:00</Text>
          {timeTableToggle ? (
            <>
              <Text>* 화요일(모래): 11:00~00:00</Text>
              <Text>* 수요일(모래): 11:00~00:00</Text>
              <Text>* 목요일(모래): 11:00~00:00</Text>
              <Text>* 금요일(모래): 11:00~00:00</Text>
            </>
          ) : (
            <>
              <TimeTableBtn
                onClick={() => {
                  setTimeTableToggle(!timeTableToggle);
                }}
              >
                더보기 <FontAwesomeIcon icon={faSortDown} />
              </TimeTableBtn>
            </>
          )}

          <Text>* 휴무: 매월 둘째,넷째 주 수요일 휴무</Text>
        </SubDescription>
      </LayoutWrap>
      <LayoutWrap>
        <SubTitle>전화걸기</SubTitle>
        <SubDescription>
          <SubTel>010-0000-0000</SubTel>
        </SubDescription>
      </LayoutWrap>
      <LayoutWrap>
        <SubTitle>전국택배</SubTitle>
        <SubDescription>
          <Text>퀵서비스(사장님께 문의하세요!)</Text>
          <Text>퀵서비스(사장님께 문의하세요!)</Text>
          <Text>퀵서비스(사장님께 문의하세요!)</Text>
        </SubDescription>
      </LayoutWrap>
    </DetailTopWrap>
  );
};

export default MarketDetail;
