import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
`;

export const Container = styled.div`
  height: calc(100vh - 116px);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 38px;
  left: 40px;
  z-index: 20;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  width: 100%;
`;

export const Box = styled.div`
  margin-bottom: 24px;
`;

export const BoxItems = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -4px;
  margin-top: -10px;
  overflow-x: scroll;
  padding: 10px 20px 4px;
  scroll-snap-type: x;
  width: 100vw;
  gap: 10px;
  scrollbar-width: none;
  scroll-padding-left: 20px;
  scroll-padding-right: 20px;
  flex-direction: row;
  opacity: 1;

  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const BoxItemsItem = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: calc(-20px + 33.3333vw);

  @media (min-width: 768px) {
    width: calc(-20px + 25vw);
  }
`;
