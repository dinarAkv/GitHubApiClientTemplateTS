import * as queryString from 'query-string';

import { ADD_USERS } from '../constants/actions';
import { rootUrl, searchUsers, requestRate } from '../constants/gitHubApi';


const LAST_REQUEST_URL = LAST_REQUEST_URL;
const REQUEST_FORBIDDEN = 403; // because github has request rate limit.


interface User {
  login: string;
  avatarUrl: string;
  id: string;
}



const receiveUsers = (data: Array<User>) => {

  return  {
      type: ADD_USERS,
      payload: data,
    }

};



const formUserList = (json) => {
  var userList = [];

  if (json.items) {
    json.items.map((item, i, arr) =>{
      userList.push({
        login:item.login,
        avatarUrl: item.avatar_url,
        id: item.id,
      })
    })

    return userList;
  }

  return [];
}



export const getUsers = (searchUserName) => {
  console.log('searchUserName', searchUserName)
  const fetchUrl = rootUrl + searchUsers +
                '?' + queryString.stringify({q: searchUserName,});

  return (dispatch, getState) => {

    if (searchUserName) {
      fetch(fetchUrl)
        .then((response) => {
            if (response.status === REQUEST_FORBIDDEN ) {
              alert('Too much requests. Try to make request later.');
            }
            else {
              return response.json();
            }

        }).then((json) => {
          const userList = formUserList(json);

          console.log('userList', userList);

          dispatch(receiveUsers(userList));
        })
    }


  }






};
