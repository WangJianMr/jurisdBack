const TOKEN = 'token'
const INFO = 'userInfo'

export const setlotionToken = (token) => {
    localStorage.setItem(TOKEN, token)
}
export const getlotionToken = () => {
    return localStorage.getItem(TOKEN || '')
}

export const setlotionuser = (user) => {
    localStorage.setItem(INFO, JSON.stringify(user))
}

export const getlotionuser = () => {
    return JSON.parse(localStorage.getItem(INFO || '{}'))
}
export const remove = () => {
    localStorage.removeItem('TOKEN')
    localStorage.removeItem('INFO')
}