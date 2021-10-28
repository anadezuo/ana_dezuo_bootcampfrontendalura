import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import Button from '../../commons/Buttons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { TypesSnackbar, SnackbarAlert } from '../../commons/Snackbar';
import { isEmpty } from '../../../utils/isEmpty';
import formListStates from '../../../information/Status/formListStates';
import ButtonClose from '../../commons/Buttons/ButtonClose';
import Logo from '../../commons/Logo';
import { useForm } from '../../../hooks/forms/useForm';
import { messageService } from '../../../services/message/messageService';

const Form = styled.form`
  margin-left: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`;

const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .required('"Nome" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  email: yup
    .string()
    .required('"Email" é obrigatório')
    .email('Informe um email válido'),
  message: yup
    .string()
    .required('"Mensagem" é obrigatória')
    .min(30, 'Sua mensagem precisa ter ao menos 30 caracteres'),
});

function FormContent({ onSubmit }) {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const [submissionStatus, setSubmissionStatus] = useState(
    formListStates.DEFAULT,
  );

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [messageSnackbar, setMessageSnackbar] = useState('');

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormSubmitted(true);
      messageService
        .sendMessage({
          name: values.name,
          email: values.email,
          message: values.message,
        })
        .then((respostaConvertidaEmObjeto) => {
          setMessageSnackbar(
            `${respostaConvertidaEmObjeto?.name} sua mensagem foi enviada com sucesso!`,
          );
          setOpenSnackbar(true);
          setSubmissionStatus(formListStates.DONE);
        })
        .catch(() => {
          setMessageSnackbar(
            'Desculpe, mas sua mensagem não pode ser enviada.',
          );
          setOpenSnackbar(true);
          setSubmissionStatus(formListStates.ERROR);
        })
        .finally(() => {
          form.setIsFormSubmitted(false);
        });
    },
    async validateSchema(values) {
      return ContactSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  const isActiveButtonContato = isEmpty(form.name)
    || isEmpty(form.email)
    || isEmpty(form.message);

  return (
    <Form id="formContact" onSubmit={onSubmit || form.handleSubmit}>
      <Logo height={{ xs: '100px', md: '100px' }} />
      <Text
        variant="title2"
        tag="h2"
        textAlign="center"
        color="primary.main"
        fontFamily="fontFamilyException"
        marginTop="30px"
        marginBottom="30px"
      >
        Obrigada pela visita!
      </Text>
      <Text
        variant="smallException"
        tag="p"
        color="primary.main"
        marginBottom="30px"
        textAlign="center"
      >
        Gostou dos projetos? Deixe suas informações que entrarei em contato.
      </Text>

      <div>
        <TextField
          placeholder="Seu nome"
          type="text"
          name="name"
          color="primary.main"
          value={form.values.name}
          error={form.errors.name}
          isTouched={form.touched.name}
          onChange={form.handleChange} // capturadores
          onBlur={form.handleBlur}
        />
      </div>
      <div>
        <TextField
          placeholder="email@dominio.com.br"
          type="email"
          name="email"
          color="primary.main"
          value={form.values.email}
          error={form.errors.email}
          isTouched={form.touched.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </div>
      <div>
        <TextField
          placeholder="Sua mensagem"
          type="textArea"
          color="primary.main"
          name="message"
          value={form.values.message}
          error={form.errors.message}
          isTouched={form.touched.message}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant={isActiveButtonContato ? 'primary.main' : 'theme.primary'}
          color="primary.main"
          type="submit"
          disabled={isActiveButtonContato}
        >
          Enviar mensagem
        </Button>
        {submissionStatus === formListStates.DONE && (
          <SnackbarAlert
            id={`${TypesSnackbar.SUCCESS}`}
            type={TypesSnackbar.SUCCESS}
            message={messageSnackbar}
            openSnackbar={openSnackbar}
            setOpenSnackbar={setOpenSnackbar}
          />
        )}

        {submissionStatus === formListStates.ERROR && (
          <SnackbarAlert
            type={TypesSnackbar.ERROR}
            message={messageSnackbar}
            openSnackbar={openSnackbar}
            setOpenSnackbar={setOpenSnackbar}
          />
        )}
      </div>
    </Form>
  );
}

FormContent.propTypes = {
  onSubmit: PropTypes.func,
};

FormContent.defaultProps = {
  onSubmit: undefined,
};

export default function FormContato({ propsModal, setModal, onSubmit }) {
  const themeContext = useContext(ThemeContext);

  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="center">
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          // eslint-disable-next-line react/prop-types
          backgroundColor={themeContext.colors.background.main.color}
          alignItems="center"
          flex={1}
          padding={{ xs: '16px', md: '85px' }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsModal}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
            width="100%"
          >
            <ButtonClose id="formContact-closeButton" setAction={setModal} />
          </Box>
          <FormContent onSubmit={onSubmit} />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormContato.propTypes = {
  propsModal: PropTypes.shape({}).isRequired,
  setModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

FormContato.defaultProps = {
  onSubmit: undefined,
};
