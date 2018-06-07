import { PING, PONG } from '../constants'

export default class PingAction {

    // static signup(user) {
    //     return {
    //         type: SIGNUP,
    //         payload: user
    //     }
    // }
    static ping = () => ({ type: PING, payload: 'abc' });
    static pong = () => ({ type: PONG });
    
}