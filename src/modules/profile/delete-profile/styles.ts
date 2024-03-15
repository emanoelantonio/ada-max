import styled from "styled-components";

export const Container = styled.div`
  .title {
    margin-top: 80px;
  }
`;

export const Header = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

export const Paragraph = styled.p`
  margin: 24px auto 48px;
  max-width: 468px;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  max-width: 335px;
  margin: 0 auto;
  width: 100%;
`;
