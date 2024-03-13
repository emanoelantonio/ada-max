import styled from "styled-components";

export const Container = styled.div<{ size: string; disabled?:boolean}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => (size === 'large' ? '200px' : '120px')};
  height: ${({ size }) => (size === 'large' ? '200px' : '120px')};
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  border: solid 3px rgba(0, 0, 0, 0.12);
  transition: border 100ms cubic-bezier(0, 0, 0.34, 1) 0s;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:hover {
    border: solid 3px #fff;
  }
  &.disabled,
  &.disabled:hover {
    border: none;
    cursor: default;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: 40px;
    height: 40px;
    background-color: rgb(7, 7, 28);
    position: absolute;
    right: 0;
    top: ${({ size }) => (size === 'large' ? '84px' : '64px')};
    border-radius: 50%;
    transition: background-color 100ms cubic-bezier(0, 0, 0.34, 1) 0s;
  }

  &:hover .icon {
    background-color: #fff;
    color: #000;
  }
`