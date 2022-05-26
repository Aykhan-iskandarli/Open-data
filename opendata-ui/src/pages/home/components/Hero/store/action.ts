import { container } from "tsyringe";
import { SearchService } from "../services/search.services";
import { ServicesActionTypes } from "./action-types";


const service = container.resolve(SearchService);
export const Search = (data: any) => (dispatch: any) => {
  service
    .search(data)
    .then((res: any) => {
      dispatch(servicesSuccess(res));

    })
    .catch((err) => {
      dispatch(servicesFail(err));
    });
};

export const servicesSuccess = (data: any) => ({
  type: ServicesActionTypes.TAG_SUCCESS,
  payload: data,
});
export const servicesFail = (err: any) => ({
  type: ServicesActionTypes.TAG_FAIL,
  payload: err,
});