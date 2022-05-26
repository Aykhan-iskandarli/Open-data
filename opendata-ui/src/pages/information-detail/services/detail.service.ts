import { API } from "core/configs/api.config";
import { GetLang } from "core/helpers/common-functions/common-functions";
import { GET } from "packages/VHttp/GET";
import { container, injectable } from "tsyringe";
import { DetailModel } from "../models/detail.model";


@injectable()

export class DetailService {
    private _get:GET = container.resolve(GET);

    getDetail(id:number | string):Promise<any>{
        return this._get.setApi(API.detail+ "/" + id)
        .setHeaders({
            "Accept-Language": GetLang()
        })
        .requestPromise()
        .then((res) => {
            return new DetailModel(res.data.service)
        })
    }
}