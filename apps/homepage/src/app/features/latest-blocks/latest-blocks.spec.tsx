import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import testRenderer from 'react-test-renderer'
import { Provider } from 'react-redux';
import { BLX_DATA } from './data';
import LatestBlocks from './latest-blocks';
import reducer, { load, loadSuccess } from './slice';
import * as storeHooks from '../../store-hooks'

describe('latest blocks', () => {
  const store = configureStore({reducer: {latestBlocks: reducer}});
  const WithStore = () => (<Provider store={store}><LatestBlocks/></Provider>);

  it('should render succesfully', () => {
    const base = render(<WithStore/>)
    expect(base).toBeDefined()
  })

  it('should render correctly with transactions', ()=>{
    store.dispatch(loadSuccess(BLX_DATA))
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
