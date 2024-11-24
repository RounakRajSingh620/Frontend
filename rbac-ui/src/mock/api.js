// src/mock/api.js
const users = [
  {
    id: 1,
    name: "Admin",
    email: "admin@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "User1",
    email: "user1@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 3,
    name: "User2",
    email: "user2@example.com",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 4,
    name: "User3",
    email: "user3@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 5,
    name: "User4",
    email: "user4@example.com",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 6,
    name: "User5",
    email: "user5@example.com",
    role: "Viewer",
    status: "Active",
  },
  {
    id: 7,
    name: "User6",
    email: "user6@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 8,
    name: "User7",
    email: "user7@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 9,
    name: "User8",
    email: "user8@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 10,
    name: "User9",
    email: "user9@example.com",
    role: "Editor",
    status: "Active",
  },
];

const roles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
  {
    id: 4,
    name: "Super Admin",
    permissions: ["Read", "Write", "Delete", "Manage Users", "Manage Settings"],
  },
  { id: 5, name: "Contributor", permissions: ["Read", "Write"] },
  { id: 6, name: "Guest", permissions: ["Read"] },
  { id: 7, name: "Manager", permissions: ["Read", "Write", "Assign Roles"] },
  { id: 8, name: "Moderator", permissions: ["Read", "Delete"] },
  { id: 9, name: "Developer", permissions: ["Read", "Write", "Manage Code"] },
  { id: 10, name: "Support", permissions: ["Read", "Assist Users"] },
];

export const mockAPI = {
  getUsers: () => Promise.resolve(users),
  addUser: (user) => {
    const newUser = { ...user, id: users.length + 1 };
    users.push(newUser);
    return Promise.resolve(newUser);
  },
  deleteUser: (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index > -1) users.splice(index, 1);
    return Promise.resolve(users);
  },
  getRoles: () => Promise.resolve(roles),
  addRole: (role) => {
    const newRole = { ...role, id: roles.length + 1 };
    roles.push(newRole);
    return Promise.resolve(newRole);
  },
};
