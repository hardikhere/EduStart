import React, { useState } from 'react'

const SettingsMenu = (props) => {
    return (
        <div className="settingmenu">
            <div className={`settingmenu-item ${props.ViewState === "0" && "settingmenu-item-active"}`}
                id="0" onClick={props.handleViewChange}>
                Change password
            </div>
            <div className={`settingmenu-item ${props.ViewState === "1" && "settingmenu-item-active"}`}
                id="1" onClick={props.handleViewChange}>
                Change User Details
            </div>
            <div className={`settingmenu-item ${props.ViewState === "2" && "settingmenu-item-active"}`}
                id="2" onClick={props.handleViewChange}>
                Change School Details
            </div>
            <div className={`settingmenu-item ${props.ViewState === "3" && "settingmenu-item-active"}`}
                id="3" onClick={props.handleViewChange}>
                Add Credits
            </div>
        </div>
    )
}

export default SettingsMenu
