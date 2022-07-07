import React, { FC, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/useAppHooks'
import { fetchUser } from '../../store/actions/userActions'

interface ProtectedRouteProps {
    component?: any
    path: string
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
    component: Component,
    path,
}) => {
    const dispatch = useAppDispatch()
    const { isAuth } = useAppSelector((state) => state.auth)
    const { user } = useAppSelector((state) => state.user)

    useEffect(() => {
        if (!isAuth) {
            dispatch(fetchUser())
        }
    }, [])

    return (
        <Route path={path} exact>
            {!isAuth ? (
                <Redirect to="/login" />
            ) : user ? (
                <Component />
            ) : (
                <div>loading</div>
            )}
        </Route>
    )
}

export default ProtectedRoute
