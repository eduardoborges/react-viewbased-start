import React, { Component, Fragment } from 'react';
import { Container, Columns, Column, Hero, HeroBody, Title, Subtitle } from 'bloomer';

import FilterGroup  from "../components/FilterGroup";
import FilterBlock  from "../components/FilterBlock";
import FilterButton from '../components/FilterButton';
import StepsBar     from "../components/StepsBar";

class Filter extends Component {

    state = {
        currentFilterBlock: false,
        query: {}
    }

    setCurrentBlockFilter = (e) => {
        this.setState({ currentFilterBlock: e.target.name });
    }

    handleSetFilterItemQuery = e => {
        const { value, name } = e.target;
        this.setState({ query: { ...this.state.query, [name]:value} });
    }

    render() {
        return (
            <Fragment>
            <Hero isFullHeight>
                <HeroBody>
                    <Container>
                        <Columns>

                            <Column hasTextAlign="centered" isSize={3}>
                                <Title className="animated tada">Monte o seu :)</Title>
                                <span>Como você imagina seu relógio?</span>
                                <figure className="image is-fullwidth">
                                    <img src="//placehold.it/400x400" alt="" />
                                </figure>
                                <Subtitle>36</Subtitle>
                                <span>Relógios semelhantes encontrados</span>
                            </Column>

                            <Column isSize={5}>

                                <FilterGroup name="genero" />

                                <br/>
                                <span>Cores</span>
                                <br/>
                                
                                <FilterButton onClick={this.setCurrentBlockFilter} name="cores-pulseira">
                                    Cor da Pulseira
                                </FilterButton>

                                <FilterButton onClick={this.setCurrentBlockFilter} name="cores-caixa">
                                    Cor da Caixa
                                </FilterButton>

                                <FilterButton onClick={this.setCurrentBlockFilter} name="cores-mostrador">
                                    Cor do Mostrador
                                </FilterButton>

                                <br/>
                                <span>Marcas</span>
                                <br/>
                                
                                <FilterButton isFullWidth onClick={this.setCurrentBlockFilter} name="marcas">
                                    Marcas
                                </FilterButton>

                                <br/>
                                <span>Outras Especificações</span>
                                <br/>
                                
                                <FilterButton onClick={this.setCurrentBlockFilter} name="material-pulseira">
                                    Material da pulseira
                                </FilterButton>

                                <FilterButton onClick={this.setCurrentBlockFilter} name="material-caixa">
                                    Material da Caixa
                                </FilterButton>

                                <FilterButton onClick={this.setCurrentBlockFilter} name="diametro-caixa">
                                    Diametro da caixa
                                </FilterButton>

                                <FilterButton onClick={this.setCurrentBlockFilter} name="diametro-caixa">
                                    Diametro da caixa
                                </FilterButton>

                            </Column>

                            <Column isSize={4}>
                                {this.state.currentFilterBlock ? <FilterBlock name={this.state.currentFilterBlock} onClick={this.handleSetFilterItemQuery}></FilterBlock> : null}
                            </Column>

                        </Columns>
                    </Container>
                    
                </HeroBody>
            </Hero>

            <StepsBar />

            </Fragment>
            
        );
    }
}

export default Filter;