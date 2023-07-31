import { useState } from 'react';
import '../css/TicTacToeGame.css'

export function TicTacToeGame() {
    const [buttonsList, setButtonsList] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ])

    const [move, setMove] = useState(0);

    function getZeroIcon(color) {
        return (
            <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="65" cy="65" r="57.5" stroke={color} stroke-width="15" />
            </svg>
        )
    }

    function getCrossIcon(color) {
        return (
            <svg width="120" height="115" viewBox="0 0 120 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 106.995L106.995 7.99999" stroke={color} stroke-width="15" stroke-linecap="round" />
                <path d="M112.071 106.995L13.0761 7.99999" stroke={color} stroke-width="15" stroke-linecap="round" />
            </svg>
        )
    }

    function nextMove() {
        if (move === 0) {
            setMove(1);

        }
        else {
            setMove(0)
        }
    }

    function getNewButtonsList(coordinates, newValue) {
        const newButtonsList = [];
        buttonsList.forEach((line, y) => {
            const newLine = [];
            line.forEach((value, x) => {  //называется callback
                if (coordinates.y === y && coordinates.x === x) {
                    newLine.push(newValue);
                }
                else {
                    newLine.push(value);
                }
            });
            newButtonsList.push(newLine);
        });

        return newButtonsList
    }

    function setValue(coordinates) {
        if (move === 0) {
            nextMove();
            setButtonsList(getNewButtonsList(coordinates, getCrossIcon('cadetblue')))
        }
        else {
            nextMove();
            setButtonsList(getNewButtonsList(coordinates, getZeroIcon('cadetblue')))
        }
    }



    return (
        <div className='tic-tac-toe'>
            <div className={`player x-color ${move === 0 && 'x-color-active'}`}>{getCrossIcon('white')}</div>
            <div className='playing-field'>
                {buttonsList.map((line, y) => {
                    return (
                        <div key={y}>
                            {line.map((value, x) => {
                                return (
                                    <div
                                        key={x}
                                        onClick={(event) => {
                                            if (event.target.value !== 'clicked') {
                                                event.target.value = 'clicked';
                                                setValue({
                                                    x, // x: x
                                                    y, // y: y
                                                });
                                            }
                                        }}
                                        className='button'>
                                        {value}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className={`player o-color ${move === 1 && 'o-color-active'}`}>{getZeroIcon('white')}</div>
        </div>
    )
}