import React from 'react';

interface CardProps{
    title: string
    children: React.ReactNode
    className?: string
}

const Card = (props: CardProps) => {
    const {title,children,className} = props
    return (
            <div className={`rounded-lg bg-white px-4 py-6 shadow sm:p-6 ${className}`}>
                <h3 className={`text-lg font-medium leading-6 text-gray-900 `}>{title}</h3>
                <div className={"mt-2 text-sm text-gray-500"}>{children}</div>
            </div>
    );
};

export default Card;
