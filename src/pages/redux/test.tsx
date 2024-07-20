
import { useSelector, useDispatch, Provider } from 'react-redux'
import {increment, decrement } from '../../features/counter/counterSlice'

export default function Counter() {
  const user = useSelector((state: any) => state.auth.user)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{user?.userId}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}