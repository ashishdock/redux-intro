import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import store from './store';

// store.dispatch({ type: 'account/deposit', payload: 500 });
// console.log(store.getState());

// store.dispatch({ type: 'account/withdraw', payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: 'account/requestLoan',
//   payload: { amount: 1000, purpose: 'Buy a car' },
// });
// console.log(store.getState());

// store.dispatch({
//   type: 'account/payLoan',
// });
// console.log(store.getState());

// store.dispatch(deposit(500));
// console.log(store.getState());
// store.dispatch(withdraw(200));
// console.log(store.getState());
// store.dispatch(requestLoan(1000));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());

// store.dispatch(createCustomer('John Doe', '191919'));
// console.log(store.getState());
// store.dispatch(updateName('Jane Doe'));
// console.log(store.getState());

// store.dispatch(deposit(250));
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
