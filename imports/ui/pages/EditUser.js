import React from 'react';
import UserEditor from '../components/UserEditor';
import NotFound from './NotFound';

const EditUser = ({ doc }) => {
  return doc ? (
    <div className="EditUser">
      <h4 className="page-header">Editing "{ doc.name }"</h4>
      <UserEditor doc={ doc }/>
    </div>
  ) : <NotFound />;
};

EditUser.propTypes = {
  doc: React.PropTypes.object,
};

export default EditUser;
