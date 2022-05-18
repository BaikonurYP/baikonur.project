import { SwaggerUserInfo } from "../../core/http/api/types/SwaggerTypes";

export type Profile = SwaggerUserInfo

export interface ProfileState {
  profile: Profile,
  loading: boolean,
  error: null | string
}

export enum ProfileActionTypes {
  FETCH_PROFILE = "FETCH_PROFILE",
  FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS",
  FETCH_PROFILE_ERROR = "FETCH_PROFILE_ERROR"
}

export interface FetchProfileAction {
  type: ProfileActionTypes.FETCH_PROFILE
}

export interface FetchProfileSuccessAction {
  type: ProfileActionTypes.FETCH_PROFILE_SUCCESS,
  payload: Profile
}

export interface FetchProfileErrorAction {
  type: ProfileActionTypes.FETCH_PROFILE_ERROR,
  payload: string
}

export type ProfileAction = FetchProfileAction | FetchProfileSuccessAction | FetchProfileErrorAction;