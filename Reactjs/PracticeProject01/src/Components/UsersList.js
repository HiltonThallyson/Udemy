import User from "./User";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const users = props.items;

  if (users.length === 0) {
    return "";
  }

  return (
    <ul className={styles.user_list}>
      {users.map((user) => (
        <User 
            key = {Math.random()}
            userName={user.name} 
            userAge={user.age} 
        />
      ))}
    </ul>
  );
};

export default UsersList;
