const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};

const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

const intialCakeState = {
  numOfCakes: 10,
};

const intialIcecreamState = {
  numOfIcecreams: 20,
};

const cakeReducer = (state = intialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
      default: return state
  }
};

const icecreamReducer = (state = intialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
      default: return state
  }
};

const store = createStore(reducer)
console.log("Initial State ", store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()