import { useState } from 'react';
import Button from '../UI/Button';
import styles from './Form.module.css';

const Form = (props) => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");

    const userNameChangeHandler = event => {
        setUserName(event.target.value);
    };

    const ageChangeHandler = event => {
        setAge(event.target.value);
    };

    const submitHandler = (submission) => {
        submission.preventDefault();
        if (userName === "" && age === ""){
          props.onInputCheck(true, 'Please enter a valid name and age (non-empty values).');
          return;
        }
        if (userName === ""){
          props.onInputCheck(true, 'Please insert a username!');
          return;
        }
        if (age < 1 || age === ''){
          props.onInputCheck(true, 'Please enter a valid age(>0).');
          return;
        }
        const user = {
            name: userName,
            age: age
        };
        props.onInputCheck(false, '');
        props.onUserAdded(user);
    }
    return (
        <form onSubmit={submitHandler} className={styles.form}>
        <div>
          <label >Username</label>
          <input onChange={userNameChangeHandler} type="text"/>
        </div>
        <div>
          <label>Age (Years)</label>
          <input onChange={ageChangeHandler} type="number"/>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    )
};

export default Form;