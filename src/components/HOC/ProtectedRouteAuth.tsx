import React, { FC } from 'react'
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
    const { user } = useAppSelector((state) => state.user)
    console.log(user)
    return (
        <Route path={path}>
            {() => (user ? <Redirect to="./home" /> : <Component />)}
        </Route>
    )
}

export default ProtectedRouteAuth
