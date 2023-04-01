import instance from "./instance";
export interface IUser {
    email: string,
    password: string
}

export const signin = (user: IUser) => {
    return instance.post("/signin", user)
}