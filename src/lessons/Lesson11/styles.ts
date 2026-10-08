import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  min-height: 100vh;
  padding: 40px;
  background-color: rgb(25, 39, 56);
`;

export const Title = styled.h1`
  font-size: 28px;
  color: white;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  width: 100%;
`;