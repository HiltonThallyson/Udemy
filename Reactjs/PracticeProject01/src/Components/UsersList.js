import User from './User';

const UsersList = props => {
    return (
        <div>
            {props.items.length === 0 && <p>No Users</p>}
        </div>
    );
};

export default UsersList;