import { useSelector } from "react-redux";


const Users = () => {
  const { users, isLoading, error } = useSelector(state => state.users)
  console.log(users, isLoading, error)

  let whenLoading = null;
  let whenError = null;
  if(isLoading) whenLoading = <div>waith it is loading</div>;
  if(error) whenError = <div>an error has appeard</div>
  let html = null;
  if(users) html = users.map(user => <li key={user.id}>{user.name}</li>)

  return (
    <ul>
      {html}
      {whenLoading}
      {whenError}
    </ul>
  )
}

export default Users