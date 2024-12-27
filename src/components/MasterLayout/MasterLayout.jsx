import React, { useState } from 'react';
import "./MasterLayout.css";
import Sidebar from '../../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function MasterLayout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row con d-flex">
          <div className={`col-md-2  sidebar`} >
           <Sidebar/>
          </div>
          <div className="col-md-10  mainContent jsutify-content-center">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
