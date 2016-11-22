import ProductApi from '../api/mockApi';

export function showProducts(products) {
  return {
    type: 'SHOW_PRODUCTS',
    products
  };
}

export function loadAllProducts(pageNumber) {
  return function(dispatch) {
    return ProductApi.getProducts(pageNumber).then(products => {
      dispatch(showProducts(products));
    }).catch(error => {
      throw(error);
    });
  };
}
