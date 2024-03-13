import styled, { css } from "styled-components";

export const GlobalButton = styled.button<{ variant?: string; fullWidth?: boolean; isLoading?: boolean }>`
  align-items: center;
  border: 3px solid transparent;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  transition: all 100ms cubic-bezier(0, 0, 0.34, 1) 0s;
  min-height: auto;
  min-width: 136px;
  padding: 6px 16px 7px;

  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  font-weight: 600;

  cursor: pointer;
  position: relative;
  text-decoration: none;

  ${({ variant }) => variant === 'subtle' && css`
    background-color: rgba(0,0,0,0);
    color: rgb(255,255,255);
    font-weight: 400;

    &hover {
      background-color: rgba(255, 255, 255, 1);
    }
  `}

  ${({ variant }) => variant === 'filled' && css`
    background-color: rgba(134, 151, 206, 0.3);
    color: rgb(255, 255, 255);
    font-weight: 400;

    &:hover {
      background-color: rgba(134, 151, 206, 0.5);
    }

    &:active {
      background-color: rgba(134, 151, 206, 0.2);
      opacity: 0.8;
    }
  `}

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.3);
    color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
  }
`
export const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
`;