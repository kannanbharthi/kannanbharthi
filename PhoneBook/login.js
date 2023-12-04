document.getElementById("btnL").addEventListener("click", () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let userList = getUserList();

  userList.forEach((element) => {
    if (element.username === username && element.password === password) {
      window.location.assign(`FrontPage.html?id=${element.id}`);
    }
  });
});
