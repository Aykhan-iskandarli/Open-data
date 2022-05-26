import { API } from "core/configs/api.config";
import { GetLang } from "core/helpers/common-functions/common-functions";
import { GET } from "packages/VHttp/GET";
import { container, injectable } from "tsyringe";
import { DropdownModel } from "../models/dropdown.model";


@injectable()
export class DropdownServices {
    private _get: GET = container.resolve(GET);

    getCategories(): Promise<any> {
        return this._get.setApi(API.dropdown.categories)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new DropdownModel(res.data)
            })
    }

    getOrganisations(): Promise<any> {
        return this._get.setApi(API.dropdown.organisations)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new DropdownModel(res.data)
            })
    }

    getFileTypes(): Promise<any> {
        return this._get.setApi(API.dropdown.fileTypes)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new DropdownModel(res.data)
            })
    }

    getContent(): Promise<any> {
        return this._get.setApi(API.dropdown.contentTypes)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new DropdownModel(res.data)
            })
    }

    getLanguages(): Promise<any> {
        return this._get.setApi(API.dropdown.languages)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new DropdownModel(res.data)
            })
    }

}