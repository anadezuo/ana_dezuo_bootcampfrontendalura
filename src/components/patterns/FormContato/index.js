import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const Form = styled.form`
  margin-left: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`;

function FormContent() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(
    formListStates.DEFAULT,
  );

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [messageSnackbar, setMessageSnackbar] = useState('');

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setContactInfo({
      ...contactInfo,
      [fieldName]: event.target.value,
    });
  }

  function handleContato(event) {
    event.preventDefault();
    setIsFormSubmitted(true);

    const contact = {
      name: contactInfo.name,
      email: contactInfo.email,
      message: contactInfo.message,
    };

    fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          return respostaDoServidor.json();
        }
        throw new Error('Não foi possível cadastrar o usuário');
      })
      .then((respostaConvertidaEmObjeto) => {
        setMessageSnackbar(
          `${respostaConvertidaEmObjeto?.name} sua mensagem foi enviada com sucesso!`,
        );
        setOpenSnackbar(true);
        setContactInfo({ name: '', email: '', message: '' });
        setSubmissionStatus(formListStates.DONE);
        // setModal(false);
      })
      .catch((error) => {
        setMessageSnackbar(`Usuário não cadastrado. Retornado erro ${error}`);
        setOpenSnackbar(true);
        setSubmissionStatus(formListStates.ERROR);
      });
  }

  const isActiveButtonContato = isEmpty(contactInfo.name)
    || isEmpty(contactInfo.email)
    || isEmpty(contactInfo.message);

  return (
    <Form onSubmit={handleContato}>
      <Logo
        height={{ xs: '50px', md: '75px' }}
      />
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
          placeholder="Nome"
          type="text"
          name="name"
          color="primary.main"
          value={contactInfo.name}
          onChange={handleChange} // capturadores
        />
      </div>
      <div>
        <TextField
          placeholder="Email"
          type="email"
          name="email"
          color="primary.main"
          value={contactInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Mensagem"
          type="textArea"
          color="primary.main"
          name="message"
          value={contactInfo.message}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant={isActiveButtonContato ? 'primary.main' : 'theme.main'}
          color={isActiveButtonContato ? 'tertiary.contrast' : 'tertiary.main'}
          type="submit"
          disabled={isActiveButtonContato}
        >
          Enviar mensagem
        </Button>
        {isFormSubmitted && submissionStatus === formListStates.DONE && (
          <SnackbarAlert
            type={TypesSnackbar.SUCCESS}
            message={messageSnackbar}
            openSnackbar={openSnackbar}
            setOpenSnackbar={setOpenSnackbar}
          />
        )}

        {isFormSubmitted && submissionStatus === formListStates.ERROR && (
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

export default function FormContato({ theme, propsModal, setModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
    >
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
          backgroundColor={theme.colors.background.main.color}
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
            <ButtonClose setAction={setModal} />
          </Box>
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormContato.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  propsModal: PropTypes.shape({}).isRequired,
  setModal: PropTypes.func.isRequired,
};
