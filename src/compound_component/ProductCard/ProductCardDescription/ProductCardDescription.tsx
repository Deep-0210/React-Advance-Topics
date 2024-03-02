import React, { useContext } from 'react'
import { CardContext } from '../../ProductCard/ProductCard';

function ProductCardDescription({ children }: { children: any }) {
    const selected : any = useContext(CardContext);
    console.log(selected, 'isSelected')
    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
}

export default ProductCardDescription