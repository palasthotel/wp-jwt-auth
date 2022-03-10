import {AuthenticationError, AuthenticationSuccess, Credentials, UserData} from "./@types";
import axios from "axios";

const authenticate = async <T extends UserData>(
    baseUrl: string,
    credentials: Credentials,
): Promise<AuthenticationSuccess<T> | AuthenticationError> => {

    try {
        const response = await axios.post(
            baseUrl+"/wp-json/jwt-auth/v1/token",
            credentials
        );
        return response.data as AuthenticationSuccess<T>;
    } catch (e) {
        if(axios.isAxiosError(e)){
            const response = e.response?.data;
            delete response.data
            return {
                ...response
            } as AuthenticationError
        }
    }

    return {
        statusCode: 0,
        code: "unknown_error",
        message: "",
    } as AuthenticationError

}

export default authenticate;