import React from 'react'
import SideMenu from '../components/SideMenu'

export default function Regular() {
  return (
    <div className="col-md-12">
      <div className="row mr-0">
        <SideMenu />
        <div className="col-md-10 main-container fixed-container">
          <div className="omni-content-wrapper">
            Regular
          </div>
        </div>
      </div>
    </div>
  )
}
