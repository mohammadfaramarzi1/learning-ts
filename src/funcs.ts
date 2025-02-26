interface User {
  name: string;
  email: string;
  age: number;
}

const isLogin = (user: User): boolean => {
  return user.name === "mmd" ? true : false;
};

export {isLogin, User}