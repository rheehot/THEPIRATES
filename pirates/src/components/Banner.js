import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import BannerData from "../Data/bannerData.json";

const Container = styled.div``;
const List = styled.ul`
  position: relative;
`;
const Item = styled.li`
  width: 100%;
  height: 41px;
  background-color: #313841;
  color: white;
  font-size: 15px;
  text-align: center;
  line-height: 2.7;
`;
const BannerLabel = styled.span``;
const BannerPrice = styled.span`
  color: #b8e986;
`;
const ToggleBtn = styled.div`
  color: white;
  font-size: 14px;
  position: absolute;
  top: 13px;
  right: 10px;
  cursor: pointer;
`;

let count = null;

const Banner = ({ toggle, setToggle }) => {
  const [mainData, setMainData] = useState(BannerData[0]);

  useEffect(() => {
    if (count === null) {
      count = 1;
    }
    setTimeout(() => {
      if (BannerData.length > count) {
        setMainData(BannerData[count]);
      }
      if (BannerData.length - 1 === count) {
        count = 0;
      } else {
        count++;
      }
    }, 2000);
  }, [mainData]);

  return (
    <Container>
      {toggle ? (
        <List>
          {BannerData.map((item, i) => (
            <Item key={i}>
              <BannerLabel>{`${item.zoneLabel}: ${item.label} `}</BannerLabel>
              <BannerPrice>{item.price}</BannerPrice>
              <BannerLabel>{` (${item.comment})`}</BannerLabel>
            </Item>
          ))}
          <ToggleBtn
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} rotation={180} />
          </ToggleBtn>
        </List>
      ) : (
        <List>
          <Item>
            <BannerLabel>{`${mainData.zoneLabel}: ${mainData.label} `}</BannerLabel>
            <BannerPrice>{mainData.price}</BannerPrice>
            <BannerLabel>{` (${mainData.comment})`}</BannerLabel>
          </Item>
          <ToggleBtn
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </ToggleBtn>
        </List>
      )}
    </Container>
  );
};

export default Banner;
