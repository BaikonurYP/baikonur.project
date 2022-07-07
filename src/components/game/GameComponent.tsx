import React, { FC, useRef, useEffect, useState, SyntheticEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
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
    CanvasStyled,
} from './GameComponentStyled'
import ButtonFullScreen from '../buttons/buttonFullScreen/buttonFullScreen'
import { saveLeader } from '../../store/actions/leadersAction'
import { Leader } from '../../store/types/leaderTypes'

const GameComponent: FC = () => {
    const image = useAppSelector((state) => state.playerSkin.image)
    const user = useAppSelector((state) => state.user.user)
    const ref = useRef(null)
    const history = useHistory()
    const dispatch = useAppDispatch()
    const [currentGame, setCurrentGame] = useState<Game>(null)
    const [pause, setPause] = useState(false)
    const [level, setLevel] = useState(1)
    const [points, setPoints] = useState(0)
    const [playerLives, setPlayerLives] = useState(3)
    const [isSaveScope, setSaveScope] = useState(false)

    useEffect(() => {
        document.addEventListener('keydown', escClickHandler)

        return () => {
            document.removeEventListener('keydown', escClickHandler)
        }
    }, [escClickHandler])

    useEffect(() => {
        const ctx = ref.current.getContext('2d')
        const game = new Game(
            ctx,
            ShipImg,
            onChangePoints,
            onChangeLives,
            onChangeLevel
        )
        setCurrentGame(game)
        game.start()
    }, [])

    useEffect(() => {
        if (document.hidden) {
            onPause()
        }
    }, [document.hidden])

    useEffect(() => {
        if (!playerLives && user?.id) {
            const data: Leader = {
                id: user.id,
                login: user.login,
                name: user.display_name,
                baikonurScore: points,
                avatar: user.avatar,
            }
            dispatch(saveLeader(data))
        }
    }, [isSaveScope])

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
        if (lives <= 0) {
            setSaveScope(true)
        }
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

    function onLookLeaders() {
        history.push('/leaderboard')
    }

    function restartHandler() {
        currentGame.restart()
        onPause()
    }

    return (
        <Wrapper>
            <ButtonFullScreen />

            <Popup title="Пауза" isVisible={pause}>
                <ButtonText onClick={onPause}>Продолжить игру</ButtonText>
                <ButtonText onClick={restartHandler}>Начать заново</ButtonText>
                <ButtonText onClick={onLeave}>Выйти из игры</ButtonText>
            </Popup>
            <Popup title="Game over" isVisible={!(playerLives > 0)}>
                <ButtonText onClick={() => currentGame.restart()}>
                    Начать заново
                </ButtonText>
                <ButtonText onClick={onLookLeaders}>
                    Посмотреть лидеров
                </ButtonText>
                <ButtonText onClick={onLeave}>Выйти из игры</ButtonText>
            </Popup>
            <CanvasStyled ref={ref} width={innerWidth} height={innerHeight} />
            <Container>
                <LevelTitle>
                    Уровень
                    {level}
                </LevelTitle>
                <Bar>
                    <LiveContainer>
                        {Array(playerLives)
                            .fill(null)
                            .map((value, index) => (
                                <Live src={ShipImg} key={ShipImg} />
                            ))}
                    </LiveContainer>
                    <Points>{points}</Points>
                </Bar>
            </Container>
        </Wrapper>
    )
}

export default GameComponent
