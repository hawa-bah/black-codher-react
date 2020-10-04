import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    }

    //this is anoter method
    componentDidMount(){
        console.log('mounted to the page')
    }

    render(){
        return (
            <button 
                className ="button-styles"
                style={ {
                    backgroundColor: 'pink',
                    color : "#fff",
                    border : "0",
                    padding : "10px 20px",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    fontSize:"1.1em"
                }}
                onClick={() => this.setState({ clicked: true })}
            >
                {this.state.clicked ? 'Item added to basket':'Add'}

            </button>
            
        )
    }
}

export  default Button;