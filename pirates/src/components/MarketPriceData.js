import React from "react";
import styled from "styled-components";

const MarketPriceDataContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
  margin: 10px 0;
  box-shadow: 0px 1px 2px #d1d2d4;
`;

const Title = styled.h6`
  color: tomato;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  border-bottom: 2px solid tomato;
`;

const ProductWrap = styled.div`
  padding: 5px 0;
  display: flex;
  position: relative;
`;
const ProductImg = styled.div`
  width: 60px;
  height: 60px;
  background-color: gray;
  color: white;
  text-align: center;
  padding-top: 22px;
  margin-right: 15px;
`;
const ProductTextWrap = styled.div`
  font-size: 13px;
  display: flex;
  padding: 5px 0;
`;
const ProductTitle = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;
const ProductDecription = styled.div`
  color: gray;
`;
const ProductPrice = styled.div`
  position: absolute;
  right: 10px;
  color: gray;
`;

const MarketPriceData = () => {
  return (
    <MarketPriceDataContainer>
      <Title>품목시세</Title>
      <ProductWrap>
        <ProductImg>IMG</ProductImg>
        <div>
          <ProductTextWrap>
            <ProductTitle>광어</ProductTitle>
            <ProductDecription>제주 | 양식</ProductDecription>
            <ProductPrice>1kg 당</ProductPrice>
          </ProductTextWrap>
          <ProductTextWrap>
            <ProductTitle>소</ProductTitle>
            <ProductDecription>500g~1kg</ProductDecription>
            <ProductPrice>23,000원</ProductPrice>
          </ProductTextWrap>
          <ProductTextWrap>
            <ProductTitle>중</ProductTitle>
            <ProductDecription>1kg~2kg</ProductDecription>
            <ProductPrice>23,000원</ProductPrice>
          </ProductTextWrap>
          <ProductTextWrap>
            <ProductTitle>대</ProductTitle>
            <ProductDecription>2kg~3kg</ProductDecription>
            <ProductPrice>23,000원</ProductPrice>
          </ProductTextWrap>
        </div>
      </ProductWrap>
      <ProductWrap>
        <ProductImg>IMG</ProductImg>
        <div>
          <ProductTextWrap>
            <ProductTitle>광어</ProductTitle>
            <ProductDecription>제주 | 양식</ProductDecription>
            <ProductPrice>1kg 당</ProductPrice>
          </ProductTextWrap>
          <ProductTextWrap>
            <ProductTitle>소</ProductTitle>
            <ProductDecription>500g~1kg</ProductDecription>
            <ProductPrice>23,000원</ProductPrice>
          </ProductTextWrap>
          <ProductTextWrap>
            <ProductTitle>중</ProductTitle>
            <ProductDecription>1kg~2kg</ProductDecription>
            <ProductPrice>23,000원</ProductPrice>
          </ProductTextWrap>
          <ProductTextWrap>
            <ProductTitle>대</ProductTitle>
            <ProductDecription>2kg~3kg</ProductDecription>
            <ProductPrice>23,000원</ProductPrice>
          </ProductTextWrap>
        </div>
      </ProductWrap>
    </MarketPriceDataContainer>
  );
};

export default MarketPriceData;
