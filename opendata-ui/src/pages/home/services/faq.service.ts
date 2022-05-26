import { API } from "core/configs/api.config";
import { GetLang } from "core/helpers/common-functions/common-functions";
import { GET } from "packages/VHttp/GET";
import { container, injectable } from "tsyringe";
import { FaqModel } from "../models/faq.model";


@injectable()
export class FaqServices {
    private _get: GET = container.resolve(GET);

    getFaqs(params:any): Promise<any> {
        return this._get.setApi(API.faqs )
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .setParams({ ...params })
            .requestPromise()
            .then((res) => {
                return new FaqModel(res.data.faqs)
            })
    }

}