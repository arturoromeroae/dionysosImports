import { useEffect, useState } from 'react';

const API = process.env.API;

const getData = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(API, requestOptions)
    .then(response => response.json())
    .then(result => {
        setData(result)
        setLoading(false)
      }
    )
    .catch(error => console.log('error', error));
  }, 3000)})

  return { data, loading };
};

export { getData };