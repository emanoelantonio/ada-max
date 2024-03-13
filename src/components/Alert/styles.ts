import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
  place-content: center flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 24px 0;
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  background-color: rgba(255, 76, 76, 0.15);
  color: #ff6d64;


  svg {
    width: 20px;
    height: 20px;
    fill: #ff6d64;
  }

`