import React, { useEffect, useState } from 'react';
import './home.component.scss';
import { locale } from '../../assets/db/db.config';
import HeroComponent from 'pages/home/components/Hero/hero.component';
import CategoriesComponent from 'pages/home/components/Categories/categories.component';
import OpenInfo from 'packages/ROpenInfo/openinfo.component';
import AccardionComponent from '../../packages/RAccardion/accardion.component';
import StatisticsComponents from './components/Statistics/Statistics.Component';
import LoadingComponent from 'packages/RLoading/loading.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'core/layouts/public/types/public';
import { getFaqs } from './store/actions';

const HomeComponent = () => {
    const loading = useSelector((state: RootState) => state.publicState.loading)
    const faqs = useSelector((state: RootState) => state.home.faqs);
    const dispatch = useDispatch();

  
    useEffect(() => {
      dispatch(getFaqs({ PageNumber: 1, PageSize: 3 }));
    }, [dispatch])
    // const locale$: any = locale;
    // const [title, setTitle] = useState('test')
    // useEffect(() => {
    //     locale$.subscribe((res: any) => {
    //         if (res && res.home) {
    //             setTitle(res.home.title)
    //         }
    //     })
    // }, [locale$])

    return (
        <div className='home'>
            <LoadingComponent show={loading} />
            <HeroComponent />
            <CategoriesComponent />
            <OpenInfo />
            <StatisticsComponents />
            <AccardionComponent more_acc={true} question={true} faqs={faqs}/>
        </div>
    );
}

export default HomeComponent;
