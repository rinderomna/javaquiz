import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import TopoTitulofrom from '../src/components/TopoTitulo'
import TopoTitulo from '../src/components/TopoTitulo'
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine"/>
            </head>
            <body>
                <QuizBackground backgroundimage={
                    db.bg
                }>
                    <QuizContainer>
                        <TopoTitulo>JavaQuiz</TopoTitulo>
                        <Widget>
                            <Widget.Header>
                                <h1>{
                                    db.title
                                }</h1>
                            </Widget.Header>
                            <Widget.Content>
                                <p>{
                                    db.description
                                }</p>
                            </Widget.Content>
                        </Widget>

                        <Widget>
                            <Widget.Content>
                                <h1>Quizes da Galera</h1>

                                <p>lorem ipsum dolor sit amet...</p>
                            </Widget.Content>
                        </Widget>
                        <Footer/>
                    </QuizContainer>
                    <GitHubCorner projectUrl="https://github.com/rinderomna"/>
                </QuizBackground>
            </body>
        </html>
    );
}
