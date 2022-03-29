import React from 'react';
import { DataContext } from '@config/DataContext';
import App from './App';

const Provider = () => {

  return(
    <DataContext>
      <App />
    </DataContext>
  )
}

export default Provider