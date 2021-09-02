// creates a redux store that holds the state of the app. Only one store should ever exist
import { createStore } from 'redux'; 
import { reducer } from './reducers';

export default createStore(reducer);