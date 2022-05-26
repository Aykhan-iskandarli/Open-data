export class PublicModel {
    public id: number | null = null;
    public title: string | null = null;

    constructor(item: any) {
        this._setId(item);
        this._setTitle(item);

    }

    /**
     * Set Id
     * @param id
     * @private
     */

    private _setId({id}: any): void {
        this.id = id;
    }

    /**
     * Set title
     * @param contentLanguages
     * @private
     */

    private _setTitle({contentLanguages}: any): void {
        this.title = contentLanguages[0].title;
    }
}
