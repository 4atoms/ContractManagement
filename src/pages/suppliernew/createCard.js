import React, { useState, useContext } from "react";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Input } from "antd";
import {
  CardRight,
  RightCardContent,
  SupplierName,
  Line1,
  CreateCardComp,
  PointOfContactsDiv,
  PointOfContactsInput,
} from "Components/common.style";
import { PointOfContacts } from "../../components/common.style";
const CreateCard = (props) => {
  const [name, setName] = useState("");
  const [companyId, setCompanyId] = useState("");
  return (
    <CardRight>
      <CreateCardComp displayCreateSupplier={props.displayCreateSupplier}>
        <RightCardContent>
          <SupplierName>
            Create Supplier
            {/* <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <EditIcon style={{ height: "18px" }} />
              <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
            </span> */}
          </SupplierName>
          <Line1 />
          <div>Name</div>
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <div>Company ID</div>
          <input
            placeholder="xxyyzz##"
            onChange={(e) => setCompanyId(e.target.value)}
          />
          <PointOfContacts>Point Of Contacts</PointOfContacts>
          <PointOfContactsDiv>
            
            <div>
            <PointOfContactsInput placeholder="Name"></PointOfContactsInput>
            <PointOfContactsInput placeholder="Email"></PointOfContactsInput>
            <PointOfContactsInput placeholder="Phone No"></PointOfContactsInput>
          </div>
          </PointOfContactsDiv> 
        </RightCardContent>
      </CreateCardComp>
    </CardRight>
  );
};

export default CreateCard;
