import React, {Component, PropTypes} from 'react';

/**
 * the content area
 */
class MainView extends Component {
    render() {
        return (
            <div className={`main-view`}>
                {this.props.children}
            </div>
        );
    }
}

MainView.propTypes = {

};

export default MainView;