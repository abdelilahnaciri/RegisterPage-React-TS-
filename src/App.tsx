import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import { useState } from "react";
import UserDetails from "./components/UserDetails";
import { IUserData } from "./interfaces";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    username: "",
    email: "",
    address: "",
    password: "",
  });
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? (
        <UserDetails user={userData} />
      ) : (
        <RegisterForm
          setIsLoggedIn={setIsLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {/* <Heading title={"React is "}>
        <span>❤</span>
      </Heading> */}
    </>
  );
}

export default App;
