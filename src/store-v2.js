import { applyMiddleware, combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// store.dispatch({ type: 'account/deposit', payload: 500 });

// console.log('Hey Redux');
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
