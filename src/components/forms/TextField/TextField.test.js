import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';

import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        type="p"
        placeholder="Seu nome"
        value="Ju"
        onChange={() => {}}
        name="name"
      />
    );
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            type="p"
            placeholder="Seu nome"
            value=""
            onChange={onChangeMock}
            name="name"
            isTouched
          />
        );
        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'Ana Teste');
        expect(onChangeMock).toHaveBeenCalledTimes(9);
      });
    });
  });

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      render(
        <TextField
          type="p"
          placeholder="email@dominio.com.br"
          value="ana@teste.com"
          onChange={() => {}}
          name="email"
          isTouched
          error='"Email" é obrigatório'
        />
      );

      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('ana@teste.com');
      expect(screen.getByRole('alert')).toHaveTextContent(
        '"Email" é obrigatório'
      );
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
