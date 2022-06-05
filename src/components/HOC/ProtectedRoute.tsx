import React, { FC, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchUser, login } from '../../store/actions/userActions'

interface ProtectedRouteProps {
    wrappedComponent: any
    path: string
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
    wrappedComponent: Component,
    path
}) => {
    const dispatch = useAppDispatch()
    let isAuth = localStorage.getItem('isAuth')
    const { user } = useAppSelector((state) => state.user)

    useEffect(() => {
        if (isAuth) {
            dispatch(fetchUser())
        }
    }, [])

    return (
        <Route path={path}>
            {isAuth ? <Component /> : <Redirect to="./login" />}
        </Route>
    )
}

export default ProtectedRoute
