import { useState } from "react";
import Input from "../Input/Input";
import * as Yup from "yup";
import Button from "../Button/Button";

import {
  PageWrapper,
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  ErrorMessage,
  GetConsultationForm,
  SuccessMessage,
  Title,
} from "./styles";
import { useFormik } from "formik";



function GetConsultation() {
  const [successMessage, setSuccessMessage] = useState("");

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is required")
      .email("Enter a valid email"),

    agree: Yup.boolean().oneOf([true], "You should agree"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      agree: false,
    },

    validationSchema: schema,

    onSubmit: (values) => {
      console.log(values);
      setSuccessMessage("Мы с Вами скоро свяжемся");
    },
  });

  return (
  <PageWrapper>
    <GetConsultationForm onSubmit={formik.handleSubmit}>
      <Title>Get consultation</Title>

      <Input
        name="email"
        label="Email*"
        placeholder="Enter your email"
        id="email_id"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />

      <CheckboxContainer>
        <Checkbox
          name="agree"
          type="checkbox"
          id="agree_id"
          checked={formik.values.agree}
          onChange={formik.handleChange}
        />

        <CheckboxLabel>
          I agree to personal data processing
        </CheckboxLabel>
      </CheckboxContainer>

      {formik.errors.agree && (
        <ErrorMessage>{formik.errors.agree}</ErrorMessage>
      )}

      <Button
        name="Получить консультацию"
        type="submit"
      />

      {successMessage && (
  <SuccessMessage>{successMessage}</SuccessMessage>
)}
    
    </GetConsultationForm>
      </PageWrapper>
);
}

export default GetConsultation;
