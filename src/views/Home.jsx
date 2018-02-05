import React,{ Component } from 'react';
import { Container, Columns, Column, Hero, HeroBody, Title, Subtitle, Input } from 'bloomer';
import { Link } from 'react-router-dom';

import CircularButton from "../components/CircularButton";

const styles = {
    main: {
        background: '#CCC'
    }
}


class Home extends Component {

    state = {

    }
    
    render() {
        // const products = this.state.products;
        return (
            <Hero isFullHeight style={styles.main}>
                <HeroBody>
                <Container>
                    <Columns isVCentered>
                        <Column hasTextAlign="centered">
                            <Title>Bem vindo a Sigma Relógios</Title>
                            <Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Subtitle>
                        </Column>
                    </Columns>

                    <Columns isVCentered isCentered>
                        <Column isSize="1/2" hasTextAlign="centered">
                            <Input className="is-rounded" isSize="large" placeholder="Encontre seu relógio" />
                        </Column>
                    </Columns>

                    <Columns isVCentered isCentered>
                        <Column hasTextAlign="centered">
                            <CircularButton>Encontre seu relogio</CircularButton>
                        </Column>
                        <Column hasTextAlign="centered">
                            <CircularButton>Encontre seu relogio</CircularButton>
                        </Column>
                        <Column hasTextAlign="centered">
                            <Link to="/filter">
                                <CircularButton isBigger>Encontre seu relogio</CircularButton>
                            </Link>
                            
                        </Column>
                        <Column hasTextAlign="centered">
                            <CircularButton>Encontre seu relogio</CircularButton>
                        </Column>
                        <Column hasTextAlign="centered">
                            <CircularButton>Encontre seu relogio</CircularButton>
                        </Column>
                    </Columns>


                </Container>
                </HeroBody>
            </Hero>
        );
    }
}

export default Home;