import React from 'react'
import { Button } from 'react-bootstrap'
import auth from '../lib/auth';

export default function Logout() {

    function handleLogOut() {
        localStorage.clear();
        auth.logout(() => {
            window.location.assign('/')
          });
    }

    return (
        <Button id="log-out-button" onClick={() => handleLogOut()}>
            Log Out
        </Button>
    )
}
