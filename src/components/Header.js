import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function Header() {
    const [showTB,setShowTB] = useState("none");

    async function ShowTB(){
        setShowTB("unset");
    }

    async function closeTB(){
        setShowTB("none");
    }

    return (
        <div>
            <Nav>
                <Options onClick={ShowTB}><img src="/images/menu.png" /></Options>
                <Logo to="/">
                    <img src = "/images/tiger-logo.png"/>
                </Logo>
                <NavMenu>
                    <LinkTag to="/">
                        <h3>Home</h3>
                    </LinkTag>
                    <LinkTag to="/latest">
                        <h3>Latest</h3>
                    </LinkTag>
                    <LinkTag to="/football">
                        <h3>Football</h3>
                    </LinkTag>
                    <LinkTag to="/basketball">
                        <h3>Basketball</h3>
                    </LinkTag>
                    <LinkTag to="/cricket">
                        <h3>Cricket</h3>
                    </LinkTag>
                    <LinkTag to="/formula1">
                        <h3>Formula 1</h3>
                    </LinkTag>
                </NavMenu>
            </Nav>
            <Tolbar>
                <Container class="toolbar" style={{display: `${showTB}`}}>
                    <TBLogo to="/">
                        <img src = "/images/tiger-logo.png"/>
                    </TBLogo>
                    <div>
                        <ul>
                            <li>
                                <TBLinkTag to="/">
                                    <h3>Home</h3>
                                </TBLinkTag>
                            </li>
                            <li>
                                <TBLinkTag to="/latest">
                                    <h3>Latest</h3>
                                </TBLinkTag>
                            </li>
                            <li>
                                <TBLinkTag to="/football">
                                    <h3>Football</h3>
                                </TBLinkTag>
                            </li>
                            <li>
                                <TBLinkTag to="/basketball">
                                    <h3>Basketball</h3>
                                </TBLinkTag>
                            </li>
                            <li>
                                <TBLinkTag to="/cricket">
                                    <h3>Cricket</h3>
                                </TBLinkTag>
                            </li>
                            <li>
                                <TBLinkTag to="/formula1">
                                    <h3>Formula 1</h3>
                                </TBLinkTag>
                            </li>
                        </ul>
                    </div>
                    <Closer onClick={closeTB}>
                        <img src = "/images/close.png"/>
                    </Closer>
                </Container>
            </Tolbar>
        </div>
    )
}

export default Header

const Closer = styled.button`
    margin-top: 20px;
    background: none!important;
    border: none;
    img{
        max-height: 40px;
        width: auto;
    &:hover{
        cursor: pointer;
    }
`

const Options = styled.button`
    background: none!important;
    border: none;
    display: none;
    img{
        max-height: 40px;
        width: auto;
    }
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 768px){
        display: unset;
    }
`

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    img{
        height: 65px;
        width: auto;
    }
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row norap;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    @media (max-width: 768px){
        display: none;
    }
`

const LinkTag = styled(Link)`
    padding: 0px 20px;
    text-decoration: none;
    color: white;
    display: block;
    h3{
        &:hover{
            cursor: pointer;
            border-bottom: 5px solid white;
            
        }
    } 
`

const Logo = styled(Link)`
    margin-right: 10px;
    @media (max-width: 768px){
        display: none;
    }
`

const Tolbar = styled.header`
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 2;
    display: flex;
    @media (min-width: 768px){
        display: none;
    }
`

const Container = styled.div`
    background: #090b13;
    padding-right: 200px;
    height: 100vh;
    ul{
        list-style-type: none;
    }
`

const TBLogo = styled(Link)`
    img{
        height: 65px;
        width: auto;
    }
`

const TBLinkTag = styled(Link)`
    text-decoration: none;
    color: white;
    display: flex;
    h3{
        &:hover{
            cursor: pointer;
            border-bottom: 5px solid white;
        }
    }
`