import styled from "@emotion/styled";

export const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  color: rgb(13, 11, 42);
`;

export const CheckboxLabel = styled.label`
  font-size: 16px;
  color: rgb(13, 11, 42);
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: red;
`;

export const SuccessMessage = styled.div`
  font-size: 16px;
  color: green;
  text-align: center;
`;

export const GetConsultationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  padding: 30px;
  background-color: white;
  border: 4px solid rgb(13, 11, 42);
  border-radius: 12px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 100vh;
  padding: 30px;
  background-color: rgb(235, 232, 220);
`;