import React, { Component } from 'react';

export default class App extends Component {
    state = {  
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    //constructor() {
        //super();
        //this.handleIncrement = this.handleIncrement.bind(this);
    //};

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There is no tags</p>;
    }

    render() { 

        //let classes = this.getBadgeClasses();

        React.createElement("h1")
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()} style={{fontSize:20}}>
                {this.formatCount()}
            </span>
            <button onClick={this.handleIncrement} 
            className="btn btn-secondary btn-sm"
            >
                Increment
            </button>
            <ul>
        { this.state.tags.map( tag => <li key={tag}>{tag}</li>) }
            </ul>
        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 