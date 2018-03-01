import * as React from "react";


import Menu from '../Menu/Menu.tsx';


const text = 'This application is template of gitHub client and uses React and Redux.';


export const About = props => {



  return(
    <div>
      <Menu />
      {text}
    </div>
  );

}
