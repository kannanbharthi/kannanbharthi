let username = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("phNo");
let password = document.getElementById("password");

const qstr = window.location.search;
const userID = +new URLSearchParams(qstr).get("id");
let user = getUser(userID);

username.value = user.username;
email.value = user.email;
number.value = user.number;
password.value = user.password;

if (userID === 1) {
  document.getElementById("div3").innerHTML = `
  <a href="./Users.html">View all Users Details</a>
  `;
}

document.getElementById("btnL").addEventListener("click", () => {
  let name = username.value;
  let mail = email.value;
  let num = number.value;
  let pwd = password.value;

  let userList = getUserList();

  if (username && email && number && password) {
    userList.forEach((element) => {
      if (element.id === userID) {
        element.username = name;
        element.email = mail;
        element.number = num;
        element.password = pwd;
      }
    });

    saveUserList(userList);

    alert("UPDATE SUCCESSFULL !!");
  }
});
