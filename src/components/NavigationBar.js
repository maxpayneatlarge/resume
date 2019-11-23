import React from 'react';
import Button from './Button';
import './NavigationBar.scss';

export default function NavigationBar({nextButtonText, backButtonText, nextButtonHref, backButtonHref}) {
    return(
        <div className='nav'>
                {backButtonText && <Button buttonText={backButtonText} href={backButtonHref} className='btn-back' />}
                {nextButtonText && <Button buttonText={nextButtonText} href={nextButtonHref} className='btn-forward' />}
        </div>
    );
};