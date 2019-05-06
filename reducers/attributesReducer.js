const initialState = {
  taste_fries: 5,
  taste_sauces: 5,
  portion_size: 5,
  price: 2.00,
  name: '',
  description: '',
  barrier_free: false,
};

const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET': state = initialState; break;
    case 'SET_TASTE_FRIES':   state = { ...state, taste_fries: action.payload }; break;
    case 'SET_TASTE_SAUCES':  state = { ...state, taste_sauces: action.payload }; break;
    case 'SET_PORTION_SIZE':  state = { ...state, portion_size: action.payload }; break;
    case 'SET_NAME':          state = { ...state, name: action.payload }; break;
    case 'SET_DESCRIPTION':   state = { ...state, description: action.payload }; break;
    case 'SET_PRICE':         state = { ...state, price: action.payload }; break;
    case 'SET_BARRIER_FREE':  state = { ...state, barrier_free: action.payload }; break;
  }
  return state;
};

export default attributeReducer;
