import React from 'react';
import { logout } from '../../utils/routes';

const Logout = () => {
    React.useEffect(() => {
        logout();
        window.location.pathname = "/";
    }, [])

    return  (
        <></>
    )
}

export default Logout;