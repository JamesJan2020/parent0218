import React, { Component } from 'react';
class Child extends Component {
    //方法一
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
    //             <h2>child:{this.state.count}</h2>
    //             <button onClick={this.props.addParentCount}>+Parent</button>
    //             <button onClick={this.addCount}>+Child</button>
    //         </div>
    //     );
    // }

    //方法二

    render() {
        const { count, addParentCount, addChildCount } = this.props
        return (
            <div>
                <h2>child:{count}</h2>
                <button onClick={addParentCount}>+Parent</button>
                <button onClick={addChildCount}>+Child</button>
            </div>
        );
    }
}

export default Child;