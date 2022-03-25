import React, { useState } from 'react';
import Card from './UI/Card';
import Form from './Components/Form';
import UsersList from './Components/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = user => {
    setUsers(prevUser => {
      return [user, ...prevUser];
    });  
  };

  return (
    <div>
      <Card>
        <Form onUserAdded = {addUserHandler}/>
      </Card>
      <Card>
        <UsersList items={users}/>
      </Card>
    </div>
  );
}

export default App;
