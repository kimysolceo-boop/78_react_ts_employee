import styled from "@emotion/styled";

// УБРАЛ:
// EmployeeFormWrapper раньше отвечал за всю страницу,
// но теперь layout страницы находится в Lesson11.
//
// export const EmployeeFormWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//
//   width: 100%;
//   min-height: 100vh;
//   padding: 20px;
//   box-sizing: border-box;
//
//   background-color: #102335;
// `;

export const EmployeeFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 350px;
  max-width: 100%;
  padding: 30px;

  box-sizing: border-box;
  background-color: #ffffff;
  border: none;
  border-radius: 2px;
`;

// УБРАЛ:
// Title уже находится в Lesson11.
//
// export const Title = styled.h2`
//   margin: 0;
//
//   font-size: 20px;
//   font-weight: 600;
//   text-align: center;
//
//   color: #ffffff;
// `;