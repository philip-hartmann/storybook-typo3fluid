export const FluidTemplate = ({
  extension = '',
  template = '',
  partial = '',
  section = '',
  args = {},
  api = {},
}) => {
  const apiUrl = api?.url ?? process.env.STORYBOOK_TYPO3FLUID_API_URL ?? '';
  const apiPassword = api?.password ?? process.env.STORYBOOK_TYPO3FLUID_API_URL ?? '';

  if (!apiUrl) {
    return 'No TYPO3 Fluid API URL set!';
  }

  const request = new XMLHttpRequest();
  const requestBody = {
    extension,
    template,
    partial,
    section,
    'arguments': args,
    'password': apiPassword
  };

  request.open('POST', apiUrl, false);
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
