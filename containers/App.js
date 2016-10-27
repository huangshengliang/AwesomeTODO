import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';

class App extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

let mapStateToProps = (state) => ({
    todos: state.todos
});

let mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);