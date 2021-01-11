import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

function Header() {
    return (
        <div className='header'>

            <div className="header__left"> 
                <img 
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                    alt=""
                />
                <div className='header__input'>
                    <SearchIcon/>
                    <input placeholder='Search Facebook' type='text' />
                </div>
            </div>
    

            <div className="header__middle"> 

                <div className='header__option'> 
                    <HomeIcon fontSize='large' />
                </div> 

                <div className='header__option'> 
                    <FlagIcon fontSize='large'/>
                </div> 

                <div className='header__option'> 
                    <SubscriptionsOutlinedIcon fontSize='large'/>
                </div> 

                <div className='header__option'> 
                    <StorefrontIcon fontSize='large'/>
                </div> 

                <div className='header__option'> 
                    <SupervisedUserCircleIcon fontSize='large'/>
                </div> 
            
            </div>

            <div className='header__right'>

                <div className='header__info'>
                    <Avatar />
                    <h4> Name </h4>
                </div>

                <IconButton>
                     <AddIcon/>
                </IconButton>

                <IconButton>
                     <ForumIcon/>
                </IconButton>

                <IconButton>
                     <NotificationsActiveIcon/>
                </IconButton>

                <IconButton>
                     <ExpandMoreIcon/>
                </IconButton>

            
            </div>

        </div>
    )
}

export default Header
