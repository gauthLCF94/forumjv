/* eslint-disable import/no-anonymous-default-export */
import { ADD_POST, GET_POST, GET_ALL_POSTS } from '../actions/postList'

const initialState = [
    { index: 0,
    title: 'Je suis le boss',
    author: 'Diablo_x9',
    date: '08/02/2003',
    content: 'JE SUIS LE BOSS MAGGLE ! Qui peut me stopper ?!',
    comments: [
        { author: 'noobman_du_92', content: 'Aller 1v1 je te défonce ! Sinon je ramène mes potos !' },
        { author: 'jean-edgar', content: 'Au nom de mes aïeuls je te pourfendrais ! Manant !' }
    ] },
    { index: 1,
    title: 'WOW : Quel leg pour war tank ?',
    author: 'kevindu13',
    date: '12/03/2021',
    content: 'Yo je reprend le jeu, je veux tanker mais je prends trop cher ... quel leg je dois prendre pour gagner en survie ?',
    comments: [
        { author: 'trololol', content: 'Pas de besoin leg quand tu sais jouer' },
        { author: 'nicedude94', content: 'Le leg qu\'il te faut c\'est "Le Mur" ;) bon jeu' },
        { author: 'otherNiceDude', content: 'Sinon tu peux prendre "Sire-Tonnerre"'}
    ]},
    { index: 2,
    title: 'Vends PS5 !!! 5000€ prix d\'ami ! Peu de stocker ! Dépêchez-vous !!!',
    author: 'best_skam_in_town75',
    date: '01/01/2021',
    content: 'Envoyez votre adresse avec le numéro de carte bleu, la date et le code au dos ! Envoie rapide !',
    comments: []
    }
]

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                    ...state,
                    newpost: {
                        index: state.length,
                        title: action.title,
                        date: action.date,
                        content: action.content,
                        comments: [],
                    }
            }
        case GET_POST:
            return {
                ...state[action._index]
            }
        case GET_ALL_POSTS:
            return {
                ...state
            }
        default:
            return state
    }
}