import { useFormik } from "formik";
import * as Yup from "yup";

import type { EmployeeFormProps } from "./types";
import Input from "../Input/Input";
import Button from "../Button/Button";

import {
  EmployeeFormComponent,
  // EmployeeFormWrapper, // УБРАЛИ: layout всей страницы уже находится в Lesson11
  // Title, // УБРАЛ: заголовок Create Employee, он уже выводится в Lesson11
} from "./styles";

function EmployeeForm({ onCreate }: EmployeeFormProps) {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Field name is required")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),

    surname: Yup.string()
      .required("Field surname is required")
      .max(15, "Max 15 symbols"),

    age: Yup.number()
      .typeError("Type number")
      .required("Field age is required")
      .min(18, "Min age 18")
      .max(80, "Max age 80"),

    jobPosition: Yup.string()
      .max(30, "Max 30 symbols"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      jobPosition: "",
    },

    validationSchema: schema,

    validateOnChange: false,

    onSubmit: (values, { resetForm }) => {
      onCreate({
        name: values.name,
        surname: values.surname,
        age: Number(values.age),

        // БЫЛО:
        // jobPosition: values.jobPosition,

        // ИЗМЕНИЛ:
        // поле необязательное, поэтому если строка пустая,
        // передаём undefined
        jobPosition: values.jobPosition || undefined,
      });

      resetForm();
    },
  });

  return (
    // БЫЛО:
    // <EmployeeFormWrapper>
    //   <Title>Create Employee</Title>
    //   <EmployeeFormComponent onSubmit={formik.handleSubmit}>

    // ИЗМЕНИЛ:
    // внешний layout и Title уже находятся в Lesson11,
    // поэтому здесь остаётся только сама форма
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <Input
        name="name"
        label="Name*"
        placeholder="Enter employee name"
        id="name_id"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />

      <Input
        name="surname"
        label="Surname*"
        placeholder="Enter employee surname"
        id="surname_id"
        value={formik.values.surname}
        onChange={formik.handleChange}
        error={formik.errors.surname}
      />

      <Input
        name="age"
        label="Age*"
        type="number"
        placeholder="Enter employee age"
        id="age_id"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />

      <Input
        name="jobPosition"
        label="Job Position"
        placeholder="Enter job position"
        id="job_position_id"
        value={formik.values.jobPosition}
        onChange={formik.handleChange}
        error={formik.errors.jobPosition}
      />

      <Button name="CREATE" type="submit" />
    </EmployeeFormComponent>

    // БЫЛО:
    //   </EmployeeFormComponent>
    // </EmployeeFormWrapper>
  );
}

export default EmployeeForm;