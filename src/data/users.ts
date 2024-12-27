import fs from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'src', 'data', 'users.json');

if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

export const addUser = (email: string, password: string) => {
  const usersData = fs.readFileSync(usersFilePath, 'utf-8');
  const users = JSON.parse(usersData);

  const existingUser = users.find((user: { email: string; }) => user.email === email);
  if (existingUser) throw new Error("User already exists");

  users.push({ email, password });
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

export const findUser = (email: string, password: string) => {
  const usersData = fs.readFileSync(usersFilePath, 'utf-8');
  const users = JSON.parse(usersData);
  return users.find(
    (user: { email: string; password: string; }) => user.email === email && user.password === password
  );
};