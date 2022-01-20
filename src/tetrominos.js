import word from './components/game/word'
import {useAuth} from "./context/auth";


export let TETROMINOS = {
    0: {shape: [[0]], color: '0, 0 , 0', word: ''},
    I: {
        shape: [
            ['I'],
        ],
        color: '0, 0, 0',
        word: 'cell2',

    },

    slowa: [
        {
            id: 1,
            pointToGet: 1,
            word: 'stru_ka',
            answer: 'ż'
        },
        {
            id: 2,
            pointToGet: 1,
            word: 'sz_sty',
            answer: 'ó'
        },
        {
            id: 3,
            pointToGet: 1,
            word: 'si_dmy',
            answer: 'ó'
        },
        {
            id: 4,
            pointToGet: 1,
            word: 'd_rny',
            answer: 'u'
        },
        {
            id: 5,
            pointToGet: 1,
            word: '_aba',
            answer: 'ż'
        },
        {
            id: 6,
            pointToGet: 1,
            word: 'roz_utny',
            answer: 'rz'
        },
        {
            id: 7,
            pointToGet: 1,
            word: 'og_rek',
            answer: 'ó'
        },
        {
            id: 8,
            pointToGet: 1,
            word: '_oinka',
            answer: 'ch'
        }
    ]
}


export const randomTetromino = () => {
    const slowo = TETROMINOS.slowa[Math.floor(Math.random() * TETROMINOS.slowa.length)]
    TETROMINOS['I'].word = slowo
    word.word = slowo.word
    word.answer = slowo.answer

    return TETROMINOS['I'];
}

export const getWordTetromino = (set) =>{
    fetch(`http://localhost:8080/answers/getAll/${set}`, {
        method: 'GET',
        mode: "cors",
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + word.authToken
        }
    })
        .then(res=>{
            console.log(res.data)
            const slowa = res.data
            TETROMINOS['slowa'] = slowa
        })
        .catch(e=>{
            console.log('ERROR getWordTetromino: ',e)
        })

}

