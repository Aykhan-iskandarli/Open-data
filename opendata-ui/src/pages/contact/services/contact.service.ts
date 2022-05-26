import { API } from "core/configs/api.config";
import { GetLang } from "core/helpers/common-functions/common-functions";
import { GET } from "packages/VHttp/GET";
import { POST } from "packages/VHttp/POST";
import { container, injectable } from 'tsyringe';
import { ContactModel } from "../models/contact.model";
import { IContact } from "../types/contact";



@injectable()
export class ContactService {
    private _post: POST = container.resolve(POST);
    private _get: GET = container.resolve(GET);

    Contact(data: IContact): Promise<any> {
        return this._post.setApi(API.contact)
            .setPayload(data)
            .requestPromise()
    }

    getContacts(): Promise<any> {
        return this._get.setApi(API.getContacts)
            .setHeaders({
                "Accept-Language": GetLang()
            })
            .requestPromise()
            .then((res) => {
                return new ContactModel(res.data.contacts)
            })
    }
}