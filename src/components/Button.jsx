import { useDispatch } from 'react-redux'
import { showUsers } from '../redux/users/usersSlice'

const Button = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    console.log('button clicked')
  }

  return (
    <button onClick={handleClick}>this button is unneccessary</button>
  )
}

export default Button
