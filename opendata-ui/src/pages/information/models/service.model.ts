import { IService } from "../types/types";
import { format } from 'date-fns'

export class ServiceModel {
    public items: IService[] = [];

    constructor(item: any) {
        this._setItems(item);
    }

    /**
     * Set Items
     * @param items
     * @private
     */

    private _setItems({ items }: { items: IService[] }): void {
        let arr: IService[] = []
        items.map(service => {
            arr.push({
                id: service.id,
                title: service.title,
                description: service.description,
                tags: service.tags,
                linkResponseTypes: service.linkResponseTypes,
                createdDate: format(new Date(service.createdDate), 'dd/MM/yyyy'),
                updatedDate: format(new Date(service.updatedDate), 'dd/MM/yyyy'),
            })
        }
        )
        this.items = [...arr]
    }

}
