import { appSlice } from '../../app/redux/app-slice';

export function addCartProducts(product_id) {
  return async function (dispatch, getState) {
    dispatch(appSlice.actions.incrementByAmount(10));
  
  };
}
