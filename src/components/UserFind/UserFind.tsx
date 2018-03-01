import * as React from "react";
// import queryString from 'query-string';

import { User } from '../User/User';


/**
* High order components.
*/
import Menu from '../Menu/Menu';

/**
* Styles.
*/
import { searchButtonStyle, usersBlockStyle, userItemStyle } from './UserFind.css';




const searchButtonName = 'search';

interface UserActions {
  getUsers(searchUserName: number): void;
}

interface ConnectedDispatch {
  userActions: UserActions;
}

type props = ConnectedDispatch;

class UserFind extends React.Component<props,{}> {
  private searchName:string;
  constructor(props: props){
    super(props);

    this.searchUserOnClick = this.searchUserOnClick.bind(this);
  }

  searchUserOnClick(event){

    console.log('Typed', this.searchName.value);

    this.props.userActions.getUsers(this.searchName.value);
  }



  render(){
    return(
      <div>
        <Menu />

        <input type="text" ref={(input) => { this.searchName = input }} placeholder='Search user name' />
        <button className={searchButtonStyle} onClick={this.searchUserOnClick}>{searchButtonName}</button>
        <div className={usersBlockStyle}>
            {this.props.users[0] ? this.props.users[0].map((user, index, arr) => {
              return (
                        <div key={user.id.toString()} className={userItemStyle}>
                          <User
                            userAvatarUrl={user.avatarUrl}
                            userName={user.login}
                            key={user.id.toString()}
                          />
                        </div>
                    )
            }
            ) : null}

        </div>
      </div>
    );
  }

}


export default UserFind;
