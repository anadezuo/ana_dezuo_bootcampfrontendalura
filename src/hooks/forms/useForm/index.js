import React from 'react';

export function useForm({ initialValues, onSubmit }) {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [values, setValues] = React.useState(initialValues);

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
  };
}
