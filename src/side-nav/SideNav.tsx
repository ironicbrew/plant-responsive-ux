import React from 'react';
import './SideNav.scss';
import {ReactComponent as ThreeDotIcon} from "../svg/three-dot-icon.svg";
import {ReactComponent as HomeIcon} from "../svg/home.svg";
import {ReactComponent as CurrentNavIcon} from "../svg/menu-mask.svg";
interface Props {
}
const SideNav: React.FC<Props> = (props) => {
    return (
        <div className="SideNav">
            <ThreeDotIcon className="logo" />
            <div className="nav nav-1">Green Plants</div>
            <div className="currentNavContainer">
            <CurrentNavIcon className="currentNavIcon" />
            </div>
            <div className="nav nav-2">Indoor Plants</div>
            <div className="nav nav-3">Shape Close</div>
            <HomeIcon className="home" />
        </div>
    )
}
export default SideNav;