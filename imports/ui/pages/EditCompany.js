import React from 'react';
import CompanyEditor from '../components/CompanyEditor';
import NotFound from './NotFound';

const EditCompany = ({doc}) => {
  return doc ? (
          <div className="EditCompany">
            <h4 className="page-header">Editing "{ doc.name }"</h4>
            <CompanyEditor doc={ doc }/>
          </div>
      ) : <NotFound />;
};

EditCompany.propTypes = {
  doc: React.PropTypes.object,
};

export default EditCompany;
