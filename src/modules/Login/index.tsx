import { Form } from "./components/Form";
import { Header } from "./components/Header";

export const Login = () => {

  return (
    <div className="container">
      <Header />
      <div className="content">
        <h1 className="title">Get Started</h1>
        <Form />
      </div>
    </div>
  );
};
