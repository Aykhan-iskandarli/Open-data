import { IFaq, IPaginate } from "../types/types";

export class FaqModel {
  public items: IFaq[] = [];
  public pagination: IPaginate | {} = {};

  constructor(item: any) {
    this._setItems(item);
    this._setPagination(item);
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
   * Set Items
   * @param pagination
   * @private
   */

  private _setPagination({
    pageIndex,
    totalPages,
    totalCount,
    hasPreviousPage,
    hasNextPage,
  }: any): void {
    this.pagination = {
      pageIndex,
      totalPages,
      totalCount,
      hasPreviousPage,
      hasNextPage,
    };
  }
}
