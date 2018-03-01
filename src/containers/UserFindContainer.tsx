import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserFind from '../components/UserFind/UserFind.tsx';
import * as UserActionCreators  from '../actions/users';




const mapStateToProps = (state) => {
  return {
      users: state.users,
  }

};

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(UserActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFind);
