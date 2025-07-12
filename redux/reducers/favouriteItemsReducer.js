const initialstate = 0;
export const favouriteItemsReducer = (state = initialstate, action) => {
  // Not done yet
  switch (action.type) {
    case 'favourite_Items':
      console.log(state,action.data.count);
      
      return state+=action.data.count;
    default:
      return state;
  }
};
