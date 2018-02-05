import React, {Component} from 'react';

import '../assets/styles/components/FloatCart.css';

class FloatCart extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div className="float-cart" title="Itens no carrinho">
                <span>{this.props.countItens}</span>
               
            </div>
        );  
    }
}

export default FloatCart;