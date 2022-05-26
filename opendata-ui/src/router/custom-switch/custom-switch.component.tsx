import LoadingComponent from 'packages/RLoading/loading.component';
import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { ICustomSwitchProps } from "./types/custom-switch";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


class CustomSwitchComponent extends Component<ICustomSwitchProps> {
    render() {
        return (
            // loading component should be added instead of null
            <Suspense fallback={
                <div className='container my-40'>
                    <LoadingComponent show={true} />
                    <Skeleton height={300} width={300} className="mb-16" borderRadius={2300} />
                    <Skeleton count={5} height={36} width="100%" className=" my-8 " />
                </div>
            }>

                <Switch>
                    {this.props.children}
                    {this.props.from && this.props.to ? (
                        <Route exact path={`/${this.props.from}`}>
                            <Redirect to={`/${this.props.from}/${this.props.to}`} />
                        </Route>
                    ) : null}
                    <Route path='*'>
                        <Redirect to='/error/not-found' />
                    </Route>
                </Switch>
            </Suspense>

        );
    }
}

export default CustomSwitchComponent;
