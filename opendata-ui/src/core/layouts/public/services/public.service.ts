import {container, injectable} from 'tsyringe';
import {GET} from "../../../../packages/VHttp/GET";
import {POST} from "../../../../packages/VHttp/POST";
import {PUT} from "../../../../packages/VHttp/PUT";
import {DELETE} from "../../../../packages/VHttp/DELETE";
import {API} from "../../../configs/api.config";
import {PublicModel} from "../models/public.model";
@injectable()
export class CarOrdersServices {
    private _get: GET = container.resolve(GET);
    private _post: POST = container.resolve(POST);
    private _put: PUT = container.resolve(PUT);
    private _delete: DELETE = container.resolve(DELETE);

    getTest(params: any): Promise<any> {
        return this._get.setApi(API.test)
            .setParams({...params})
            .requestPromise()
            .then((res)=>{
                return new PublicModel(res.data)
            })
    }

}

