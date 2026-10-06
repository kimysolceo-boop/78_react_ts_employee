import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 100vh;
  padding: 30px;
  background-color: rgb(48, 43, 114);
`;

export const Lesson09Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  padding: 30px;
  background-color: white;
  border: 4px solid rgb(13, 11, 42);
  border-radius: 12px;
`;

export const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  color: rgb(13, 11, 42);
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const TodoItem = styled.div`
  width: 100%;
  padding: 12px;
  font-size: 18px;
  color: rgb(13, 11, 42);
  background-color: rgb(222, 222, 232);
  border: 2px solid rgb(48, 43, 114);
  border-radius: 8px;
`;