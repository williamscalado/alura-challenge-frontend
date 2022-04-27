import jwt_decode from 'jwt-decode'

interface ITokenProps {
    exp: number
}

export const TOKEN_KEY = "@auth-al-cha"
export const AuthLogin = (token: string) => {
    localStorage.setItem(TOKEN_KEY as string, token)
}
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuthenticated = () => {

    const tokenLocal = getToken();
    if (!tokenLocal) return false
    const { exp }: ITokenProps = jwt_decode(tokenLocal)
    const dateNow = new Date().getTime()

    if (exp < dateNow / 1000) {
        return false
    }

    return true

}
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};