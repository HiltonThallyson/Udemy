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
        if (age < 0 || age > 100){
          window.alert(`Invalid Age! Choose a number between 0 and 100`);
          
        }
        if (age === ""){
          window.alert(`Please Insert a valid age!`);
          return;
        }
        if (userName === ""){
          window.alert("Please Insert a valir username!");
          return;
        }
        const user = {
            name: userName,
            age: age
        };

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