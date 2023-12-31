import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/users/usersSlice";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers]);


  const { users, isLoading, error } = useSelector((state) => state.users);
  console.log(users)
  // console.log(users, isLoading, error);

  // Use the nullish coalescing operator (??) to provide default values for when isLoading and error are null or undefined
  const whenLoading = isLoading ? <div>wait, it is loading</div> : null;
  const whenError = error ? <div>an error has appeared</div> : null;

  const html = users ? users.map((user) => <li key={user.cell}>{user.name.first} -- {user.name.last}</li>) : null;

  return (
    <ul>
      {html}
      {whenLoading}
      {whenError}
    </ul>
  );
};

export default Users;
