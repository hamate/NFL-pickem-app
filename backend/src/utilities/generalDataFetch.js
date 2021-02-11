import fetch from 'node-fetch';

const generalDataFetch = async (URL, method, data = undefined) => {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (data !== undefined) {
    options.body = JSON.stringify(data);
  }

  const fetchedData = await fetch(URL, options);

  const jsonData = await fetchedData.json();
  const { status } = fetchedData;

  const fetchResult = { jsonData, status };
  return fetchResult;
};

export default generalDataFetch;
