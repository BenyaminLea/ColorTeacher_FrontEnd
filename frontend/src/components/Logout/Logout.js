import React from 'react'
import { Button } from 'react-bootstrap'
import auth from '../lib/auth';

export default function Logout() {

    function handleLogOut() {
        localStorage.clear();
        auth.logout(() => {
            window.location.reload()
          });
    }

    const styles = {borderRadius: 50, width: 65, height: 45, fontSize: 10}

    return (
        <Button variant="danger" id="log-out-button" style={styles} onClick={() => handleLogOut()}>
            Log Out
        </Button>
    )
}
