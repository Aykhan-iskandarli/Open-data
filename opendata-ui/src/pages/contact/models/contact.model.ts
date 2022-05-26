import { IGetContact } from "../types/contact";

export class ContactModel {
    public item: IGetContact = {};

    constructor(item: any) {
        this._setItems(item);

    }

    /**
     * Set Id
     * @param items
     * @private
     */

    private _setItems(contacts : any): void {
        this.item = contacts;
    }

}