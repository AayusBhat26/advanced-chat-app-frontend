export const getSender = (loggedUser, users) => {
  // console.log(users.users[0].firstName + users.users[0].lastName);
  // console.log();
  
  const name =
    loggedUser === users.users[0]._id.toString()
      ? users.users[1].firstName +" " + users.users[1].lastName
      : users.users[0].firstName + " " + users.users[0].lastName;  
  // console.log(name);
  return name;
};
