import React, { useState } from 'react'
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [userList, setUserList] = useState([])

  const addUserHanlder = (uName, uAge) => {
    setUserList((prevUserList)=> {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHanlder}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
