import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "./components/Banner";
import Filter from "./components/Filter";
import GlobalStyles from "./components/GlobalStyles";
import Search from "./components/Search";
import Home from "./Pages/Home";
import Market from "./Pages/Market";

const WebContainer = styled.div`
  width: 420px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

//Header CSS
const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
`;

const LogoWrap = styled.h1`
  width: 79%;
`;

const LogoText = styled.div`
  display: flex;
  padding: 5px;
`;

const Title = styled.div`
  padding-left: 10px;
  font-size: 21px;
  line-height: 1.8;
`;

const LogoImg = styled.div`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("images/인어교주해적단Logo.png");
  background-size: cover;
`;

const LoginWrap = styled.div`
  font-size: 15px;
  line-height: 3.8;
`;

//Nav CSS
const NavContainer = styled.nav`
  width: 100%;
  height: 43px;
  background-color: #2d79bc;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li`
  font-size: 15px;
  font-weight: bold;
  color: white;
  line-height: 2.7;
`;

function App() {
  return (
    <WebContainer>
      <BrowserRouter>
        {/* header */}
        <Header>
          <LogoWrap>
            <Link to="/">
              <LogoText>
                <LogoImg />
                <Title>인어교주해적단</Title>
              </LogoText>
            </Link>
          </LogoWrap>
          <LoginWrap>
            <div>로그인/가입</div>
          </LoginWrap>
        </Header>
        {/* nav */}
        <NavContainer>
          <List>
            <Item>
              <Link to="/market">시장</Link>
            </Item>
            <Item>
              <Link to="/market">맛집</Link>
            </Item>
            <Item>
              <Link to="/market">온라인</Link>
            </Item>
            <Item>
              <Link to="/market">도매</Link>
            </Item>
            <Item>
              <Link to="/market">시세</Link>
            </Item>
            <Item>
              <Link to="/market">스페셜</Link>
            </Item>
            <Item>
              <Link to="/market">후기</Link>
            </Item>
            <Item>
              <Link to="/market">문의</Link>
            </Item>
          </List>
          <Route exact path="/" component={Home} />
          <Route exact path="/market" component={Market} />
        </NavContainer>
      </BrowserRouter>
      {/* 배너자리 / 검색창 */}
      <Banner></Banner>
      <Filter></Filter>
      <Search></Search>
      <GlobalStyles />
    </WebContainer>
  );
}

export default App;
