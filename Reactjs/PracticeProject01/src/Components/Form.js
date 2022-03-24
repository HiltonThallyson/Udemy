import { useState } from 'react';

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
        const user = {
            name: userName,
            age: age
        };

        props.onUserAdded(user);
    }
    return (
        <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input onChange={userNameChangeHandler} type="text"/>
        </div>
        <div>
          <label>Age (Years)</label>
          <input onChange={ageChangeHandler} type="number"/>
        </div>
        <button type='submit'>Add User</button>
      </form>
    )
};

export default Form;