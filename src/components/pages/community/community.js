import React from 'react';
import './community.css';
import tc from '../../../assets/img/tc.png';

function Community(){
    //function to open link in new tab//
    const handleClick = ()=>{
         window.open('https://chat.whatsapp.com/H1qQxZ2iv5y0x5XE4dOg0b','_blank');
    }
    return(
//container is divided into two parts,one part for the image and the other part for description//
        <div className='container'>
            <div className='start-wrapper'>
                <div className='start-image'>
                    <img src={tc} alt='' />
                </div>
                <div className='start-content'>
                    <h2 className='section_title'>Join Our Free Tech Community</h2>
                    <p>
                        Unlock the power of knowledge and innovation by joining our vibrant and free Whatsapp tech community
                    </p>
                    <button className='register_button' onClick={handleClick}>Join Now</button>
                </div>
            </div>

        </div>
    )
}
export default Community;