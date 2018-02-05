import filters from '../filters.json';

import React, { Component } from 'react';
import { Title, Subtitle } from 'bloomer';
import FilterButton from '../components/FilterButton';

class FilterBlock extends Component {
    state = {
        filters: filters
    }

    render() {
        const filter = this.state.filters[this.props.name]
        return (
            <div>
                <Title>{filter.title}</Title>
                <Subtitle>{filter.description}</Subtitle>
                <br/>
                { filter.values.map( filterItem => (
                    <FilterButton
                        key={filterItem.code}
                        value={filterItem.slug}
                        name={this.props.name}
                        onClick={this.props.onClick}
                    >{filterItem.name}</FilterButton>
                ))}
            </div>
        );
    }
}

export default FilterBlock;