import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const CardPage = React.lazy(() => import('pages/CardPage'));
const ChartPage = React.lazy(() => import('pages/ChartPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));
const CreateTimetable = React.lazy(() => import('pages/Timetable/createtimetable'));
const CreateStation = React.lazy(() => import('pages/Station/createstation'));
const CreateRoute = React.lazy(() => import('pages/Route/createroute'));
const CreateBus = React.lazy(() => import('pages/Bus/createbus'));
const CreateDriver = React.lazy(() => import('pages/Driver/createdriver'));
const ViewTimetable = React.lazy(() => import('pages/Timetable/viewtimetable'));
const ViewStation = React.lazy(() => import('pages/Station/viewstation'));
const ViewRoute = React.lazy(() => import('pages/Route/viewroute'));
const ViewBus = React.lazy(() => import('pages/Bus/viewbus'));
const ViewDriver = React.lazy(() => import('pages/Driver/viewdriver'));



const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/widgets" component={WidgetPage} />
                <Route exact path="/charts" component={ChartPage} />
                <Route exact path="/createtimetable" component={CreateTimetable} />
                <Route exact path="/createstation" component={CreateStation} />
                <Route exact path="/createbus" component={CreateBus} />
                <Route exact path="/createdriver" component={CreateDriver} />
                <Route exact path="/createroute" component={CreateRoute} />
                <Route exact path="/viewtimetable" component={ViewTimetable} />
                <Route exact path="/viewstation" component={ViewStation} />
                <Route exact path="/viewbus" component={ViewBus} />
                <Route exact path="/viewdriver" component={ViewDriver} />
                <Route exact path="/viewroute" component={ViewRoute} />


              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
