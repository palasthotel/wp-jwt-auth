
export type Credentials = {
    username: string
    password: string
}

export type UserData = {
    token: string
    id: number
    email: string
    firstName: string
    lastName: string
    displayName: string
}

export type AuthenticationResponse<T extends UserData> = {
    success: boolean
    statusCode: number
    code: string
    message: string
    userData: T
}

export type AuthenticationSuccess<T extends UserData> = {
    userData: T
}

export type AuthenticationError = {
    statusCode: number
    code: string
    message: string
}