const initialstate = [];
export const itemCartReducer = (state = initialstate, action) => {
  // console.log(">>",state,this);

  switch (action.type) {
    case 'item_Cart':
      // console.log('state', state, action.data);
      let abc = state.filter(e => {
        return e.item.meals[0].idMeal == action.data.item.meals[0].idMeal;
      });
      // console.log(abc);
      if (abc.length == 0) {
        return [...state, action.data];
      } else {
        // console.log('><><', state, action.data);
        if (action.data.quantity == 0) {
          let abcde = state.filter(e => {
            return e.item.meals[0].idMeal != action.data.item.meals[0].idMeal;
          });
          return abcde;
        } else {
          let abcd = state.filter(e => {
            return e.item.meals[0].idMeal != action.data.item.meals[0].idMeal;
          });
          // console.log('><><', abcd);
          if (abcd.length != 0) {
            return [...abcd, action.data];
          } else {
            return [action.data];
          }
        }
      }
    default:
      return state;
  }
};
