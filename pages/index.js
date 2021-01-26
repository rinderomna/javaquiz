import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import TopoTitulo from '../src/components/TopoTitulo';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

export default function Home() {
    const router = useRouter();
    const [name, setName] = React.useState('');

    return (
        <QuizBackground backgroundimage={
            db.bg
        }>
            <Head>
                <title>JavaQuiz - Imersão Alura Next.js</title>
            </Head>
            <QuizContainer>
                <TopoTitulo>JavaQuiz</TopoTitulo>
                <Widget>
                    <Widget.Header>
                        <h1> {
                            db.title
                        } </h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p> {
                            db.description
                        } </p>

                        <form onSubmit={ function(event) {
                            event.preventDefault();
                            router.push(`/quiz?name=${name}`);
                        }}>
                            <input
                                onChange={function(event) {
                                    setName(event.target.value);
                                }}
                                placeholder="Digite seu Nome"/>
                            <Button type="submit" disabled={name.length < 3}>Jogar</Button>
                        </form>
                        
                        <p>Jogador: {name}</p>

                    </Widget.Content>
                </Widget>

                <Widget>
                    <Widget.Header>
                        <h1>Quizes da Galera</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p>lorem ipsum dolor sit amet...</p>
                    </Widget.Content>
                </Widget>
                <Footer/>
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/rinderomna"/>
        </QuizBackground>
    );
}
