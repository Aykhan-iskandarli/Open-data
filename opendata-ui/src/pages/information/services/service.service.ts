import { API } from "core/configs/api.config";
import { GetLang } from "core/helpers/common-functions/common-functions";
import { GET } from "packages/VHttp/GET";
import { container, injectable } from "tsyringe";
import { ServiceModel } from "../models/service.model";
import { IParams, IParamsState } from "../types/types";


@injectable()
export class ServiceServices {
    private _get: GET = container.resolve(GET);

    getServicesBySearch(params: IParams): Promise<any> {
        return this._get.setApi(API.servicesBySearch)
            .setParams(params)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new ServiceModel(res.data.services)
            })
    }

    getServicesByDetailedSearch(params: any): Promise<any> {
        return this._get.setApi(API.servicesByDetailedSearch + "?" + params)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new ServiceModel(res.data.services)
            })
    }

    getServicesByTag(params: IParams): Promise<any> {
        return this._get.setApi(API.servicesByTag)
            .setParams(params)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new ServiceModel(res.data.services)
            })
    }

}