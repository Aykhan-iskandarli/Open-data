import { API } from "core/configs/api.config";
import { POST } from "packages/VHttp/POST";
import { container, injectable } from 'tsyringe';
import { ISubscribers } from "../types/subscribers";



@injectable()
export class SubscribersService {
    private _post: POST = container.resolve(POST);

    Subscribers(data: ISubscribers): Promise<any> {
        return this._post.setApi(API.subscribers)
            .setPayload(data)
            .requestPromise()
    }
}
