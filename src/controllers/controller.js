const users = [
  { name: "honey", age: 25, id: 0 },
  { name: "winner", age: 23, id: 1 },
  { name: "lion", age: 23, id: 2 },
];

const fakeUser = {
  logged: true,
};

export const home = (req, res) => {
  return res.render("home", { users, fakeUser, pageTitle: "Home" });
};

export const showUser = (req, res) => {
  const { id } = req.params;
  const user = users[id];
  return res.render("user", { user, fakeUser, pageTitle: `${user.name}` });
};

export const getEditUser = (req, res) => {
  const { id } = req.params;
  const user = users[id];
  return res.render("edit", { pageTitle: "Edit User", user, fakeUser });
};

export const postEditUser = (req, res) => {
  const { id } = req.params; // 먼저 user.id를 파라미터에서 찾음.
  const user = users[id]; // id로 user객체에 접근
  const { newName } = req.body; // 웹프론트에서 입력 받은 name에 접근
  user.name = newName; //new name을
  return res.redirect("/");
};
