import React from 'react';
import './TopNav.scss';
import {ReactComponent as SearchIcon } from "../svg/search.svg";
interface Props {
}
const TopNav: React.FC<Props> = (props) => {
    return (
        <div className="top-nav">
            <SearchIcon className="left-nav-icon" />
            <div className="right-nav-icon"></div>
        </div>
    )
}
export default TopNav;