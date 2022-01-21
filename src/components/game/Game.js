import React, {useEffect, useState} from "react";

import Stage from './Stage'
import Display from './Display'
import StartButton from "./StartButton";
import GapContainer from "./GapContainer";

import styled from "styled-components";
import word from './word'

import {StyledGame, StyledGameWrapper} from "../styles/StyledGame";

//custom Hooks
import {useInterval} from "./hooks/useInterval";
import {usePlayer} from "./hooks/usePlayer";
import {useStage} from "./hooks/useStage";
import {createStage, checkCollision} from "../../gameHelpers";
import {getWordTetromino} from "../../tetrominos";


const Game = (props) => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer);

    const [callbackButton, setCallbackButton] = useState(false);

    const [answers, setAnswers] = useState([])


    // console.log('re-render');

    const movePlayer = dir => {
        if (!checkCollision(player, stage, {x: dir, y: 0})) {
            updatePlayerPos({x: dir, y: 0});
        }
    }

    useEffect(() => {
        if (!gameOver) return

        // ilosc punktow
        const score = word.points

        // poprawne odpowiedzi
        const passed = word.correct

        // bledne odpowiedzi
        const failed = word.wrong


        // TU JEST MIESJCE NA TWOJE ZAPYTANIE Z WYNIKAMI

    }, [gameOver])

    const resetWord = () => {
        word.word = ''
        word.answer = ''
        word.points = 0
        word.wrong = 0
        word.correct = 0
        word.tempo = 500
    }

    const startGame = () => {
        //reset
        word.init()
        resetWord()
        setAnswers([])
        setStage(createStage());
        setCallbackButton(true);

        setDropTime(word.tempo);
        resetPlayer();
        getWordTetromino(3)
        setGameOver(false);

    }

    const drop = () => {
        if (!checkCollision(player, stage, {x: 0, y: 1})) {
            updatePlayerPos({x: 0, y: 1, collided: false})
        } else {
            if (player.pos.y < 1 || gameOver) {
                console.log("GAME OVER");
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({x: 0, y: 0, collided: true});
        }
    }

    const dropPlayer = () => {
        drop();
    }

    useInterval(() => {
        drop();
    }, dropTime)


    return (
        <StyledGameWrapper role="button" tabIndex="0">
            <StyledGame>
                <Stage stage={stage}/>
                <aside>
                    <StartButton callback={startGame}/>
                    {gameOver ? (
                        <>
                            <Display gameOver={gameOver} text="Koniec gry"/>
                            <Display gameOver={gameOver} text={`Uzyskano: ${word.points} pkt`}/>
                            <Display gameOver={gameOver} text={`Poprawnych: ${word.correct}`}/>
                            <Display gameOver={gameOver} text={`Niepoprawnych: ${word.wrong}`}/>
                        </>
                    ) : (
                        <div>
                            <Display text={`Punkty: ${word.points}`}/>
                            <Display text={`Poprawnych: ${word.correct}`}/>
                            <Display text={`Błędne: ${word.wrong}`}/>
                            <GapContainer setDropTime={setDropTime} setGameOver={setGameOver} resetPlayer={resetPlayer}
                                          callbackButton={callbackButton}/>
                        </div>
                    )}
                </aside>
            </StyledGame>
        </StyledGameWrapper>
    );
};

export default Game;
