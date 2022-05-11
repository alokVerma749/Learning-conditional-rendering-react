import "./styles.css";
import Login from "../components/login";
import Registration from "../components/registration";

let isLogin = false;
export default function App() {
  return (
    <div className="container">{isLogin ? <Login /> : <Registration />}</div>
  );
}
