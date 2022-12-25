import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any -did
    addUserCallback: (name: string)=>void // need to fix any -did
}

export const pureAddUser = (name: string, setError: Function, setName: Function, addUserCallback: Function) => {
    if(name.trim() !== '') {// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
        addUserCallback(name);
        setName('')
    } else {
        setError('Error: This field is empty')
    }
}

export const pureOnBlur = (name: string, setError: Function) => { // если имя пустое - показать ошибку
    if(name.trim() === '' ) {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: Function) => { // если нажата кнопка Enter - добавить
    if(e.key === 'Enter') {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any - did
    const [error, setError] = useState<string>('') // need to fix any -did

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any -did
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.length > 0 ? users[users.length-1].name: ''; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
