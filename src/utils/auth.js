const TOKEN = 'token'
import cookie from 'js-cookie'

export const setcookieken = (token) => {
    cookie.set(TOKEN,token)
}
export const getcookieken = () => {
    return  cookie.get(TOKEN)
}

export const remove = () => {
   cookie.remove(TOKEN)
}