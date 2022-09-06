const user = {
  loggedIn: true,
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const users = [
  {
    name: "철수",
    age: 20,
    job: "programmer",
  },
  {
    name: "영희",
    age: 23,
    job: "programmer",
  },
  {
    name: "민수",
    age: 25,
    job: "teacher",
  },
];
export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home", user, numbers, users });
};
export const login = (req, res) => {
  return res.render("login", { pageTitle: "Login", user, numbers });
};
export const myPage = (req, res) => {
  return res.render("myPage", { pageTitle: "My Page", user, numbers });
};
