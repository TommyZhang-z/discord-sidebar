import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hocs/Layout";
import Login from "./containers/Login";
import Projects from "./containers/Projects";
import Create from "./containers/Create";
import Users from "./containers/Users";
import Activate from './containers/Activate'
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import { checkAuthenticated } from "./reducers/authSlice";

function App() {
  const auth = useAppSelector(state => state.auth);
  // const dispatch = useAppDispatch();
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/users" element={<Users />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
