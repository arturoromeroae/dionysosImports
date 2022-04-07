import { useEffect, useState } from 'react';

const API = process.env.API;

const getDataBeer = (props) => {
  const [dataBeer, setDataBeer] = useState([]);
  const [loadingBeer, setLoadingBeer] = useState(true);
  const [dataBeerLength, setDataBeerLength] = useState(0);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "prodclass": 2,
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
    
    fetch(API, requestOptions)
    .then(response => response.json())
    .then(result => {
        setDataBeer(result);
        setDataBeerLength(result.data.length)
        setLoadingBeer(false);
      }
    )
    .catch(error => console.log('error', error));
  })

  return { dataBeer, dataBeerLength, loadingBeer };
};

export { getDataBeer };