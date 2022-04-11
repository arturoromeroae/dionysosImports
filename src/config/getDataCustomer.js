import { useEffect, useState } from 'react';

const API_CUSTOMER = process.env.API_CUSTOMER;

const getDataCustomer = () => {
  const [dataCustomer, setDataCustomer] = useState([]);
  const [loadingCustomer, setLoadingCustomer] = useState(true);
  const [dataCustomerLength, setDataCustomerLength] = useState(0);

  const customerHeaders = new Headers();
  customerHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "state": 0,
    "city": 0,
    "type": 0
  });

  useEffect(() => {
    var requestOptions = {
      method: 'POST',
      headers: customerHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(API_CUSTOMER, requestOptions)
    .then(response => response.json())
    .then(result => {
        setDataCustomer(result);
        setDataCustomerLength(result.data.length)
        setLoadingCustomer(false);
      }
    )
    .catch(error => console.log('error', error));
  })

  return { dataCustomer, dataCustomerLength, loadingCustomer };
};

export { getDataCustomer };
