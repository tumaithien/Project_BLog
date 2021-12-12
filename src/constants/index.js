export const BASE_URL = process.env.REACT_APP_BASE_URL
export const DATE_TEMPLATE = 'DD/MM/YYYY'
export const DEFAULT_AVATAR = 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'
export const ACCESS_TOKEN = 'access_token'
export const MESSAGE_ERROR = {
    //Back end error
    existing_user_login: 'Tên đăng nhập đã tồn tại',
    existing_user_email: 'Email đã được đăng ký',
    rest_user_invalid_password: 'Mật khẩu không hợp lệ',
    rest_user_invalid_username: 'Tên đăng nhập không hợp lệ',
    rest_user_invalid_email: 'Email không hợp lệ',
    password_length: 'Mật khẩu phải dài ít nhất 6 ký tự',

    //Front end error
    email_required: 'Email không để rỗng',
    password_required: 'Password không để rỗng',
    username_required: 'Tên đăng nhập không để rỗng',



}
