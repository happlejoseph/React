import { Component } from "react";


class Removing extends Component {

    componentWillUnmount() {
        console.log('removed');
        
    }

    render() {
        console.log('render');
        
        return(
            <h1>helooo react removed</h1>
        )
    }
}

export default Removing