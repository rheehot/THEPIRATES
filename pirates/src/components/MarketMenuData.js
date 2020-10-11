import React from "react";
import styled from "styled-components";

const MarketMenuDataContainder = styled.div`
  width: 100%;
  padding: 20px;
  width: 100%;
  padding: 20px;
  background-color: white;
  margin: 10px 0;
  box-shadow: 0px 1px 2px #d1d2d4;
`;

const Title = styled.div`
  color: tomato;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  border-bottom: 2px solid tomato;
`;

const MenuWrap = styled.div`
  padding: 10px 0;
`;
const MenuTitle = styled.div`
  font-size: 15px;
`;
const MenuImg = styled.div`
  width: 380px;
  height: 200px;
  background-color: gray;
  color: white;
  font-size: 15px;
  text-align: center;
  line-height: 13;
  margin: 10px 0;
`;

const MenuTextWrap = styled.div`
  display: flex;
  font-size: 15px;
`;
const MenuTextTitle = styled.div`
  margin-right: 20px;
`;
const MenuTextPrice = styled.div`
  color: gray;
  margin-right: 100px;
`;
const MenuTextPeople = styled.div`
  color: tomato;
`;

const Description = styled.div`
  padding-top: 20px;
  color: gray;
`;

const MarketMenuData = () => {
  return (
    <MarketMenuDataContainder>
      <Title>메뉴가격</Title>
      <MenuWrap>
        <MenuTitle>도다리모듬회</MenuTitle>
        <MenuImg>IMG</MenuImg>
        <MenuTextWrap>
          <MenuTextTitle>소</MenuTextTitle>
          <MenuTextPrice>55,000원</MenuTextPrice>
          <MenuTextPeople>2인</MenuTextPeople>
        </MenuTextWrap>
        <MenuTextWrap>
          <MenuTextTitle>소</MenuTextTitle>
          <MenuTextPrice>55,000원</MenuTextPrice>
          <MenuTextPeople>2인</MenuTextPeople>
        </MenuTextWrap>
        <MenuTextWrap>
          <MenuTextTitle>소</MenuTextTitle>
          <MenuTextPrice>55,000원</MenuTextPrice>
          <MenuTextPeople>2인</MenuTextPeople>
        </MenuTextWrap>
        <Description>
          * 광어(제주 또는 완도) / 참돔(국산 또는 일본산) / 연어(노르웨이)
        </Description>
      </MenuWrap>
    </MarketMenuDataContainder>
  );
};

export default MarketMenuData;
