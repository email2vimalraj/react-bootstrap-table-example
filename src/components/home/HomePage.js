import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      activePage: 1
    };

    this.onNavigatePage = this.onNavigatePage.bind(this);
  }

  onNavigatePage(page, sizePerPage) {
    this.props.actions.loadAllProducts(page);
    this.setState({activePage: page});
  }

  render() {
    const {products} = this.props;

    return(
      (Object.keys(products).length > 0 &&
        <ProductList
          products={products}
          activePage={this.state.activePage}
          onNavigatePage={this.onNavigatePage} />
      )
    );
  }

}

HomePage.propTypes = {
  products: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
