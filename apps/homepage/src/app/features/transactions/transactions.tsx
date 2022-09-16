import { TxsTable, Widget } from '@blockchain/blockchain/ui-shared'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store-hooks'
import { selectTxProps } from './selectors'
import { load } from './slice'

export default function LatestTransactions() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(load())

  }, [dispatch])

  const txs = useAppSelector(selectTxProps)

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
