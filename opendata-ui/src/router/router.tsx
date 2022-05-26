import { Redirect, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import CustomSwitchComponent from './custom-switch/custom-switch.component';
import { getToken } from "../core/configs/auth.config";
import { useDispatch, useSelector } from "react-redux";
import { checkClaims } from "../core/helpers/common-functions/common-functions";
import FaqComponent from 'pages/Faq/faq.component';

const PublicLayout = lazy(() => import('../core/layouts/public/public-layout.component'))
const AuthComponent = lazy(() => import('../core/layouts/auth/auth.component'))
const HomeComponent = lazy(() => import('../pages/home/home.component'))
const ContactComponent = lazy(() => import('pages/contact/contact.component'))
const InformationDetailComponent = lazy(() => import('pages/information-detail/information-detail.component'))
const AboutComponent = lazy(() => import('pages/about/about.component'))
const LoginComponent = lazy(() => import('../pages/login/login.component'))
const RegisterComponent = lazy(() => import("../pages/register/register.component"))
const ErrorComponent = lazy(() => import('../core/layouts/error/error.component'))
const NotFound = lazy(() => import('../pages/not-found/notfound.component'))
const InformationComponent = lazy(() => import("pages/information/information.component"));


const layoutRouteList = [
  {
    component: PublicLayout,
    exact: false,
    path: "/app",
  },
  {
    component: AuthComponent,
    exact: false,
    path: "/auth",
  },
  {
    component: ErrorComponent,
    exact: false,
    path: "/error",
  },
];

const publicRoutes = [
  {
    component: HomeComponent,
    exact: true,
    path: '/app/home',
    name: 'Home',
    claims: []
  },
  {
    component: ContactComponent,
    exact: true,
    path: '/app/contact',
    name: 'Contact',
  },
  {
    component: InformationDetailComponent,
    exact: true,
    path: '/app/information/:id',
    name: 'InfoDetail'
  },
  {
    component: AboutComponent,
    exact: true,
    path: '/app/about',
    name: 'About',
    claims: []
  },
  {
    component: FaqComponent,
    exact: true,
    path: '/app/faq',
    name: 'Faq',
    claims: []
  },
  {
    component: InformationComponent,
    exact: true,
    path: "/app/information",
    name: "Information",
    claims: [],
  },

];

const authRoutesList = [
  {
    component: LoginComponent,
    exact: true,
    path: "/auth/login",
  },
  {
    component: RegisterComponent,
    exact: true,
    path: "/auth/register",
  },
  {
    component: RegisterComponent,
    exact: true,
    path: "/auth/register",
  },
];

const errorRouteList = [
  {
    component: NotFound,
    exact: true,
    path: "/error/not-found",
  },
];

export const LayoutRoutes = () => {
  // const token = getToken()
  // const dispatch = useDispatch()
  // useEffect(() => {
  // token && dispatch(user_data(token))
  // }, [dispatch, token])

  return (
    <>
      <CustomSwitchComponent key="LayoutRoutes">
        <Route exact path={"/"}>
          {/* {!token ?
                        <Redirect to='/auth' />
                        : <Redirect to={'/app'} />
                    } */}
          <Redirect to={"/app"} />
        </Route>
        {layoutRouteList.map((route) => (
          <Route
            {...route}
            component={() => <route.component />}
            key={route.path}
          ></Route>
        ))}
      </CustomSwitchComponent>
    </>
  );
};

export function PublicRoutes(props: any) {
  const userClaims = useSelector(({ auth }: any) => auth.user).Claims;
  const token = getToken();
  useEffect(() => { }, [userClaims]);
  return (
    <>
      <CustomSwitchComponent key="PublicRoutes" from={props.from} to={props.to}>
        {publicRoutes.map((route, index) => {
          const newRoute = (
            <Route
              key={route.name + route.path}
              {...route}
              component={(routeProps: any) => {
                const crumbs = publicRoutes
                  .filter((route: any) => {
                    return routeProps.match.path.includes(route.path);
                  })
                  .map(({ path, name, ...rest }) => {
                    let n;
                    const altName =
                      routeProps.location.state &&
                        routeProps.location.state.data &&
                        routeProps.location.state.data.name
                        ? (n = routeProps.location.state.data.name)
                        : (n = "");
                    name === "*" ? (n = altName) : (n = name);
                    return {
                      path: Object.keys(routeProps.match.params).length
                        ? Object.keys(routeProps.match.params).reduce(
                          (path, param) =>
                            path.replace(
                              `:${param}`,
                              routeProps.match.params[param]
                            ),
                          path
                        )
                        : path,
                      name: n,
                      ...rest,
                    };
                  });
                return (
                  <route.component {...route} {...routeProps} crumbs={crumbs} />
                );
              }}
            />
          );
          let hasClaims = true;
          route.claims?.forEach((cl) => {
            hasClaims = checkClaims(userClaims, cl) && hasClaims;
          });
          // return token ?
          // route.claims && route.claims?.length > 0 ?
          //     // route.claims?.map(cl => {
          //     //     return checkClaims(userClaims, cl) ?
          //     //         newRoute
          //     //         :
          //     //         null
          //     // })
          //     hasClaims ? newRoute : null
          //     :
          return newRoute;
          // : <Redirect to='/auth' />
        })}
      </CustomSwitchComponent>
    </>
  );
}

export const AuthRoutes = (props: any) => {
  const token = getToken();
  return (
    <>
      <CustomSwitchComponent key="AuthRoutes" from={props.from} to={props.to}>
        {authRoutesList.map((route) => (
          // !token ?
          //     <Route {...route}
          //            component={(props: any) => (
          //                <route.component {...props} />
          //            )}
          //            key={route.path}
          //     >
          //     </Route>
          //     :
          <Redirect to="/app" />
        ))}
      </CustomSwitchComponent>
    </>
  );
};

export const ErrorRoutes = (props: any) => {
  return (
    <>
      <CustomSwitchComponent key="ErrorRoutes" from={props.from} to={props.to}>
        {errorRouteList.map((route) => (
          <Route
            {...route}
            component={() => <route.component />}
            key={route.path}
          ></Route>
        ))}
      </CustomSwitchComponent>
    </>
  );
};
