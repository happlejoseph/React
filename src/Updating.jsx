import { Component } from "react";


class Updating extends Component {

    state = {
        count: 0
    }

    increament = ()=> {
        this.setState( {
            count: this.state.count +1
        })
    }

    componentDidUpdate() {
        console.log('update');
        
    }

    render() {

        return(
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.increament}>click</button>
            </div>
        )
    }
}

export default Updating