import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/login" className="logo">
        <img src="/max.webp" alt="Ada Max" />
      </Link>
      <Link to="/signUp" className="btn relative z-index-1">
        Sign Up Now
      </Link>
    </div>
  );
};
