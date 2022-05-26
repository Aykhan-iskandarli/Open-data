import { ICategory, IFilter } from "../types/types";

export class CategoryModel {
    public items: ICategory[] = [];
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
        items.map((item: ICategory) =>
            arr.push(
                {
                    key: item.id,
                    value: item.category,
                    icon: item.categoryPhoto,
                    serviceCount: item.servicesCount,
                })

        )
        this.itemsFilter = [...arr]
    }

}
