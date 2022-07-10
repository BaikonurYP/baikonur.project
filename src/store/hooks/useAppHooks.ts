import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers'
import { store } from '../../index'
import { State } from '../types/redux'

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<State> = useSelector
