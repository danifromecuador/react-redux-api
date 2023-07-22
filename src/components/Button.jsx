import { useDispatch } from 'react-redux'
import { showUsers } from '../redux/users/usersSlice'

const Button = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(showUsers())
  }

  return (
    <button onClick={handleClick}>show users</button>
  )
}

export default Button
