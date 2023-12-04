document.getElementById("btnL").addEventListener("click", () => {
  let username = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("phNo").value;
  let password = document.getElementById("password").value;

  let userList = getUserList();

  if (username && email && number && password) {
    userList.push({
      id: userList.length + 1,
      username,
      email,
      number,
      password,
    });

    saveUserList(userList);

    alert("SIGN UP SUCESSFULL !!");

    setTimeout(() => {
      window.location.assign("Login.html");
    }, 500);
  }
});
