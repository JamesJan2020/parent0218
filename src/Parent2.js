import React, { Component, createRef } from 'react';
import Child2 from './Child2';

class Parent2 extends Component {
    // childRef = createRef()
    // state = {
    //     count: 0,
    // }
    // addCount = () => {
    //     this.setState({
    //         count: this.state.count + 1,
    //     })
    // }
    // addChildCount = () => {
    //     this.childRef.current.addCount();
    // }
    // render() {
    //     return (
    //         <div>
    //             <h2>父:{this.state.count}</h2>
    //             <button onClick={this.addCount}>+父</button>
    //             <button onClick={this.addChildCount}>+子</button>
    //             <Child2 ref={this.childRef} addParentCount={this.addCount} />
    //         </div>
    //     );
    // }

    state = {
        count: 0,
        childCount: 0,
    }
    addCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    addChildCount = () => {
        this.setState({
            childCount: this.state.childCount + 1,
        })
    }
    render() {
        return (
            <div>
                <h2>父:{this.state.count}</h2>
                <button onClick={this.addCount}>+父</button>
                <button onClick={this.addChildCount}>+子</button>
                <Child2 count={this.state.childCount} addParentCount={this.addCount} addChildCount={this.addChildCount} />
            </div>
        );
    }





}

export default Parent2;