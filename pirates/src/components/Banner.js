import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const List = styled.ul``;

const Item = styled.li`
  width: 100%;
  height: 41px;
  background-color: #313841;
`;

const ToggleBtn = styled.div``;

const Banner = () => (
  <Container>
    <List>
      <Item></Item>
      <Item></Item>
      <ToggleBtn>btn</ToggleBtn>
    </List>
  </Container>
);

export default Banner;
