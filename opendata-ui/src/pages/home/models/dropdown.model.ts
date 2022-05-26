import { IDropdown } from "../types/types";

export class DropdownModel {
    public list: IDropdown[] = [];

    constructor(item: any) {
        this._setItems(item);

    }

    /**
     * Set Items
     * @param items
     * @private
     */

    private _setItems(items: IDropdown[]): void {
        this.list = items;
    }

}
