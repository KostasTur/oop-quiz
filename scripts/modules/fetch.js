const fetchData = (endpoint, dataArray) =>
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => dataArray.push(...data));
export default fetchData;
