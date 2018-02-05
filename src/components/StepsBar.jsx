import "../assets/styles/components/StepsBar.css";

import React, {Component} from 'react';
import { Link } from "react-router-dom";

class StepsBar extends Component {
    state = {  }
    render() {
        return (
            <div className="steps-bar">
                <Link to="/filter">
                    <button className="step-button">Voltar</button>
                </Link>
                <Link to="/results">
                    <button className="step-button">Avançar</button>
                </Link>
            </div>
        );
    }
}

export default StepsBar;
