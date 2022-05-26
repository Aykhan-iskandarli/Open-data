import { API } from "core/configs/api.config";
import { GET } from "packages/VHttp/GET";
import { container, injectable } from 'tsyringe';



@injectable()
export class SearchService {
    private _get: GET = container.resolve(GET);

    search(params: any): Promise<any> {
        return this._get.setApi(API.search)
            .setParams({ ...params })
            .requestPromise()
            .then(res => {
                return res.data.Tags.items
            })
    }

}