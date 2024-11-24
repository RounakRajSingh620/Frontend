// src/pages/Users.jsx
import { useState, useEffect } from 'react';
import { mockAPI } from '../mock/api';
import Table from '../components/Table';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        mockAPI.getUsers().then(setUsers);
    }, []);

    const handleDelete = (id) => {
        mockAPI.deleteUser(id).then(setUsers);
    };

    return (
        <div>
            <h1>Users</h1>
            <Table
                headers={['S.No.', 'Name', 'Email', 'Role', 'Status', 'Actions']}
                data={users.map((user) => ({ ...user }))}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Users;
