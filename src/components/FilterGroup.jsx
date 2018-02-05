import filters from '../filters.json';

import React, {Component, Fragment} from 'react';
import Swiper from 'react-id-swiper';
import FilterButton from '../components/FilterButton';

const swiperParams = {
    spaceBetween: 5,
    slidesPerView: 'auto',
    freeMode: true,
}

class FilterGroup extends Component {
    state = {
        filters: filters
    }
    render() {
        const name = this.props.name;
        return (
            <Fragment>
                <span>{this.state.filters[name].title}</span>
                <br/>
                <Swiper {...swiperParams}>
                    { this.state.filters[name].values.map( (filter, index) => {
                        return (
                            <div style={{width: 'auto'}} key={index}>
                                <FilterButton>{filter.name}</FilterButton>
                            </div>
                            )   
                        })
                    }
                </Swiper>
            </Fragment>
        );
    }
}

export default FilterGroup;