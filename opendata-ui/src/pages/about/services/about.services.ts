import { API } from "core/configs/api.config";
import { GET } from "packages/VHttp/GET";
import { container, injectable } from "tsyringe";
import { AboutModel } from "../models/about.model";


@injectable()
export class AboutServices {
    private _get: GET = container.resolve(GET);

    getAbout(): Promise<any> {
        return this._get.setApi(API.about)
            .requestPromise()
            .then((res) => {
                return new AboutModel(res.data.about)
            })
    }

}