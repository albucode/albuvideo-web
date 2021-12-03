export const mockApiResponse = (response) => {
  fetch.mockResponseOnce(JSON.stringify(response));
};
