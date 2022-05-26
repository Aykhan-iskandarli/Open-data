import { IAbout } from "../types/types";

export class AboutModel {
    public item: IAbout = {};

    constructor(item: any) {
        this._setItems(item);

    }

    /**
     * Set Items
     * @param items
     * @private
     */

    private _setItems(about : any): void {
        this.item = about[0];
    }

}
