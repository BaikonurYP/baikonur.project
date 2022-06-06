import React, { FC, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks/useAppHooks'

interface ProtectedRouteProps {
    wrappedComponent: any
    path: string
}

const ProtectedRouteAuth: FC<ProtectedRouteProps> = ({
    wrappedComponent: Component,
    path
}) => {
    const user = useAppSelector((state) => state.user)
    let isAuth = localStorage.getItem('isAuth')

    return (
        <Route path={path}>
            {isAuth && user ? <Redirect to="./home" /> : <Component />}
        </Route>
    )
}

export default ProtectedRouteAuth
