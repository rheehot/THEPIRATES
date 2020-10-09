import React, { useState } from "react";
import styled from "styled-components";
import zoneData from "../Data/zoneData.json";
import itemData from "../Data/itemData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const FilterContainer = styled.div`
  width: 100%;
`;

//Filter Title
const FilterWrap = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-around;
`;

const FilterTitle = styled.div`
  width: 140px;
  color: #2d79bc;
  font-size: 15px;
  text-align: center;
  line-height: 2;
  border: 1px solid #d1d2d4;
  border-right: none;
  cursor: pointer;
`;

//Filter sub
const FilterSubWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const FilterSubTitle = styled.div`
  width: ${(props) => props.screen || "140px"};
  color: #777777;
  font-size: 15px;
  text-align: center;
  line-height: 2;
  border-bottom: 1px solid #d1d2d4;
  border-right: 1px solid #d1d2d4;
  cursor: pointer;
`;

const Filter = () => {
  const [zoneToggle, setZoneToggle] = useState(false);
  const [itemToggle, setTtemToggle] = useState(false);
  const [basicToggle, setBasicToggle] = useState(false);

  return (
    <FilterContainer>
      <FilterWrap>
        <FilterTitle
          onClick={() => {
            setTtemToggle(false);
            setBasicToggle(false);
            setZoneToggle(!zoneToggle);
          }}
        >
          모든지역
          <FontAwesomeIcon icon={faCaretDown} />
        </FilterTitle>
        <FilterTitle
          onClick={() => {
            setZoneToggle(false);
            setBasicToggle(false);
            setTtemToggle(!itemToggle);
          }}
        >
          모든품목
          <FontAwesomeIcon icon={faCaretDown} />
        </FilterTitle>
        <FilterTitle
          onClick={() => {
            setZoneToggle(false);
            setTtemToggle(false);
            setBasicToggle(!basicToggle);
          }}
        >
          기본 순
          <FontAwesomeIcon icon={faCaretDown} />
        </FilterTitle>
      </FilterWrap>
      {/* 모든지역 */}
      {zoneToggle ? (
        <FilterSubWrap>
          <FilterSubTitle>모든지역</FilterSubTitle>
          <FilterSubTitle>가까운 순</FilterSubTitle>
          {zoneData.map((item, i) => (
            <FilterSubTitle key={i}>{item.label}</FilterSubTitle>
          ))}
        </FilterSubWrap>
      ) : (
        <></>
      )}
      {/* 모든품목 */}
      {itemToggle ? (
        <FilterSubWrap>
          {itemData.map((item, i) => (
            <FilterSubTitle key={i}>{item.label}</FilterSubTitle>
          ))}
        </FilterSubWrap>
      ) : (
        <></>
      )}
      {/* 기본 순 */}
      {basicToggle ? (
        <FilterSubWrap>
          <FilterSubTitle screen={"100%"}>기본 순</FilterSubTitle>
          <FilterSubTitle screen={"100%"}>인기 순</FilterSubTitle>
          <FilterSubTitle screen={"100%"}>최근 본 가게</FilterSubTitle>
        </FilterSubWrap>
      ) : (
        <></>
      )}
    </FilterContainer>
  );
};
export default Filter;
