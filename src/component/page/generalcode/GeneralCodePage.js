import React, { Component } from 'react';
import { Table, Pagination } from 'antd';

const mockData = [{
  group: 'Sex',
  code: 'F',
  description: 'Female',
  systemFlag: true,
  sequence: 1,
  status: 'A',
  createTime: new Date(),
  updateTime: new Date()
},{
  group: 'Sex',
  code: 'M',
  description: 'Male',
  systemFlag: true,
  sequence: 2,
  status: 'A',
  createTime: new Date(),
  updateTime: new Date()
}];

const columns = [{
  align: 'center',
  title: 'Group',
  dataIndex : 'group'
},{
  align: 'center',
  title: 'Code',
  dataIndex: 'code'
},{
  align: 'center',
  title: 'Description',
  dataIndex: 'description'
},{
  align: 'center',
  title: 'System Code',
  dataIndex: 'systemFlag',
  render: function(value, record, index){
    return (value !== undefined && value !== null && value !== false) ? 'True' : 'False';
  }
},{
  align: 'center',
  title: 'Sequence',
  dataIndex: 'sequence'
},{
  align: 'center',
  title: 'Status',
  dataIndex: 'status'
},{
  align: 'center',
  title: 'Create Time',
  dataIndex: 'createTime',
  render: function(value, record, index){
    return value;
  }
},{
  align: 'center',
  title: 'Update Time',
  dataIndex: 'updateTime',
  render: function(value, record, index){
    return value;
  }
}];

class GeneralCodePage extends Component{
  render(){
    return (
      <>
        <Table
          columns={columns}
          dataSource={mockData}
          pagination={false}
        />
        <Pagination
          align='end'
          pageSize={20}
          pageSizeOptions={[20, 50, 100]}
        />
      </>
    );
  }
};

export default GeneralCodePage;