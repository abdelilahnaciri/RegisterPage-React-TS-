import "./index.scss";

const styles = {
  list: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#bf4080",
    color: "white",
    padding: "1.5rem",
    borderRadius: 10,
  },
};

interface IProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}

const Navbar = ({ isLoggedIn, setIsLoggedIn }: IProps) => {
  return (
    <nav>
      <ul style={styles.list}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {!isLoggedIn ? "Log in" : "Log out"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
