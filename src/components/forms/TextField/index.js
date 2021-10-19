import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: inherit;
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  error,
  isTouched,
  type,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;

  return (
    <InputWrapper>
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {isFieldInvalid && (
        <Text variant="smallestException" color="error.main" role="alert">
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  error: '',
  isTouched: false,
};
