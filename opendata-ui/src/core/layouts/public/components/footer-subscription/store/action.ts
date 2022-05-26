import { container } from "tsyringe";
import { SubscribersService } from "../services/subscribers.services";
import { ISubscribers } from "../types/subscribers";
import { ContactActionTypes } from "pages/contact/store/action-types";

const service = container.resolve(SubscribersService);

export const Subscribers = (data: ISubscribers) => (dispatch: any) => {
  service
    .Subscribers(data)
    .then((res: any) => {
      dispatch(subscribersSuccess(res.status));
    })
    .catch((err) => {
      dispatch(subscribersFail(err));
    });
};

export const subscribersSuccess = (data: any) => ({
  type: ContactActionTypes.CONTACT_SUCCESS,
  payload: data,
});
export const subscribersFail = (err: any) => ({
  type: ContactActionTypes.CONTACT_FAIL,
  payload: err,
});
