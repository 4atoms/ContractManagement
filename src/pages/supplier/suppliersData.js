import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
margin:50px;`;

const SuppliersData = () =>{
    const dataSource = [
        {
          key: '1',
          supplier: 'Accenture',
          contactPersonNumber: '9999772311',
          phoneNumber: '9999772300',
          companyId: '625kr',
        },
        
      ];
      
      const columns = [
        {
          title: 'Supplier',
          dataIndex: 'supplier',
          key: 'supplier',
        },
        {
          title: 'Contact Person Number',
          dataIndex: 'contactPersonNumber',
          key: 'contactPersonNumber',
        },
        {
          title: 'Phone Number',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
        },
        {
          title: 'Company ID',
          dataIndex: 'companyId',
          key: 'companyId',
        },
        
        

      ];
      return(
      <Wrapper>
      <Table dataSource={dataSource} columns={columns} bordered title={()=>'SUPPLIERS'}>
       
    </Table>
      </Wrapper>
      );
}

export default SuppliersData;