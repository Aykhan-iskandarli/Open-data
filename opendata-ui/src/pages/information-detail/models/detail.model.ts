import { format } from "date-fns";
import { IDetail } from "../types/types";

export class DetailModel {
    public item: IDetail = {
        createdDate: new Date().toString(),
        updatedDate: new Date().toString(),
    };

    constructor(item: any) {
        this._setItems(item);

    }

    /**
     * Set Items
     * @param items
     * @private
     */

    private _setItems(item: IDetail): void {
        this.item = {
            id: item.id,
            title: item.title,
            description: item.description,
            categoryName: item.categoryName,
            categoryPhoto: item.categoryPhoto,
            instructionFileUrl: item.instructionFileUrl,
            tags: item.tags,
            linkUrls: item.linkUrls,
            linkResponseTypes: item.linkResponseTypes,
            createdDate: format(new Date(item.createdDate), 'dd/MM/yyyy'),
            updatedDate: format(new Date(item.updatedDate), 'dd/MM/yyyy'),
        };
    }

}
