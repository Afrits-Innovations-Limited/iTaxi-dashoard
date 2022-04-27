import React from "react";

type AlertProps = {
    alertText: any;
}


export const SuccessAlert: React.FC<AlertProps> = ({ alertText }) => {
    return (
        <div className="alert alert-success alertProp">
            <button type="button" className="close" aria-hidden="true">×</button>{alertText}
        </div>
    )
}
export const ErrorAlert: React.FC<AlertProps> = ({ alertText }) => {
    return (
        <div className="alert alert-danger alertProp">
            <button type="button" className="close" aria-hidden="true">×</button>{alertText}
        </div>
    )
}
export const InfoAlert: React.FC<AlertProps> = ({ alertText }) => {
    return (
        <div className="alert alert-info alertProp">
            <button type="button" className="close" aria-hidden="true">×</button>{alertText}
        </div>
    )
}
export const WarningAlert: React.FC<AlertProps> = ({ alertText }) => {
    return (
        <div className="alert alert-warning alertProp">
            <button type="button" className="close" aria-hidden="true">×</button>{alertText}
        </div>
    )
}

