import { Link } from 'react-router-dom'
import { ProSidebar, SidebarHeader, Menu, MenuItem, SidebarContent, SidebarFooter } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { useAuth } from '../../context/auth'
import jwt from 'jwt-decode'
import { IoClipboardOutline, IoConstructOutline, IoRibbonOutline,
    IoBookOutline, IoExtensionPuzzleOutline, IoLogOutOutline} from "react-icons/io5";
import 'react-pro-sidebar/dist/css/styles.css';
import './Navigation.css'
import React, {useEffect, useState} from "react";


const SideNavigationComponent = () => {

    const {authToken, setAuthToken} = useAuth()
   const decodedToken = jwt(authToken)
    const [collapsed, setCollapsed] = useState()
    const [logOut, setLogOut] = useState(false)


    useEffect(() => {

        if (logOut) {
            setLogOut(false)
            setAuthToken("");
        }
    }, [logOut, setAuthToken])

    return (
        <nav id="header">

            <ProSidebar collapsed={collapsed} collapsedWidth="0px">
                <SidebarHeader className="d-flex flex-column align-items-center">
                    <header className="logotext">
                        <p>Ucz się efektywniej</p>
                    </header>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<IoClipboardOutline size={30} />}>
                            Ranking 10 najlepszych
                            <Link to="/ranking" />
                        </MenuItem>

                        <MenuItem icon={<IoConstructOutline size={30} />}>
                            Moje konto | Edytuj
                            <Link to="/etc" />
                        </MenuItem>

                        <MenuItem icon={<IoRibbonOutline size={30} />}>
                            Moje postępy
                            <Link to="/pro" />
                        </MenuItem>
                        <MenuItem icon={<IoBookOutline size={30} />}>
                            Nauka
                            <Link to="/taskForId" />
                        </MenuItem>
                        <MenuItem icon={<IoExtensionPuzzleOutline size={30} />}>
                            Kategorie
                            <Link to="/etc" />
                        </MenuItem>
                    </Menu>

                    <Menu>
                        <div className="pic-logo">
                        <img className="pic" src="/slon.png" />
                        </div>
                    </Menu>
                </SidebarContent>
                <div>
                    <p>Cześć <strong>{decodedToken.username}</strong></p>
                </div>
                <SidebarFooter className="b-20">
                    <Menu iconShape="circle">
                        <MenuItem
                            onClick={() => setLogOut(true)} icon={<IoLogOutOutline size={20} />}>Wyloguj się</MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </nav>


    )

}

export default SideNavigationComponent