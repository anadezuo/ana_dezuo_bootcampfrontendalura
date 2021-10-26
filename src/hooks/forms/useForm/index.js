import React, { useState, useEffect } from 'react';

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedFields] = useState({});

  function formatErrors(yupErrorsInner = []) {
    return yupErrorsInner.reduce((errorObjectAcc, currentError) => {
      const fieldName = currentError.path;
      const errorMessage = currentError.message;
      return {
        ...errorObjectAcc,
        [fieldName]: errorMessage,
      };
    }, {});
  }

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setErrors({});
      setIsFormSubmitted(false);
    } catch (err) {
      const formatedErrors = formatErrors(err.inner);
      setErrors(formatedErrors);
      setIsFormSubmitted(true);
    }
  }

  useEffect(() => {
    validateValues(values)
      .catch((err) => {
        console.log(err);
      });
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    isFormSubmitted,
    setIsFormSubmitted,
    errors,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');

      setTouchedFields({
        ...touched,
        [fieldName]: true,
      });
    },
  };
}
