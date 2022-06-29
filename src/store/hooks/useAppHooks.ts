import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers'
import { store } from '../../index'

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
