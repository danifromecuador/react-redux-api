import { useSelector } from "react-redux";


const Users = () => {
  const { users, isLoading, error } = useSelector(state => state.users)
  console.log(users, isLoading, error)

  let html = null;
  if (isLoading) {
    html=<div>miguele</div>;
  }

  return (
    <ul>
      {html}
    </ul>
  )
}

export default Users