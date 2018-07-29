import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
// not needed after we moved state to a reducer, instead of setting dummy state in this file, i.e. - we moved toward using redux
// import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

//compoent properties should go in prop=types as a form of validation

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  }

//state no longer set here
// const { items } = this.state;
//this.state.item represents const initialState from itemReducer

  render() {
    const { items } = this.props.item;
    return(
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button 
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  //removed handling state in this file so this is no longer relevant
                  // onClick={() => {
                  //   this.setState(state => ({
                  //     items: state.items.filter(item => item.id !== id)
                  //   }));
                  // }}

                  //bind is used to pass param to function
                  onClick={this.onDeleteClick.bind(this, id)}
                  >
                    &times;
                  </Button>
                  {name}                  
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );

  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
  //the getItems actions is handled as a prop, although it's a function
  //represents the state that will be mapped to our defined props
};

const mapStateToProps = state => ({
  item: state.item
  //state.item comes from 'index.js' reducer
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);