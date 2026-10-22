// ДОБАВИЛ:
// Employee — общий тип проекта,
// который лежит в src/types/employee.ts
import type { Employee } from "../../types/employee";

export interface EmployeeFormProps {
  onCreate: (employee: Employee) => void;
}

export interface EmployeeFormValues {
  name: string;
  surname: string;
  age: string;
  jobPosition: string;
}