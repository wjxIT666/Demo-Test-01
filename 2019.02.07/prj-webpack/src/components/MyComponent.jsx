import React from 'react'

export default class MyComponent extends React.Component {
    constructor() {
        super()

        this.state = {
            message: "哈哈"
        }
    }

    show = () => {
        this.setState({message:"嘻嘻"})
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ () => {this.show()} }>Click Me</button>
            </div>
        )
    }
}