import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
`;

export const GlobalInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  padding: 14px 12px;
  background: rgba(0, 0, 0, 0.2);
  text-overflow: ellipsis;
  border: solid 1px hsla(0, 0%, 100%, 0.5);
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  font-family: inherit;
  outline: none;


  &:disabled {
  border: solid 1px hsla(0, 0%, 100%, 0.1);
  cursor: not-allowed;
  opacity: 0.5;
  }

  &:focus-visible {
    background-color: #000;
    border-color: #4f8bff;
    outline: 0;
    border-width: 1px;
  }
`;

export const SpanError = styled.span`
  font-size: 12px;
  color: red;
`;