import { log } from "console";
import { Ilogin } from "../../moduls/moduls"
import { AppDispatch } from "../store";
import { userSlice } from "../Slice/UserSlice";


export const registration = ({userData}:{userData: Ilogin}) => async(dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.registerLoading())
    const {data} = await $host.post('api/user/registration', {number: userData.number, password: userData.password})
    dispatch(userSlice.actions.success(data))
  } catch (e) {
    dispatch(userSlice.actions.registerError(e.message))
  }
}

export const check = () => async(dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.loginLoading())
    dispatch(userSlice.actions.check())
  } catch (e) {
    dispatch(userSlice.actions.checkError())
  }
}
export const login = ({userData}:{userData: Ilogin}) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.loginLoading())
    const {data} = await $host.post('api/user/login', {number: userData.number, password: userData.password})
    dispatch(userSlice.actions.success(data))
  } catch (e) {
    dispatch(userSlice.actions.loginError(e.message))
  }
}