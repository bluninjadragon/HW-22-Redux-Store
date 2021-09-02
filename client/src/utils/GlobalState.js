import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'
import {Provider} from 'react-redux';
import store from './store';

export default function StoreProvider(props){
  return <Provider store={store} {...props} />;
};
