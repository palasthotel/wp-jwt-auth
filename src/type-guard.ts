import {AuthenticationError} from "./@types";

export const isAuthenticationError = (data: any): data is AuthenticationError => {
    return typeof data === "object" && data.success !== true;
}