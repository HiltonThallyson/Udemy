import React, { useState } from 'react';
import Card from './UI/Card';
import Form from './Components/Form';
import UsersList from './Components/UsersList';
import Modal from './UI/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const addUserHandler = user => {
    setUsers(prevUser => {
      return [user, ...prevUser];
    });  
  };

  const modalDisplayHandler = (trigger, message) => {
    if (trigger) {
      setModalDisplay(true);
      setModalMessage(message);
      return ; 
    }
    setModalDisplay(false);
    setModalMessage('');
  }

  return (
    <div>
      <Card>
        <Form onUserAdded = {addUserHandler} onInputCheck = {modalDisplayHandler}/>
      </Card>
      {modalDisplay && 
        <Modal messageDisplayed = {modalMessage} onConfirm = {modalDisplayHandler}/>
      }
      <Card>
        <UsersList items={users}/>
      </Card>
    </div>
  );
}

export default App;
