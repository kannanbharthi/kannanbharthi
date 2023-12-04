const users = [
  {
    id: 1,
    username: "admin",
    email: "admin@gmail.com",
    number: "4567",
    password: "111",
  },
  {
    id: 2,
    username: "bharathi",
    email: "kannan@gmail.com",
    number: "1234",
    password: "000",
  },
];

const saveUserList = (userList) =>
  localStorage.setItem("users", JSON.stringify(userList));

const getUserList = () =>
  JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : users;

function getUser(id) {
  let ele;
  let userList = getUserList();
  userList.forEach((element) => {
    if (element.id == id) {
      ele = element;
    }
  });
  return ele;
}
