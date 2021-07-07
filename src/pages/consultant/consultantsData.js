import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
margin:50px;`;

const ConsultantsData = () =>{
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          role: 'Product Specialist',
          costCenter: 'CC 1503',
          projectNumber: 'PJ_DAM',
          email: 'abc@xyz.com',
          phoneNumber: '9999772311',
          startDate: '12-02-20',
          endDate: '11-02-21',
          ikeaResp: 'Jonatan Soderdinf',
          supplier: 'Accenture',
          supplierTags: ['working'],
        },
        {
          key: '2',
          name: 'Drake',
          role: 'Product Specialist',
          costCenter: 'CC 1503',
          projectNumber: 'PJ_DAM',
          email: 'abc@xyz.com',
          phoneNumber: '9999772300',
          startDate: '12-02-20',
          endDate: '11-02-21',
          ikeaResp: 'Jonatan Soderdinf',
          supplier: 'Accenture',
          supplierTags: ['working'],
        },
        
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
        },
        {
          title: 'Cost Center',
          dataIndex: 'costCenter',
          key: 'costCenter',
        },
        {
          title: 'Project Number',
          dataIndex: 'projectNumber',
          key: 'projectNumber',
        },
        {
          title: 'Email Address',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone Number',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
        },
        {
          title: 'Start Date',
          dataIndex: 'startDate',
          key: 'startDate',
        },
        {
          title: 'End Date',
          dataIndex: 'endDate',
          key: 'endDate',
        },
        {
          title: 'IKEA Resp.',
          dataIndex: 'ikeaResp',
          key: 'ikeaResp',
        },
        {
          title: 'Supplier',
          dataIndex: 'supplier',
          key: 'supplier',
        },
        

      ];
      return(
      <Wrapper>
      <Table dataSource={dataSource} columns={columns} bordered >
       
    </Table>
      </Wrapper>
      );
}

export default ConsultantsData;