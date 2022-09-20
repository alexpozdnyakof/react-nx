import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { DEMO_DATA } from './data';
import reducer, { load, loadSuccess } from './slice';
import LatestTransactions from './transactions';
import testRenderer from 'react-test-renderer'
import * as storeHooks from '../../store-hooks'

describe('latest transactions', () => {
  const store = configureStore({reducer: {latestTxs: reducer}});
  const WithStore = () => (<Provider store={store}><LatestTransactions/></Provider>);

  it('should render succesfully', () => {
    const base = render(<WithStore/>)
    expect(base).toBeDefined()
  })

  it('should render correctly with transactions', ()=>{
    store.dispatch(loadSuccess(DEMO_DATA))
    const tree = testRenderer.create(<WithStore/>).toJSON();

    expect(tree).toMatchSnapshot();
  })

  it('should dispatch load', ()=>{
    const dispatchMock = jest.fn()
    jest.spyOn(storeHooks, 'useAppDispatch').mockReturnValue(dispatchMock);

    render(<WithStore/>);
    expect(dispatchMock).toHaveBeenCalledWith(load());
  })
})
