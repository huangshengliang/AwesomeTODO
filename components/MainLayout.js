import React, { Component, PropTypes } from 'react';

import HeadNav from './HeadNav';
import SideNav from './SideNav';
import Footer from './Footer';
import MainView from './MainView';

import mainLayoutCss from './css/main-layout.css';

/**
 * The framework of home page
 */
class MainLayout extends Component {
    render() {
        let {
            style,
            className
        } = this.props;
        let {
            sideWidth
        } = this.props.workspace;
        return (
            <div className={`main-layout ${className}`} style={style}>
                <HeadNav />
                <SideNav width={sideWidth} />
                <MainView>
                    {this.props.children}
                </MainView>
                <Footer />
            </div>
        );
    }
};

MainLayout.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export default MainLayout;