const intialState = [];
// sb se phly initial state define krni phr function me 2 parameters pass krny first me state and second me action ye wo h jo cart k functions perform krny
const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case "addToCart":
      let item = state.find((items) => items?.id === action.payload.id);
      if (item) {
        item.qty += 1;
        return [...state];
      } else {
        return [...state, action.payload];
      }

    case "deleteFromCart":
      return state.filter((items) => items?.id !== action.payload);

    case "clearCart":
      return [];

    case "increaseQty":
      let data = state?.find((items) => items?.id === action.payload);
      if (data) {
        data.qty += 1;
      }
      return [...state];

    case "DecreaseQty":
      let info = state?.find((items) => items?.id === action.payload);
      if (info) {
        if (info.qty >= 1) {
          info.qty -= 1;
          return [...state];
        } else {
          return state.filter((item) => item.id !== action.payload);
        }
      }

    case "deleteIndivItems":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
