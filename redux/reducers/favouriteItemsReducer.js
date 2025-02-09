const initialstate = [];
export const favouriteItemsReducer = (state = initialstate, action) => {
    // Not done yet
  switch (action.type) {
    case 'favourite_Items':
     return [...state,action.data]
    default:
      return state;
  }
};
