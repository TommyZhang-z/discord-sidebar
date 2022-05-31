import { useAppDispatch } from "../hooks/storeHooks";
import { login } from "../reducers/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(login("email"))}>Login</button>;
};

export default Login;
