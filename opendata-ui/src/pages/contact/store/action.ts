
import { container } from "tsyringe";
import { ContactService } from "../services/contact.service";
import { IContact } from "../types/contact";
import { ContactActionTypes } from "./action-types";
import { toast } from "react-toastify";
import { IActionCreator } from "store/types/store.types";
import { Dispatch } from "react";

const service = container.resolve(ContactService);

export const ContactForms = (data: IContact) => (dispatch: any) => {
  //   try {
  service.Contact(data)
    .then((res: any) => {
      dispatch(contactSuccess(res.status));
      toast.success("Please provide input");
    })
    .catch((err) => {
      dispatch(contactFail(err));
      toast.error("Please provide input");
    });
};

export const getContact = () => (
  (dispatch: Dispatch<IActionCreator>) => {
    service.getContacts().then(res => {
      dispatch(getContactSuccess(res))
    }).catch(err => {
      dispatch(getContactFail(err))
    }

    )
  }
)
export const getContactSuccess = (data: any) => ({
  type: ContactActionTypes.GET_CONTACT_SUCCESS,
  payload: data,
});
export const getContactFail = (err: any) => ({
  type: ContactActionTypes.GET_CONTACT_FAIL,
  payload: err,
});

export const contactSuccess = (data: any) => ({
  type: ContactActionTypes.CONTACT_SUCCESS,
  payload: data,
});
export const contactFail = (err: any) => ({
  type: ContactActionTypes.CONTACT_FAIL,
  payload: err,
});