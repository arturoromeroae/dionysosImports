import { useEffect, useState } from 'react';

const API = process.env.API;

const getDataWine = (props) => {
  const [dataWine, setDataWine] = useState([]);
  const [loadingWine, setWineLoading] = useState(true);
  const [dataWineLength, setDataWineLength] = useState(0);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "prodclass": 4,
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
        setDataWine(result);
        setWineLoading(false);
      }
    )
    .catch(error => console.log('error', error));
  })

  return { dataWine, loadingWine };
};

export { getDataWine };