import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Marketing from './components/Marketing';
import Finance from './components/Finance';
import Personnel from './components/Personnel';

class App extends Component {

    constructor() {
        super();
        this.state = {
          apiData: '',
          isAllPluginDisabled: false,
        }
        this.getApiData = this.getApiData.bind(this);
    }

/** This is function is for calling the API and fetching the data **/
    getApiData() {
        let fetchPromise = fetch("http://localhost:5000/data");
        let p1 = fetchPromise
             .then((data)=>{
                 console.log(data);
                 if(data.status===200)
                 {
                     console.log('Response Received')
                     return data.json();
                 }
                 else{
                     console.log(`Error in Fetching`)
                     return Promise.reject('Failed to Fetch Api Data')
                 }
             })
             p1.then((response)=>{
                      this.setState({apiData: response})
                  })
              p1.catch((error)=>{
                  console.log(error);
              })
      }

/** This is React JS lifecycle method, calling an API on mount only **/
      componentDidMount() {
        this.getApiData();
      }

    render(){
        const {apiData, isAllPluginDisabled} = this.state;
        const tabDataValues = apiData.tabdata && Object.values(apiData.tabdata);
        const pluginValues = apiData.plugins && Object.values(apiData.plugins);
        const tabDataValuesImages = tabDataValues && tabDataValues.map((tab) => {
            return {...tab, icon: `images/${tab.icon}.png`};
        });
        return (
            <Router>
                <div className="App">
                    {apiData && apiData.tabs ?
                        <React.Fragment>
                            <div className="explorer">
                                <h1 className="header">Data<strong>Guard</strong></h1>
                                {tabDataValuesImages && tabDataValuesImages.map((tab) => (
                                    <div key={tab.title} className="names">
                                        <img src={tab.icon} height='30px' width='30px' />
                                        <Link className="link" to={'/' + tab.title}>{tab.title}</Link>
                                    </div>
                                ))
                                }
                                <div className="button-corner" >
                                    <div className="d-flex">All Plugins Disabled</div>
                                    <BootstrapSwitchButton checked={false} onstyle="danger"
                                        offstyle="outline-danger"
                                        width={50} onChange={(checked: boolean) => {
                                                           this.setState({ isAllPluginDisabled: checked })
                                                       }}
                                    />
                                </div>

                            </div>
                            <div className="plugins">
                                <Routes>
                                  <Route exact path="/Finance" element={<Finance tabData={tabDataValues[1]} plugins={pluginValues} isAllPlugin={isAllPluginDisabled} />}>
                                  </Route>
                                  <Route exact path="/Personnel" element={<Personnel tabData={tabDataValues[2]} plugins={pluginValues} isAllPlugin={isAllPluginDisabled} />}>
                                  </Route>
                                  <Route exact path="/Marketing" element={<Marketing tabData={tabDataValues[0]} plugins={pluginValues} isAllPlugin={isAllPluginDisabled} />}>
                                  </Route>
                                 </Routes>
                            </div>
                        </React.Fragment> : <h1>No Data Available</h1>
                    }
                </div>
            </Router>
          );
    }

}

export default App;
