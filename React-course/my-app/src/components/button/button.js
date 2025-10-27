const Button = () => {
  const user = false;
  const login = "Login";
  return <button>{user ? "Logout" : login}</button>;
};

export default Button;