import React, { Suspense } from 'react';
import { flatRoutes } from '../js/routes_helper';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from '../routes';
import './style.scss';
import Slider from '../components/slider';
import { Layout } from 'antd';

const { Sider, Content } = Layout;
class App extends React.Component {
  render() {
    return (
      <Layout>
        <Sider>
          <Slider />
        </Sider>
        <Layout>
          <Content className="content">
            <Router>
              <Suspense fallback={<div className="loading">loading...</div>}>
                <Switch>
                  {flatRoutes(Routes).length &&
                    flatRoutes(Routes).map((item) => (
                      <Route path={item.path} exact component={item.component} key={item.path} />
                    ))}
                </Switch>
              </Suspense>
            </Router>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default App;
