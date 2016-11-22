import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const ProductList = ({
  products,
  activePage,
  onNavigatePage
}) => {
  const productList = products.productList;

  const options = {
    hideSizePerPage: true,
    page: activePage,
    onPageChange: onNavigatePage
  };

  return(
    <BootstrapTable
      data={productList}
      fetchInfo={{dataTotalSize: products.resultsCount}}
      options={options}
      remote
      hover
      pagination>
      <TableHeaderColumn
        isKey
        dataField="id">
        Id
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="productName">
        Product
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="price">
        Price
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="manufacturedDate">
        Manufacture Date
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField="expiryDate">
        Expiry Date
      </TableHeaderColumn>
    </BootstrapTable>
  );
};

ProductList.propTypes = {
  products: PropTypes.object.isRequired,
  activePage: PropTypes.number.isRequired,
  onNavigatePage: PropTypes.func.isRequired
}

export default ProductList;
