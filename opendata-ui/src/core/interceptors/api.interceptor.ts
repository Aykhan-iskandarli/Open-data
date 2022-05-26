import { injectable } from 'tsyringe';
import { RequestInterceptor } from '../../packages/VHttp/interceptors/request.interceptor';
import { ResponseInterceptor } from '../../packages/VHttp/interceptors/response.interceptor';
import { getToken } from "../configs/auth.config";
import history from "../configs/history.config";

@injectable()
export class ApiInterceptor extends RequestInterceptor {
    constructor() {
        super();
        this.request();
    }

    request() {
        this.intercept().use((req) => {
            req.headers = {
                ...req.headers,
                Authorization: 'Bearer ' + getToken(),
            };
            return req;
        })
    }
}

export class ApiInterceptorResponse extends ResponseInterceptor {
    constructor() {
        super();
        this.response();
    }

    response() {
        this.interceptor().use((res) => {
            return res;
        }, (error) => {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        history.replace('/auth/login')
                        localStorage.removeItem('authToken');
                        break;
                    case 404:
                        history.replace('/error/not-found')
                        break;
                    case 500:
                        break;
                    case 400:
                        break;
                    default:
                        break;
                }
            }
            return Promise.reject(error);
        });
    }
}
