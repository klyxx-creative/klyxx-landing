import React, { Component } from 'react';

// Styles
import './styles/Title.scss';

class Title extends Component {
    constructor (props) {
        super(props);

        let skipBackgroundAnimation = null;

        try {
            skipBackgroundAnimation = (window.innerHeight > 790 || window.innerWidth > 1320);
        } catch (e) {
            // Window isn't defined in build
            console.log(e);
        }


        this.state = {
            skipBackgroundAnimation: skipBackgroundAnimation,
            titleHeight: (skipBackgroundAnimation) ? 700 : 400,
            showHeader: false,
            topBarWidth: 0
        };

        this.triggerBackgroundAnimation = this.triggerBackgroundAnimation.bind(this);
        this.triggerTopBarAnimation = this.triggerTopBarAnimation.bind(this);
    }

    componentDidMount () {
        setTimeout(this.triggerTopBarAnimation, 300)

        if (!this.state.skipBackgroundAnimation) {
            setTimeout(this.triggerBackgroundAnimation, 175)
        }
    }

    triggerTopBarAnimation () {
        this.setState({topBarWidth: 45})
    }

    triggerBackgroundAnimation () {
        this.setState({titleHeight: 617})
    }

    render () {
        return (
            <div style={{height: this.state.titleHeight}} className="title-component">
                <div className="title-container">
                    <div style={{width: this.state.topBarWidth}} className="top-bar-header" />
                    <h2 className="title-header">We help our clients grow traffic and make more money. Period.</h2>
                    <div className="title-button-wrap">
                        <a href="">
                            <button id={'growthReportButton'}>Free Growth Report</button>
                        </a>
                        <a href="">
                            <button id={'growMyBusinessButton'}>Grow my Business</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Title;