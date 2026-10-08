import { useState } from "react";
import type { Employee } from "../../types/employee";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { ContentWrapper, 
         PageWrapper, 
         Title } from "./styles";
// import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

function Lesson11() {
  const [employee, setEmployee] = useState<Employee | null>(null);

 return (
  <PageWrapper>
    <Title>Create Employee</Title>

    <ContentWrapper>
      {/* TODO: подключить EmployeeForm после готовности компонента */}
    {/* <EmployeeForm onCreate={setEmployee} /> */}


      {employee && <EmployeeCard employee={employee} />}
    </ContentWrapper>
  </PageWrapper>
);
}

export default Lesson11;

