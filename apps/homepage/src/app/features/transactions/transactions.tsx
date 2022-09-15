import { TxsTable, Widget } from '@blockchain/blockchain/ui-shared'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../store-hooks'
import { selectTxProps } from './selectors'
import { load } from './slice'

export default function TransactionsList() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(load())

  }, [dispatch])

  const txs = useSelector(selectTxProps)

  return (
    <Widget
      title="Latest Transactions"
      subtitle="Bitcoin"
      symbol="https://www.blockchain.com/explorer/_next/static/media/btc.a6006067.png"
      link="https://www.blockchain.com/btc/unconfirmed-transactions"
    >
      <TxsTable txs={txs}/>
    </Widget>
  )
}
