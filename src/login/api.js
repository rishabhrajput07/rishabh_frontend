import { axiosRequest } from "../constant"

export const userLoginApi = async (value) =>
  await axiosRequest("POST", `login`, value)
