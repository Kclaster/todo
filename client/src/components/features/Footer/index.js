import React from 'react';
import coolpic from '../../../pictures/githubIcon';
import './style.css';

class Footer extends React.Component {
    render(){
        return(
            <div class="footer">
            <img class='githubIcon' src={coolpic} alt='icon' />
            < h3> Copyright 2019 The Dream Team </h3>
            </div>
            
        )
    }
}

export default Footer;