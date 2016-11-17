import React, { Component, PropTypes } from 'react';

/**
 * the side panel on the left
 */
class SideNav extends Component {
    render() {
        let style = this.getStyle();
        return (
            <div className={`side-nav`} style={style}>

            </div>
        );
    }

    getStyle() {
        let { width } = this.props;
        return { width };
    }
}

SideNav.propTypes = {
    width: PropTypes.number
};

export default SideNav;