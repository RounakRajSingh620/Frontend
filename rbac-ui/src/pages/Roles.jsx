// src/pages/Roles.jsx
import { useState, useEffect } from 'react';
import { mockAPI } from '../mock/api';
import Table from '../components/Table';

const Roles = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        mockAPI.getRoles().then(setRoles);
    }, []);

    return (
        <div>
            <h1>Roles</h1>
            <Table
                headers={['Role', 'Permissions', 'Actions']}
                data={roles.map((role) => ({
                    Role: role.name,
                    Permissions: role.permissions.join(', '),
                }))}
            />
        </div>
    );
};

export default Roles;
