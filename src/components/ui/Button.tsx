import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import cn from '../../utility/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}
  
export default function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return(
    <button
      className={cn(buttonVariants({variant, size, className}))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("rounded-xl", {
  variants: {
    variant: {
      // primary: "opacity-100 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
      secondary: "border-1 bg-grey-300 hover:bg-grey-700 text-black-300 font-semibold",
      primary: "text-white font-semibold bg-gradient-to-r 135deg from-prime-300 via-prime-200 via-23.95% via-prime-500 via-69.11% to-purple-500",
      basecolor: 'border-1 border-purple-500 hover:bg-white-700 text-purple-300 font-medium'
    },
    size: {
      sm: "text-sm px-1 py-0 rounded-md",
      md: "text-base px-6 py-2",
      lg: "text-xl px-6 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});