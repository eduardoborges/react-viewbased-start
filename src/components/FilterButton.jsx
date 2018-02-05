import React from 'react';

import '../assets/styles/components/FilterButton.css';


const FilterButton = ({isActive, onClick, label, name, value, isFullWidth, ...rest}) => (
    <button onClick={onClick} name={name} value={value} className={"filter-button " + (isActive?'is-active':'') + (isFullWidth?'is-fullwidth':'')}>
        {rest.children}
    </button>
);

export default FilterButton;