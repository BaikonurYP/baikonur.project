import React, { FC, useRef, useEffect, useState, SyntheticEvent } from 'react'
import { useHistory } from 'react-router-dom'
import Game from '../../game/Game'

import ShipImg from '../../images/ships/shipMain.png'
import Popup from '../popup/Popup'
import ButtonText from '../buttons/buttonText/buttonText'

import {
    Wrapper,
    Container,
    LevelTitle,
    Bar,
    LiveContainer,
    Live,
    Points,
    CanvasStyled
} from './GameComponentStyled'

const GameComponent: FC = () => {
    const ref = useRef(null)
    const history = useHistory()
    const [currentGame, setCurrentGame] = useState<Game>(null)
    const [pause, setPause] = useState(false)
    const [level, setLevel] = useState(1)
    const [points, setPoints] = useState(0)
    const [playerLives, setPlayerLives] = useState(3)

    useEffect(() => {
        document.addEventListener('keydown', escClickHandler)

        return () => {
            document.removeEventListener('keydown', escClickHandler)
        }
    }, [escClickHandler])

    useEffect(() => {
        const ctx = ref.current.getContext('2d')
        const game = new Game(ctx, onChangePoints, onChangeLives, onChangeLevel)
        setCurrentGame(game)
        game.start()
    }, [])

    useEffect(() => {
        if (document.hidden) {
            onPause()
        }
    }, [document.hidden])

    function escClickHandler(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            onPause()
        }
    }

    function onChangePoints(num: number) {
        setPoints(num)
    }

    function onChangeLives(lives: number) {
        setPlayerLives(lives > 0 ? lives : 0)
    }

    function onChangeLevel(num: number) {
        setLevel(num)
    }

    function onPause() {
        setPause(!pause)
        currentGame.onPause()
    }

    function onLeave() {
        history.push('/home')
    }

    function onLookLiders() {
        history.push('/forum')
    }

    function restartHandler() {
        currentGame.restart()
        onPause()
    }

    return (
        <Wrapper>
            <Popup title="Пауза" onVisible={pause}>
                <ButtonText onClick={onPause}>Продолжить игру</ButtonText>
                <ButtonText onClick={restartHandler}>Начать заново</ButtonText>
                <ButtonText onClick={onLeave}>Выйти из игры</ButtonText>
            </Popup>
            <Popup title="Game over" onVisible={playerLives > 0 ? false : true}>
                <ButtonText onClick={restartHandler}>Начать заново</ButtonText>
                <ButtonText onClick={onLookLiders}>
                    Посмотреть лидеров
                </ButtonText>
                <ButtonText onClick={onLeave}>Выйти из игры</ButtonText>
            </Popup>
            <CanvasStyled
                ref={ref}
                width={innerWidth}
                height={innerHeight}
            ></CanvasStyled>
            <Container>
                <LevelTitle>Уровень {level}</LevelTitle>
                <Bar>
                    <LiveContainer>
                        {Array(playerLives)
                            .fill(null)
                            .map((value, index) => (
                                <Live src={ShipImg} key={index} />
                            ))}
                    </LiveContainer>
                    <Points>{points}</Points>
                </Bar>
            </Container>
        </Wrapper>
    )
}

export default GameComponent
