import { ChangeEvent } from "react";
import "./index.scss";
import { IUserData } from "../../interfaces";
import { formInputList } from "../../Data";

interface IProps {
  setIsLoggedIn: (val: boolean) => void;
  userData: IUserData;
  setUserData: (user: IUserData) => void;
}

const RegisterForm = ({ setIsLoggedIn, userData, setUserData }: IProps) => {
  console.log(userData);

  // ** Handlers
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    console.log(value);
    console.log(name);
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // ** Renders
  const renderFormInputList = formInputList.map((input) => {
    return (
      <div className="input-wrapper" key={input.id}>
        <label htmlFor={input.id}>{input.label}:</label>
        <input
          type={input.type}
          name={input.name}
          id={input.id}
          value={userData[input.name]}
          onChange={onChangeHandler}
        />
      </div>
    );
  });

  return (
    <div>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {renderFormInputList}
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      </form>
    </div>
  );
};
export default RegisterForm;
