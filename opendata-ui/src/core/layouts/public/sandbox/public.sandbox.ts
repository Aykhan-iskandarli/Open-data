import 'reflect-metadata';
import {injectable} from 'tsyringe';
import {toggleLeftMenu} from "../store/actions";
import store from "../../../../store/store.worker";
@injectable()
export class PublicSandbox {
    private store = store;

    toggleLeftMenu(isActive:boolean): void {
        this.store.dispatch(toggleLeftMenu(isActive))
    }
}
