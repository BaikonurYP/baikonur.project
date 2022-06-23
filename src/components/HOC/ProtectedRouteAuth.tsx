import React, { FC, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchUser } from '../../store/actions/userActions'

interface ProtectedRouteProps {
    wrappedComponent?: any
    path: string
}

const ProtectedRouteAuth: FC<ProtectedRouteProps> = ({
    wrappedComponent: Component,
    path,
}) => {
    const { user } = useAppSelector((state) => state.user)
    const { isAuth } = useAppSelector((state) => state.auth)

    return (
        <Route path={path} exact>
            {isAuth && user ? <Redirect to="/home" /> : <Component />}
        </Route>
    )
}

export default ProtectedRouteAuth
