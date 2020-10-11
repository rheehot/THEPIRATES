import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 420px;
  background-color: white;
`;

const SearchInputWrap = styled.form`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 5px 0;
  border-bottom: 1px solid #d1d2d4;
  box-shadow: 0px 1px 2px #d1d2d4;
`;

const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "검색어를 입력하세요",
})`
  width: 85%;
  border: none;
  border-radius: 3px;
  background-color: #f1f2f3;
  padding: 8px 10px;
`;

const SearchBtn = styled.input.attrs({
  type: "button",
  value: "검색",
})`
  border: none;
  color: gray;
  position: absolute;
  top: 12px;
  right: 40px;
  cursor: pointer;
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchInputWrap>
        <SearchInput></SearchInput>
        <SearchBtn></SearchBtn>
      </SearchInputWrap>
    </SearchContainer>
  );
};

export default Search;
