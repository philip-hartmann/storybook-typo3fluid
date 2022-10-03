const FluidTemplate = ({
  extension = '',
  template = '',
  partial = '',
  section = '',
  args = {},
}) => {
  if (!process.env.TYPO3FLUID_API_URL) {
    return 'No TYPO3 Fluid API URL set!';
  }

  const request = new XMLHttpRequest();
  const requestBody = {
    extension,
    template,
    partial,
    section,
    'arguments': args,
    'password': process.env.TYPO3FLUID_API_PASSWORD
  };

  request.open('POST', process.env.TYPO3FLUID_API_URL, false);
  request.setRequestHeader('Accept', 'application/json');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(requestBody));

  if (request.status === 200) {
    let response;

    try {
      response = JSON.parse(request.responseText);
    } catch (error) {
      return request.responseText;
    }

    if (response.error) {
      if (typeof response.error === 'string') {
        return response.error;
      }
      return request.responseText;
    }

    return response.data;
  }

  return 'Something went wrong!';
};

module.exports = {
  FluidTemplate
};
