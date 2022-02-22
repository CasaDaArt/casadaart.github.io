const sendEmail = (formData) => {
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://polar-shelf-90973.herokuapp.com/send-email',
    method: 'POST',
    headers: {},
    processData: false,
    contentType: false,
    mimeType: 'multipart/form-data',
    data: formData
  };

  return $.ajax(settings)
    .success((response) => {
      console.log(response);
      alert('sucesso')
    })
    .error((err) => {
      console.error(err)
      alert('erro')
    });
}