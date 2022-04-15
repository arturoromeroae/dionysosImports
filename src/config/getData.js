import { useEffect, useState } from 'react';
import axios from 'axios';

const API_PRODUCTS = process.env.API_PRODUCTS;
const API_CUSTOMER = process.env.API_CUSTOMER;

const getData = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  axios.post(API_PRODUCTS, {
    "prodclass": props.products,
    "country": 0,
    "prodType": 0,
    "prodVariety": 0,
    "producer": 0,
    "prodBrand": 0,
    "region": "string"
  })
  .then(function (response) {
    setData(response['data']);
    setLoading(false);
  })
  .catch(function (error) {
    console.error(error);
  });

  return { data, loading };
};

export { getData };