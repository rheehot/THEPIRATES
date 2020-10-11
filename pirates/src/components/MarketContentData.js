import React from "react";
import styled from "styled-components";

const MarketContentDataContainder = styled.div`
  width: 100%;
  padding: 20px;
  width: 100%;
  padding: 20px;
  background-color: white;
  margin: 10px 0;
  box-shadow: 0px 1px 2px #d1d2d4;
`;

const Header = styled.div`
  border-bottom: 1px solid #d1d2d4;
`;
const Title = styled.div`
  font-size: 16px;
  padding-bottom: 5px;
`;
const CreactedAt = styled.div`
  color: gray;
  padding-bottom: 5px;
`;

const CardWrap = styled.div`
  margin: 20px 0px 10px 0px;
  width: 380px;
  height: 200px;
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #d1d2d4;
  padding-top: 20px;
  text-align: center;
`;
const CardImg = styled.div`
  width: 95px;
  height: 95px;
  background-color: gray;
  border-radius: 50%;
  margin-left: 140px;
  color: white;
  font-size: 15px;
  line-height: 6.2;
`;
const CardSub = styled.div`
  padding: 10px;
  font-size: 15px;
`;
const CardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #358bdf;
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

const Content = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 15px;
`;

const MarketContentData = () => {
  return (
    <MarketContentDataContainder>
      <Header>
        <Title>
          가락시장 회센터 싱싱한 회와 킹크랩, 대게 등 갑각류를 모두 판매하는
          점포
        </Title>
        <CreactedAt>2020년 10월 11일</CreactedAt>
      </Header>
      <CardWrap>
        <CardImg>IMG</CardImg>
        <CardSub>해적단이 직접 찾아가 본 점포</CardSub>
        <CardTitle>가락몰 | 놀부수산</CardTitle>
      </CardWrap>
      <MenuImg>IMG</MenuImg>
      <Content>
        놀부 수산의 전경입니다.
        <br />
        <br />
        가락몰에서 <br />
        널직하게 자리를 잡고 <br />
        판매하고 있습니다.
      </Content>
      <MenuImg>IMG</MenuImg>
      <Content>
        놀부 수산의 전경입니다.
        <br />
        <br />
        가락몰에서 <br />
        널직하게 자리를 잡고 <br />
        판매하고 있습니다.
      </Content>
    </MarketContentDataContainder>
  );
};

export default MarketContentData;
