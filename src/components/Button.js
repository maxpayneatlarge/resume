import React from 'react';
import { Link } from '@reach/router';
import './Button.scss';

export default function Button({buttonText, className, href}) {
        
    return (
        <Link to={href} className={className}>{buttonText}
        </Link>
    )
};