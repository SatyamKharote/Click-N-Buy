import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "Satyam Kharote",
    email: "satyam@example.com",
    password: bcrypt.hashSync("123456", 10)
  },
  {
    name: "Shivam More",
    email: "shivam@example.com",
    password: bcrypt.hashSync("123456", 10)
  },
  {
    name: "Sundaram Iyyer",
    email: "sundaram@example.com",
    password: bcrypt.hashSync("123456", 10)
  }
];

export default users;
