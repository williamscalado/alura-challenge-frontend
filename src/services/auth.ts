export const TOKEN_KEY = "@auth-al-cha"
export const AuthLogin = (token: string) => {
    localStorage.setItem(TOKEN_KEY as string, token)
}
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY)! !== null
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};