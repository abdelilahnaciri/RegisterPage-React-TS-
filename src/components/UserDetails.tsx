import { IUserData } from "../interfaces";

interface IProps {
  user: IUserData;
}

const UserDetails = ({ user }: IProps) => {
  return (
    <div>
      <h3>Username is: {user.username}</h3>
      <h3>Email is: {user.email}</h3>
      <h3>Address is: {user.address}</h3>
    </div>
  );
};
export default UserDetails;
