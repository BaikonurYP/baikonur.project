import React, { FC, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchUser } from '../../store/actions/userActions'

interface ProtectedRouteProps {
    wrappedComponent: any
    path: string
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
    wrappedComponent: Component,
    path
}) => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    const user = useAppSelector((state) => state.user)

    useEffect(() => {
        if (isAuth) {
            dispatch(fetchUser())
        }
    }, [])

    return (
        <Route path={path}>
            {!isAuth ? (
                <Redirect to="./login" />
            ) : user.user ? (
                <Component />
            ) : (
                <div
                    onClick={() => {
                        console.log(isAuth)
                    }}
                >
                    loading
                </div>
            )}
        </Route>
    )
}

export default ProtectedRoute
