import React from 'react';
import { Table } from 'antd';
import './style.css';

class UserTable extends React.Component {
  constructor(props) {
    super();
    
  }
  render() {
    const columns = [
      {
        title: 'First Name',
        dataIndex: 'firstname',
        key: 'firstname',
      },
      {
        title: 'Last Name',
        dataIndex: 'lastname',
        key: 'lastname',
        
      },
      {
        title: 'BirthDay',
        dataIndex: 'birthday',
        key: 'birthday',
     
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby',
      },
    ];
    return <div className="col-md-8 mx-auto form-table border tex-center">
    <h2 className="register-title">User Table</h2>
    <Table columns={columns} dataSource={this.props.data} />      
    </div>;
  }
}

export default UserTable;