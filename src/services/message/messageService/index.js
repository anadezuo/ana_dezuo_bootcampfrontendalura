async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Falha em pegar os dados do servidor :(');
    });
}

export const messageService = {
  async sendMessage({ name, email, message }) {
    return HttpClient('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      body: {
        name,
        email,
        message,
      },
    })
      .then((respostaConvertida) => respostaConvertida);
  },
};
