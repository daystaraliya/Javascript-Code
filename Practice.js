function loggedUser(username = "sam") {
  if (!username) {
    console.log("please enter a  username");

  }
  else {
    return `${username} is logged in`
  }
}

console.log(loggedUser());