import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER_BEGIN } from "../context/actions";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =useAppContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!name && !isMember)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      });
    }
  }, [user, navigate]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            handleChange={handleChange}
            value={values.name}
            lableText="Name"
          ></FormRow>
        )}
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
          lableText="Email"
        ></FormRow>
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
          lableText="Password"
        ></FormRow>
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
          <button
          type='button'
          className='btn btn-block btn-hipster'
          disabled={isLoading}
          onClick={() => {
            loginUser( { email: 'sriniramineni@gmail.com', password: 'secret' }
        );
          }}
        >
          {isLoading ? 'loading...' : 'demo app'}
        </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
