export const SAVE_DEMAND = 'farmerDemand/SAVE_DEMAND';
export const CHANGE_QUANTITY = 'farmerDemand/CHANGE_QUANTITY';
export const CHANGE_PRICE = 'farmerDemand/CHANGE_PRICE';
export const CHANGE_PRODUCT = 'farmerDemand/CHANGE_PRODUCT';

const initialState = {
  demands: [],
  quantity: 0,
  price: 0,
  currentProduct: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DEMAND:
      const newDemand = {
        quantity: state.quantity,
        price: state.price,
        product: 'Alface Embalada',
      };
      console.log(newDemand, state.demands);
      return {
        ...state,
        demands: [...state.demands, newDemand],
      }

    case CHANGE_QUANTITY:
      return {
        ...state,
        quantity: action.quantity,
      }

    case CHANGE_PRICE:
      return {
        ...state,
        price: action.price,
      }

    case CHANGE_PRODUCT:
      return {
        ...state,
        currentProduct: action.currentProduct,
      }

    default:
      return state
  }
}

export const saveDemand = () => {
  return dispatch => {
    dispatch({
      type: SAVE_DEMAND,
    })
  }
}

export const changeQuantity = (quantity) => {
  return dispatch => {
    dispatch({
      quantity,
      type: CHANGE_QUANTITY,
    })
  }
}

export const changePrice = (price) => {
  return dispatch => {
    dispatch({
      price,
      type: CHANGE_PRICE,
    })
  }
}

export const changeProduct = (currentProduct) => {
  return dispatch => {
    dispatch({
      currentProduct,
      type: CHANGE_PRODUCT,
    })
  }
}
