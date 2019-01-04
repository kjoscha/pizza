const pizzaCalcReducer = (state = {
  diameter: 1,
  price: 1,
  squaremeterPrice: 1,
  name: '',
  description: '',
}, action) => {
  let radius, area;
  switch (action.type) {

    case 'SET_DIAMETER':
      radius = (action.payload / 2);
      area = 3.14 * radius * radius;
      state = {
        ...state,
        diameter: parseFloat(action.payload),
        squaremeterPrice: Math.round(state.price / area * 10000)
      };
    break;

    case 'SET_PRICE':
      radius = (state.diameter / 2)
      area = 3.14 * radius * radius
      state = {
        ...state,
        price: parseFloat(action.payload).toFixed(2),
        squaremeterPrice: Math.round(action.payload / area * 10000)
      };
    break;

    case 'SET_NAME': state = { ...state, name: action.payload };
    break;

    case 'SET_DESCRIPTION': state = { ...state, description: action.payload };
    break;

  }
  return state;
};

export default pizzaCalcReducer;