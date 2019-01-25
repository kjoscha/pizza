const pizzaCalcReducer = (state = {

  taste_fries: 5,
  taste_sauces: 5,
  portion_size: 5,
  price: 2.00,
  name: '',
  description: '',

}, action) => {
  switch (action.type) {

    case 'SET_TASTE_FRIES': state = { ...state, taste_fries: action.payload }; break;
    case 'SET_TASTE_SAUCES': state = { ...state, taste_sauces: action.payload }; break;
    case 'SET_PORTION_SIZE': state = { ...state, portion_size: action.payload }; break;
    case 'SET_NAME': state = { ...state, name: action.payload }; break;
    case 'SET_DESCRIPTION': state = { ...state, description: action.payload }; break;
    case 'SET_PRICE': state = { ...state, price: action.payload }; break;

  }
  return state;
};

export default pizzaCalcReducer;