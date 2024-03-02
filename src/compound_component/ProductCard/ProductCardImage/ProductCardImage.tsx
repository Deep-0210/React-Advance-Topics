import React from 'react'

export default function ProductCardImage({ src, alt }: { src: any, alt: string }) {
    return (
        <>
            <div>
                <img src={src} alt={alt} className='w-[100px] h-[100px]'/>
            </div>
        </>
    )
}
