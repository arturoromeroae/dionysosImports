import { useEffect, useState } from 'react';

const API = process.env.API_PRODUCTS;

const getDataFood = (props) => {
  const [dataFood, setDataFood] = useState([]);
  const [loadingFood, setLoadingFood] = useState(true);
  const [dataFoodLength, setDataFoodLength] = useState(0);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "prodclass": 3,
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
        setDataFood(result);
        setDataFoodLength(result.data.length)
        setLoadingFood(false);
      }
    )
    .catch(error => console.log('error', error));
  })

  return { dataFood, dataFoodLength, loadingFood };
};

export { getDataFood };