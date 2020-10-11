import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Store from "../components/Store";
import StoreData from "../Data/storeData.json";

const HomeContainer = styled.div`
  width: 420px;
  margin: 0 auto;
  background-color: #f1f2f3;
`;

const Title = styled.h3`
  padding: 20px;
  font-size: 15px;
  font-weight: bold;
  color: #2d79bc;
`;

const StoreCard = styled.div`
  padding-bottom: 20px;
`;

let idx = 10;

const Home = () => {
  const [data, setData] = useState(StoreData.slice(0, idx));
  const history = useHistory();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      let copyIdx = idx;
      idx = idx + 10;
      setData(data.concat(StoreData.slice(copyIdx, idx)));
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
    <HomeContainer>
      <Header></Header>
      <Title>프리미엄 가게</Title>
      {data.map((item, i) => (
        <StoreCard
          key={i}
          onClick={() => {
            history.push(item.uri);
          }}
        >
          <Store item={item} />
        </StoreCard>
      ))}
    </HomeContainer>
  );
};

export default Home;
