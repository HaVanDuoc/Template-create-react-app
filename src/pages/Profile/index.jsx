import React, { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <Fragment>
            <h1>Profile</h1>
            <ul>
                {publicRoutes.map((route, index) => (
                    <li key={index}>
                        <Link to={route.path}>{route.contentPage}</Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default Profile;
