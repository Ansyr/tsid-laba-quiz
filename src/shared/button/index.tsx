import React from 'react';
import {cva} from "class-variance-authority";


type ButtonThemes = "contained" | "outlined"

type ButtonSizes = "medium" | "small"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    theme?: ButtonThemes
    size?: ButtonSizes
    className?: string
}

const classNames = cva(
    'w-full bg-black flex justify-center rounded-md border-[0.094rem] items-center text-[1rem] title-2',
    {
        variants: {
            size: {
                medium: 'max-w-[12.5rem] min-h-[3.2rem] py-[1rem] px-[1.3rem]',
                small: 'max-w-[10rem] min-h-[2.5rem] py-[0.375rem] px-[1.25rem]'
            },
            theme: {
                contained:
                    'text-white hover:border-gray-300 hover:bg-gray-300',
                outlined: 'border-black-100 hover:border-black'
            }
        }
    }
)

const Button = (props: ButtonProps) => {
    const {children,theme= "contained",size,className,...rest} = props
    return (
        <button
            className={classNames({size,theme,className})}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
