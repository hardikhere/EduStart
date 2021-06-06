import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Registration from '../../../Registration/Registration';
import AddCredits from './AddCredits';
import ChangePass from './ChangePass';
import ChangeUserInfo from './ChangeUserInfo';
import SettingsMenu from './SettingsMenu';
import "./style.scss";

const Settings = () => {
    const [ViewState, setViewState] = useState("0");
    const handleViewChange = (event) => {
        setViewState(event.target.id);
    }
    const [currentComponent, setcurrentComponent] = useState(<ChangePass />);
    const schoolAdminDetails = useSelector(state => state.schoolAdminDetails)
    const getCurrentComponent = () => {
        switch (ViewState) {
            case "0": return <ChangePass />;
            case "1": return <ChangeUserInfo />;
            case "2": return <Registration withoutBase={true}
                sid={schoolAdminDetails.schoolDetails.schoolId}
                update={true} />
            case "3": return <AddCredits />
        }
    }
    useEffect(() => {
        setcurrentComponent(getCurrentComponent());
    }, [ViewState])

    return (
        <div className="settings container">
            <SettingsMenu handleViewChange={handleViewChange} ViewState={ViewState} />
            <div className="current">
                {currentComponent}
            </div>
        </div>
    )
}

export default Settings
