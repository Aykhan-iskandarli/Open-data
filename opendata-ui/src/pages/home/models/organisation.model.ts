import { ICategory, IFilter, IOrganisation } from "../types/types";

export class OrganisationModel {
    public items: IOrganisation[] = [];
    public itemsFilter: IFilter[] = [];

    constructor(item: any) {
        this._setItems(item);
        this._setItemsFilter(item);

    }

    /**
     * Set Items
     * @param items
     * @private
     */

    private _setItems({ items }: any): void {
        this.items = items;
    }

    /**
    * Set ItemsFilter
    * @param itemsFilter
    * @private
    */

    private _setItemsFilter({ items }: any): void {
        let arr: IFilter[] = []
        items.map((item: IOrganisation) =>
            arr.push(
                {
                    key: item.id,
                    value: item.name,
                    icon: item.organisationPhoto,
                    serviceCount: item.serviceCount,
                })

        )
        this.itemsFilter = [...arr]
    }

}
