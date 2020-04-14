import React from 'react'
import './homepage.styles.scss';

export const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'> HAT</div>
                        <div className='subtitle'>Shop Now</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'> JACKETS</div>
                        <div className='subtitle'>Shop Now</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'> SNEAKERS</div>
                        <div className='subtitle'>Shop Now</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'> WOMENS</div>
                        <div className='subtitle'>Shop Now</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <div className='title'> MENS</div>
                        <div className='subtitle'>Shop Now</div>
                    </div>
                </div
				<div className='menu-item'>
                    <div className='content'>
                        <div className='title'> KIDS</div>
                        <div className='subtitle'>Shop Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}