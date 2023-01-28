import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
             // by name
             const newState = [...state];
             if (action.payload === 'up') {
                newState.sort((a,b) => a.name > b.name ? 1 : -1)
             }
             if (action.payload === 'down') {
                newState.sort((a,b) => a.name < b.name ? 1 : -1)
             }
            return newState
        }
        case 'check': {
            const newState = [...state];
            return newState.filter(el=> el.age >= action.payload ? el : ''); // need to fix
        }
        default:
            return state
    }
}
