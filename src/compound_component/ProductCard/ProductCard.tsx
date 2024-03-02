import React, { ReactNode, createContext, useState } from 'react'
import ProductCardImage from './ProductCardImage/ProductCardImage'
import ProductCardDescription from './ProductCardDescription/ProductCardDescription'
import ProductCardTitle from './ProductCardTitle/ProductCardTitle';
import ProductCardCategory from './ProductCardCategory/ProductCardCategory';
import ProductCardPrice from './ProductCardPrice/ProductCardPrice';

export const CardContext = createContext<any>(false)

function ProductCard({ children }: { children: ReactNode }) {
    const [selected, setSelected] = useState<boolean>(false)

    return (
        <div>
            <CardContext.Provider value={selected}>
                {children}
            </CardContext.Provider>
        </div>
    )
}

export default ProductCard

ProductCard.Description = ProductCardDescription;
ProductCard.Image = ProductCardImage;
ProductCard.Title = ProductCardTitle;
ProductCard.Category = ProductCardCategory;
ProductCard.Price = ProductCardPrice;
