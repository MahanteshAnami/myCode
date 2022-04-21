import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

/** This component for Individual Plugin Card, which is used in other components **/
class DisplayCard extends Component {

    isCardDisabled = (name, isAllPlugin) => {
        if(isAllPlugin) {
            return true;
        } else if(name === "disabled" || name === "inactive" ) {
            return true;
        }
        return false;
    }

/** This is function for manipulating the data and getting exact pluginCard **/
    renderCard = (tabPlugins, status, name) => {
    let {plugins, isAllPlugin} = this.props;
    let requiredPlugins = plugins.filter((plugin) => {
        const pluginTitle = plugin.title.toLowerCase();
        const pluginCompare = pluginTitle.split(" ").join("");
        return tabPlugins.find((tab) => {
            return pluginCompare === tab;
        });
    });
    return (
        <div className="p-2">
        <h5 className="heading">{name.toUpperCase()}</h5>
            {requiredPlugins && requiredPlugins.map((plugin) => (
                <Card key={plugin.title} className={isAllPlugin || name === "disabled" ? "disabledDiv" : "card"} >
                    <Card.Body>
                        <Card.Title id="noteTitle">{plugin.title}
                        </Card.Title>
                        <Card.Text>{plugin.description}
                        </Card.Text>

                        <BootstrapSwitchButton checked={status} onstyle={name === "inactive"? "danger" : "success"}
                            disabled={this.isCardDisabled(name,isAllPlugin)}
                            offstyle={name === "inactive"? "outline-danger": ''}
                            offlabel="Blocked" onlabel="Allowed" width={100} />
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
    }

    render() {
    const {tabData, explorerName} = this.props;

    const activePlugins = tabData.active;
    const disabledPlugins = tabData.disabled;
    const inactivePlugins = tabData.inactive;

        return (
            <>
                <h2>{explorerName + " "+ "Plugins"}</h2>
                <div className="d-flex flex-row">
                    {activePlugins && this.renderCard(activePlugins, true, "active")}
                    {disabledPlugins && this.renderCard(disabledPlugins, true, "disabled")}
                    {inactivePlugins && this.renderCard(inactivePlugins, false, "inactive")}
                </div>
            </>


        )
    }
}


export default DisplayCard