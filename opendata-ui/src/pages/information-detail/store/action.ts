import { loading } from "core/layouts/public/store/actions";
import { Dispatch } from "redux";
import { IActionCreator } from "store/types/store.types";
import { container } from "tsyringe";
import { DetailService } from "../services/detail.service";
import { IDetail } from "../types/types";
import { DetailTypes } from "./action-types";

const service = container.resolve(DetailService);

export const getDetailSuccess = (detail: IDetail[]) => ({
  type: DetailTypes.GET_DETAIL_SUCCESS,
  payload: detail,
});

export const getDetail = (id:any) => (dispatch: Dispatch<IActionCreator>) => {
  dispatch(loading(true));
  service
    .getDetail(id)
    .then((res) => {
      dispatch(getDetailSuccess(res));
    })
    .catch((err) => console.error(err))
    .then(() => dispatch(loading(false)));
};
