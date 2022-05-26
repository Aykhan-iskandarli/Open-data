import { combineReducers } from 'redux';
import { publicReducer } from '../core/layouts/public/store/reducers';
import { authReducer } from "../core/layouts/auth/store/reducers";
import { HomeReducer } from 'pages/home/store/reducer';
import { SearchReducer } from 'pages/home/components/Hero/store/reducers';
import { AboutReducer } from 'pages/about/store/reducers';
import { ServiceReducer } from 'pages/information/store/reducer';
import { DetailReducer } from 'pages/information-detail/store/reducer';
import { ContactReducer } from 'pages/contact/store/reducers';

export const rootReducer = combineReducers({
    publicState: publicReducer,
    auth: authReducer,
    home: HomeReducer,
    contactR:ContactReducer,
    search: SearchReducer,
    about: AboutReducer,
    services: ServiceReducer,
    detail:DetailReducer,
})


