import "../css/Sidebar.css";

import { useContext, useEffect, useState } from "react";

import { Data } from "../App";

export default function Sidebar({ selectedBoard, setSelectedBoard, isHidden, setHidden, newBoardDialogRef, setDarkMode, darkMode }) {
  const { data } = useContext(Data);

  return (
    <>
      <div className={darkMode ? "side-bar-dark" : "side-bar"}>
        {isHidden ? (
          <div className="hidden-button">
            <button className="show-sidebar" onClick={() => setHidden(false)}>
              <img src="./img/eye.svg" />
            </button>
          </div>
        ) : (
          <aside>
            <div className="sidebar-up">
              <div className="side-bar-menu">
                <h3>
                  All boards (<span>{data.length}</span>)
                </h3>
                {data.map((x, index) => (
                  <button
                    key={index}
                    className={`header-dropdown-items ${selectedBoard.id === x.id ? "active-board" : ""}`}
                    onClick={() => {
                      setSelectedBoard(x);
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill={selectedBoard.id === x.id ? "#fff" : "#828FA3"} xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.846133 0.846133C0.304363 1.3879 0 2.12271 0 2.88889V13.1111C0 13.8773 0.304363 14.6121 0.846133 15.1538C1.3879 15.6957 2.12271 16 2.88889 16H13.1111C13.8773 16 14.6121 15.6957 15.1538 15.1538C15.6957 14.6121 16 13.8773 16 13.1111V2.88889C16 2.12271 15.6957 1.3879 15.1538 0.846133C14.6121 0.304363 13.8773 0 13.1111 0H2.88889C2.12271 0 1.3879 0.304363 0.846133 0.846133ZM1.33333 13.1111V8.44448H9.77781V14.6667H2.88889C2.03022 14.6667 1.33333 13.9698 1.33333 13.1111ZM9.77781 7.11111V1.33333H2.88889C2.47633 1.33333 2.08067 1.49723 1.78895 1.78895C1.49723 2.08067 1.33333 2.47633 1.33333 2.88889V7.11111H9.77781ZM11.1111 5.77778H14.6667V10.2222H11.1111V5.77778ZM14.6667 11.5555H11.1111V14.6667H13.1111C13.5236 14.6667 13.9194 14.5028 14.2111 14.2111C14.5028 13.9194 14.6667 13.5236 14.6667 13.1111V11.5555ZM14.6667 2.88889V4.44445H11.1111V1.33333H13.1111C13.5236 1.33333 13.9194 1.49723 14.2111 1.78895C14.5028 2.08067 14.6667 2.47633 14.6667 2.88889Z" />
                    </svg>
                    {x.name}
                  </button>
                ))}
                <button className="header-createNew" onClick={() => newBoardDialogRef.current.showModal()}>
                  <img src="./img/dropdown-purple-logo.svg" alt="Dropdown Logo" /> + Create New Board
                </button>
              </div>
            </div>
            <div className="sidebar-down">
              <div className="side-bar-toggle">
                <div className="toggle-container">
                  <img src="./img/sun-logo.svg" alt="Sun" />
                  <label className="toggle">
                    <input type="checkbox" onClick={() => setDarkMode(!darkMode)} defaultChecked={darkMode} />
                    <span className="slider"></span>
                  </label>
                  <img src="./img/moon-logo.svg" alt="Moon" />
                </div>
              </div>
              <div className="side-bar-hidden-container" onClick={() => setHidden(true)}>
                <button className="side-bar-hidden">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="#828FA3" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.7923 8.76153C16.7538 10.5238 15.1854 11.941 13.3062 12.8081L14.8099 14.9563C14.9286 15.1259 14.8874 15.3598 14.7177 15.4785L14.0697 15.9322C13.9 16.051 13.6662 16.0097 13.5474 15.84L3.19013 1.04373C3.07135 0.874074 3.11263 0.64023 3.28229 0.521481L3.93032 0.067825C4.09998 -0.050956 4.33382 -0.00967486 4.45257 0.159981L6.18775 2.63888C7.08163 2.38573 8.02525 2.25001 9 2.25001C12.7456 2.25001 16.0311 4.24982 17.7923 7.23847C18.0692 7.7084 18.0692 8.2916 17.7923 8.76153ZM1.50001 8C2.99714 10.5406 5.79513 12.25 9 12.25C9.07946 12.2499 9.15892 12.2487 9.23834 12.2465L10.239 13.676C9.82784 13.7253 9.4141 13.75 9 13.75C5.25438 13.75 1.96889 11.7502 0.207702 8.76156C-0.069234 8.29163 -0.069234 7.7084 0.207702 7.23847C0.997544 5.89816 2.09379 4.75732 3.4001 3.90623L4.26076 5.13569C3.12813 5.86432 2.17986 6.84635 1.50001 8ZM8.52194 11.2231C6.00685 10.9415 4.26532 8.50791 4.86788 6.00303L8.52194 11.2231ZM9.74494 3.78104C12.6351 4.02282 15.1201 5.65835 16.5 8C15.5721 9.57456 14.1446 10.8297 12.4302 11.5566L11.596 10.3649C13.2731 9.06931 13.7072 6.7886 12.75 4.99869L12.75 5C12.75 5.9665 11.9665 6.75 11 6.75C10.0335 6.75 9.25 5.9665 9.25 5C9.25 4.52594 9.43881 4.09619 9.74494 3.78104Z" />
                  </svg>
                  <p>Hide Sidebar</p>
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
