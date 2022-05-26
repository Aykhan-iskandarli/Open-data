import { API } from "core/configs/api.config";
import { GetLang } from "core/helpers/common-functions/common-functions";
import { GET } from "packages/VHttp/GET";
import { IPageParams } from "store/types/store.types";
import { container, injectable } from "tsyringe";
import { CategoryModel } from "../models/category.model";
import { OrganisationModel } from "../models/organisation.model";


@injectable()
export class CategoriesServices {
    private _get: GET = container.resolve(GET);

    getCategories(params: IPageParams): Promise<any> {
        return this._get.setApi(API.category)
            .setParams(params)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new CategoryModel(res.data.categories)
            })
    }

    getOrganisations(params: IPageParams): Promise<any> {
        return this._get.setApi(API.organisation)
            .setParams(params)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new OrganisationModel(res.data.organisations)
            })
    }

}