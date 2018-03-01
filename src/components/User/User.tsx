import * as React from "react";

import { userConatainerStyle, imgStyle, nameStyle } from './User.css';


interface User {
  userAvatarUrl: number;
  userName: number;
}

export const User = (props: User) => {


  return(
    <div className={userConatainerStyle}>
      <img src={props.userAvatarUrl} className={imgStyle} />
      <div className={nameStyle}>{props.userName}</div>
    </div>
  );

}
