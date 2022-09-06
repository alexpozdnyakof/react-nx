import { useEffect } from 'react'
import { useAppDispatch } from '../../store-hooks'
import { load } from './slice'

export default function TransactionsList() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(load())

  }, [dispatch])

  return <div>Transaction</div>
}
