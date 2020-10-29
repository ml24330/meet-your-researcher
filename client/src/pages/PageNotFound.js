import React, { useEffect } from 'react';

export default function PageNotFound() {

    useEffect(() => {
        setTimeout(() => {
            window.location.replace(`http://${window.location.href.split('//')[1].split('/')[0]}`);
        }, 3000);
    }, []);

    return (
        <div>
            <div className="page-title">404 Page Not Found</div>
            <div className="page--content">
                <div className="page--subtitle"><p>The page you are trying to visit does not exist! Redirecting back to the About Page..</p></div>
            </div>
        </div>
    )
}
