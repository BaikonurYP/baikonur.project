import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks/useAppHooks'

interface ProtectedRouteProps {
    wrappedComponent: any
    path: string
}

const ProtectedRouteMain: FC<ProtectedRouteProps> = ({
    wrappedComponent: Component,
    path
}) => {
    const { user } = useAppSelector((state) => state.user)
    console.log(user)
    return (
        <Route path={path}>
            {() => (user ? <Component /> : <Redirect to="./login" />)}
        </Route>
    )
}

export default ProtectedRouteMain
