import React from 'react'
import './UserInfo.css'
export const UserInfo = () => {
  return (
    <div className="divUserInfo">
          <button id="btn-message" className="button-message">
            <div className="content-avatar">
              <div className="status-user"></div>
              <div className="avatar">
                <svg
                  className="user-img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"></path>
                </svg>
              </div>
            </div>
            <div className="notice-content">
              <div className="username">Muhammed</div>
              <div className="lable-message">User</div>
              <div className="user-id">@muhammed</div>
            </div>
          </button>
        </div>
  )
}
