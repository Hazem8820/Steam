import React from 'react'
import loading from '../../images/deck-startup.gif'
export default function Loading() {
    return <>
        <div className='bg-black text-center position-relative top-0 bottom-0 end-0 start-0'>
            <img src={loading} className='w-50 p-5' alt="loading logo" />
        </div>
    </>
}
