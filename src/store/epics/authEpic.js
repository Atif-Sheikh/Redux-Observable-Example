import { PING, PONG } from '../constants'
import 'rxjs';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

//** Epic Middlewares For Auth **//
export default class AuthEpic {
    static pingEpic = (action$, store) =>
        action$.ofType(PING)
            .delay(3000) // Asynchronously wait 1000ms then continue
            .mapTo({ type: 'PONG' });
    //Epic middleware for login
    // static signinEpic = (action$) =>
    //     action$.ofType(SIGNIN)
    //         .switchMap(({ payload }) => {
    //             return HttpService.post(Path.LOGIN, payload)
    //                 .switchMap(({ response }) => {
    //                     console.log(response)
    //                     if (response) {
    //                         return Observable.of({
    //                             type: SIGNIN_SUCCESS,
    //                             payload: response
                                
    //                         });
    //                     }
    //                     return Observable.of({
    //                         type: SIGNIN_FAILURE,
    //                         payload: "email and password not matched ! Try Again "
    //                     });
    //                 });
    //         })

    // //Epic middleware for signup
    // static signupEpic = (action$) =>
    //     action$.ofType(SIGNUP)
    //         .switchMap(({ payload }) => {
    //             return HttpService.post(Path.SIGNUP, payload)
    //                 .switchMap(({ response }) => {
    //                     if (response.err) {
    //                         return Observable.of({
    //                             type: SIGNUP_FAILURE,
    //                             payload: response.err
    //                         });
    //                     }
    //                     return Observable.of({
    //                         type: SIGNUP_SUCCESS,
    //                         payload: response
    //                     });
    //                 });
    //         })
}