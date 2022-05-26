import './header-right.component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { container } from 'tsyringe';
import { DbService, langType } from '../../../../../assets/db/db.service';
import DropdownComponent from '../../../../../packages/RDropDown/dropdown.component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import store from '../../../../../store/store.worker';
import { localizationToggle } from '../../store/actions';
import { locale } from 'assets/db/db.config';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from 'store/types/store.types';
import { getDropdownLanguages } from 'pages/home/store/actions';
import { GetLang } from 'core/helpers/common-functions/common-functions';


const HeaderRightComponent = () => {
    const locale$: any = locale;
   
    const [headerItems, setHeaderItems] = useState({
        about: '',
        info: '',
        contact: '',
    })
    const dispatch = useDispatch()
    const [locVal, setLocVal] = useState(GetLang() ? GetLang() : 'az')
    const langs = useSelector((state: RootState) => state.home.dropdown_languages)

    const clickHandler = (itemVal: langType) => {
        dispatch(localizationToggle(itemVal));
        setLocVal(itemVal)
        localStorage.setItem("opd_lang", itemVal)
    }
    
    useEffect(() => {
        dispatch(getDropdownLanguages())
    }, [dispatch])
    
    useEffect(() => {
        const localizationService = container.resolve(DbService);
        localizationService.setNewLang(locVal);
        locale$.subscribe((res: any) => {
            if (res && res.header) {
                setHeaderItems(res.header)
            }
        })
    }, [locVal, locale$])


    return (
        <div className='header-right'>
            <ul className='header-right__items'>
                <li className='mx-16'>
                    <Link to={'/app/about'} >  {headerItems.about}</Link>
                </li>
                <li className='mx-16'>
                    <Link to={'/app/information'}> {headerItems.info}</Link>
                </li>
                <li className='mx-16' >
                <a href="/app/faq"> FAQ</a>
                </li>
                <li className='mx-16'>
                    <Link to={'/app/contact'}> {headerItems.contact}</Link>
                </li>
                <li className='ml-16'>
                    <DropdownComponent text={langs} itemClick={clickHandler} >
                        {locVal}
                        <FontAwesomeIcon icon={'chevron-down'} className="ml-6" size="xs" />
                    </DropdownComponent>
                </li>
            </ul>
        </div>
    );
}

export default HeaderRightComponent;
