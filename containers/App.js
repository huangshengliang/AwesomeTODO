import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import MainLayout from '../components/MainLayout';

class App extends Component {

    constructor(props) {
        super(props);

        this.addTodoAction = this.addTodoAction.bind(this);
    }

    render() {
        return (
            <MainLayout {...this.props}>
                <button onClick={this.addTodoAction}>加1</button>
            </MainLayout>
        );
    }

    addTodoAction() {
        let { addTodo } = this.props.actions;
        addTodo({
            content: Math.PI * Math.random()
        });
    }
};

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

let mapStateToProps = (state) => ({
    todos: state.todos,
    workspace: state.workspace
});

let mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);