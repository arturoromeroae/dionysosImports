import { useEffect, useState } from 'react';

const API_PRODUCTS = process.env.API_PRODUCTS;

const getDataLiquor = () => {
  const [dataLiquor, setDataLiquor] = useState([]);
  const [loadingLiquor, setLoadingLiquor] = useState(true);
  const [dataLiquorLength, setDataLiquorLength] = useState(0);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "prodclass": 1,
    "country": 0,
    "prodType": 0,
    "prodVariety": 0,
    "producer": 0,
    "prodBrand": 0,
    "region": "string"
  });

  useEffect(() => {
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(API_PRODUCTS, requestOptions)
    .then(response => response.json())
    .then(result => {
        setDataLiquor(result);
        setDataLiquorLength(result.data.length)
        setLoadingLiquor(false);
      }
    )
    .catch(error => console.log('error', error));
  })

  return { dataLiquor, dataLiquorLength, loadingLiquor };
};

export { getDataLiquor };