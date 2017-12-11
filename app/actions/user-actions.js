export const INITIALIZE_USER = "INITIALIZE_USER";
export function initializeUser(user){
    return {
        type: INITIALIZE_USER,
        user
    }
}