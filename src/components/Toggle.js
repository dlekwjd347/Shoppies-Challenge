import React from 'react';

function Toggle({ toggled, onClick }) {
    return (
        <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
            <div className="notch">

            </div>
        </div>
    )
}

export default Toggle;