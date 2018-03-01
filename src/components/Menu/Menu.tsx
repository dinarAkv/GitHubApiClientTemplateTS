import * as React from "react";
import { Link } from 'react-router';


/**
* High order components.
*/
import { indexUrl, aboutUrl } from '../../constants/appUrls';

/**
* Styles.
*/
import { menuStyle, buttonStyle } from './Menu.css';



const aboutButtonName = 'About';
const findGitHubUser = 'Find user';


class Menu extends React.Component<{},{}> {
  constructor(props) {
    super(props);
  }





  render(){
    return(
      <div className={menuStyle}>
        <button className={buttonStyle}>
          <Link to={aboutUrl} style={{ textDecoration: 'none', color: 'black' }}>{aboutButtonName}</Link>
        </button>
        <button className={buttonStyle}>
            <Link to={indexUrl} style={{ textDecoration: 'none', color: 'black' }}>{findGitHubUser}</Link>
        </button>
      </div>
    );
  }

}

export default Menu;
