import { Component } from "react";


class Mounting extends Component {
    
    constructor(props) {
        super(props)
        console.log('constructor');
        
    }

    componentDidMount() {
        console.log('component mounted');
        
    }

    render() {
        console.log('render');
        return (
            <h1>helo React.js</h1>
        )
        
    }
}

export default Mounting