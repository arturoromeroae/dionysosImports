import { useEffect, useState } from 'react';

const API = process.env.API;

const getData = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLength, setDataLength] = useState(0);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "prodclass": 0,
    "country": 0,
    "prodType": 0,
    "prodVariety": 0,
    "producer": 0,
    "region": "string"
  });

  useEffect(() => {
    setTimeout(() => {
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(API, requestOptions)
    .then(response => response.json())
    .then(result => {
        setData(result);
        setDataLength(result.data.length)
        setLoading(false);
      }
    )
    .catch(error => console.log('error', error));
  }, 3000)})

  return { data, dataLength, loading };
};

export { getData };