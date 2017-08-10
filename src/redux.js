import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

const initialButtonState = { loading: false };

const button = (state = initialButtonState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        loading: action.payload,
      };
    default:
      return state;
  }
}

export const setLoading = (isLoading) => ({ type: 'SET_LOADING', payload: isLoading });

export const submit = () => (dispatch, getState) => {
  dispatch(setLoading(true));

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(setLoading(false));

      reject('nope');
    }, 3000)
  });

  return promise
    .catch(() => {
      dispatch(setLoading(false));
    })
}

const reducers = combineReducers({
  button,
})

const finalCreateStore = applyMiddleware(thunk)(createStore);

export const store = finalCreateStore(reducers);
