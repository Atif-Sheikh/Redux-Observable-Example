import { PING, PONG } from '../constants'
const initialState = {
    isPinging: false
}

const pingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PING':
        return { isPinging: true };
  
      case 'PONG':
        return { isPinging: false };
  
      default:
        return state;
    }
};
export default pingReducer;
// export default function authReducer(state = initialState, action) {
//     switch (action.type) {
//         case SIGNUP:
//             return {
//                 ...state,
//                 authUser: {},
//                 user: {},
//                 isLoading: true,
//                 isError: false,
//                 error: {},
//                 isLoggedIn: false,
//             }
//         case SIGNUP_SUCCESS:
//             return {
//                 ...state,
//                 authUser: action.payload,
//                 isLoading: false,
//             }
//         case SIGNUP_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//                 error: action.error
//             }
//         case SIGNIN:
//             return {
//                 ...state,
//                 user: {},
//                 authUser: {},
//                 isLoading: true,
//                 isError: false,
//                 error: {},
//                 isLoggedIn: false,
//             }
//         case SIGNIN_SUCCESS:
//             return {
//                 ...state,
//                 user: action.payload,
//                 authUser: action.payload,
//                 isLoading: false,
//                 isLoggedIn: true,
//             }
//         case SIGNIN_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//                 error: action.error
//             }
//         case LOGOUT:
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         case LOGOUT_SUCCESS:
//             return {
//                 ...state,
//                 authUser: {},
//                 user: {},
//                 isLoading: false,
//                 isError: false,
//                 error: {},
//                 isLoggedIn: false,
//             }
//         case LOGOUT_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//                 error: action.error
//             }
//         default:
//             return state
//     }
// }