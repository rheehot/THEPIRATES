import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Banner from "./Banner";
import Filter from "./Filter";
import Search from "./Search";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
`;

//LoGo
const LoGoContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;
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

// Scroll Down => menu fixed
const ScrollFixed = styled.div`
  ${(props) => {
    if (props.event) {
      return css`
        z-index: 2;
        position: fixed;
        top: 0;
      `;
    } else {
      return css`
        position: none;
      `;
    }
  }}
`;

//Nav
const NavContainer = styled.nav`
  width: 420px;
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
  cursor: pointer;
  &:first-child {
    color: yellow;
  }
`;

// z-index
const BannerWrap = styled.div``;
const FilterWrap = styled.div`
  ${(props) => {
    if (props.event) {
      return css`
        position: fixed;
        z-index: -9999;
      `;
    } else {
      return css`
        position: none;
      `;
    }
  }}
`;
const SearchWrap = styled.div`
  ${(props) => {
    if (props.zone || props.item || props.basic) {
      return css`
        position: fixed;
        z-index: -9999;
      `;
    } else {
      return css`
        position: none;
      `;
    }
  }}
`;

const Header = () => {
  const [scrollY, setScrollY] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [zoneToggle, setZoneToggle] = useState(false);
  const [itemToggle, setTtemToggle] = useState(false);
  const [basicToggle, setBasicToggle] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 50) {
      console.log(scrollTop);
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
    <HeaderContainer>
      <LoGoContainer>
        <LogoWrap>
          <LogoText>
            <LogoImg />
            <Title>인어교주해적단</Title>
          </LogoText>
        </LogoWrap>
        <LoginWrap>
          <div>로그인/가입</div>
        </LoginWrap>
      </LoGoContainer>
      <ScrollFixed event={scrollY}>
        <NavContainer>
          <List>
            <Item>시장</Item>
            <Item>맛집</Item>
            <Item>온라인</Item>
            <Item>도매</Item>
            <Item>시세</Item>
            <Item>스페셜</Item>
            <Item>후기</Item>
            <Item>문의</Item>
          </List>
        </NavContainer>
        {/* 배너자리 / 필터 / 검색창 */}
        {/* 상태값을 여기서 만들어서 아래props로 내려준다 */}
        <BannerWrap>
          <Banner toggle={bannerOpen} setToggle={setBannerOpen}></Banner>
        </BannerWrap>
        <FilterWrap event={bannerOpen}>
          <Filter
            zoneToggle={zoneToggle}
            setZoneToggle={setZoneToggle}
            itemToggle={itemToggle}
            setTtemToggle={setTtemToggle}
            basicToggle={basicToggle}
            setBasicToggle={setBasicToggle}
          ></Filter>
        </FilterWrap>
        <SearchWrap zone={zoneToggle} item={itemToggle} basic={basicToggle}>
          <Search></Search>
        </SearchWrap>
      </ScrollFixed>
    </HeaderContainer>
  );
};
export default Header;
