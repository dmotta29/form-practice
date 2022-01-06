import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'

export default function AddUser(props) {

    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const userHandler = (event) => {
        event.preventDefault()
        if(enteredName.length === 0 || setEnteredAge.length === 0){
            return;
        }
        if(enteredAge < 1){
            return;
        }        
        props.onAddUser(enteredName, enteredAge)
        setEnteredName('')
        setEnteredAge('')
    }


    return (
        <Card>
            <form onSubmit={userHandler}>
                <label htmlFor='name'>Username</label>
                <input 
                    id='username' 
                    type='text' 
                    value={enteredName} 
                    onChange={e => setEnteredName(e.target.value)}/>
                <label htmlFor='age'>Age(Years)</label>
                <input 
                    id='age' 
                    type='number' 
                    value={enteredAge} 
                    onChange={e => setEnteredAge(e.target.value)}/>
                <Button type='submit'>Add User</Button>
            </form>
       </Card>
    )
}
