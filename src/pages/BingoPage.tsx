import React, { useEffect, useState } from 'react'
import BingoTile from '../components/BingoTile';
import { data } from '../static/data';
import './Style.scss'

export interface IState {
    checked: {
        [key: string]: boolean;
    },
    won?: boolean;
}

const BingoPage = () => {


    const [state, setState] = useState<IState>({ checked: { 12: true } });
    const [count, setCount] = useState(0);

    useEffect(() => {

        if (count > 0)
            console.log(count);

    }, [count])

    const isWon = (checked: {
        [key: number]: boolean;
    }) => {
        const range = [0, 1, 2, 3, 4];
        return (
            undefined !== range.find(row => range.every(column => checked[row * 5 + column]))
            ||
            undefined !== range.find(column => range.every(row => checked[row * 5 + column]))
            ||
            range.every(index => checked[index * 5 + index]) // 0 6 12 18 24
            ||
            range.every(index => checked[index * 5 + 4 - index]) // 4 8 12 16 20
        );
    };
    const toggle = (id: string) => {
        // count bingos 
        if (id !== '12') {
            const range = [0, 1, 2, 3, 4];
            const checked = { ...state.checked, [id]: !state.checked[id] };
            const counter = range.filter(row => range.every(column => checked[row * 5 + column])).length +
                range.filter(column => range.every(row => checked[row * 5 + column])).length +
                (range.every(index => checked[index * 5 + index]) ? 1 : 0) +
                (range.every(index => checked[index * 5 + 4 - index]) ? 1 : 0);

            if (count !== counter) {
                setCount(counter);
            }
            setState(state => {
                const checked = { ...state.checked, [id]: !state.checked[id] };
                const won = isWon(checked);
                return {
                    ...state,
                    checked,
                    won
                };
            });

        }

    }

    const bingo = ['B', 'I', 'N', 'G', 'O'];
    return (
        <div className="root">
            <div className="bg_text">
                {bingo.map((value, index) => (
                    <div className={`${(index < count) ? `sel` : ``}`}>
                        {value}
                    </div>
                ))}
            </div>
            <div className="table">
                {/* <div className="counter">
                    {count}
                </div> */}
                {Object.keys(data).map(id => (
                    <BingoTile
                        key={id}
                        id={id}
                        isSet={!!state.checked[id]}
                        onToggle={() => toggle(id)}
                    >
                        {data[id]}
                    </BingoTile>
                ))}
            </div>
        </div>
    )
}

export default BingoPage
