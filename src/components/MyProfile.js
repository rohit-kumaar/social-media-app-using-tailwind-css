import React from "react";

export const MyProfile = () => {
  return (
    <>
      <div className="my-profile">
        <form className="my-profile__form">
          <div>
            <label htmlFor="">Name of Centre : </label>
            
          </div>
          Centre Type : (Checkbox) 1- Diagnostic Centre 2- Hospitals 3- All in
          one Facility Year Established : Authorized Person Name: Registered
          Mobile Number: Additional Mobile Number: Registered Email Address:
          Official Website: Address : Address Line 1 Address Line 2 City,
          State/Province, Pin Code, Landmark, Pin Code Locate on Google Map
          Multiple Branches : Yes/No (If Yes ) Address Locate on Google Map
        </form>
      </div>
    </>
  );
};
