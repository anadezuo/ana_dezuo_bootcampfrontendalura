import React, { useState, useEffect } from 'react';

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedFields] = useState({});

  useEffect(() => {
    validateSchema(values)
      .then(() => {
        setIsFormSubmitted(false);
        setErrors({});
      })
      .catch((err) => {
        const formatedErrors = err.inner.reduce(
          (errorObjectAcc, currentError) => {
            const fieldName = currentError.path;
            const errorMessage = currentError.message;
            return {
              ...errorObjectAcc,
              [fieldName]: errorMessage,
            };
          },
          {},
        );
        setErrors(formatedErrors);
        setIsFormSubmitted(true);
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
