import { container, injectable } from 'tsyringe';
import {API} from "../../../configs/api.config";
import {GET} from "../../../../packages/VHttp/GET";
import {POST} from "../../../../packages/VHttp/POST";
import {ILogin} from "../types/auth";
@injectable()
export class AuthService {
    private _post: POST = container.resolve(POST);

    signIn(data: ILogin): Promise<any> {
        return this._post.setApi(API.login)
            .setPayload(data)
            .requestPromise()
    }
}

