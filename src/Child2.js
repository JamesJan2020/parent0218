import React, { Component } from 'react';

class child2 extends Component {
    // state = {
    //     count: 0,
    // }
    // addCount = () => {
    //     this.setState({
    //         count: this.state.count + 1,
    //     })
    // }
    // render() {
    //     return (
    //         <div>
    //             <h2>子:{this.state.count}</h2>
    //             <button onClick={this.props.addParentCount}>+父</button>
    //             <button onClick={this.addCount}>+子</button>
    //         </div>
    //     );
    // }



    render() {
        const { count, addParentCount, addChildCount } = this.props
        return (
            <div>
                <h2>子:{count}</h2>
                <button onClick={addParentCount}>+父</button>
                <button onClick={addChildCount}>+子</button>
            </div>
        );
    }
}

export default child2;