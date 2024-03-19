"use client"

import { FC, MouseEvent } from "react"

// Import the Link component to render links when needed
import AppLink from "@/components/link"

export interface ButtonProps {
  type?: "button" | "submit" | "reset"
  className?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  to?: string
  openAsTab?: boolean
  isDisabled?: boolean
  children: any
  others?: any
}

const Button: FC<ButtonProps> = ({ type = "button", className, onClick, to, openAsTab, isDisabled, children, ...others }) => {
  return to ? (
    // Render a link as a button element using the Link component
    <AppLink role="button" {...{ to, className, openAsTab }} {...others}>{children}</AppLink>
  ) : (
    // Render a button element if no URL is passed to the button component
    <button {...{ type, onClick }} className={className ? className : undefined} disabled={isDisabled ? isDisabled : undefined} {...others}>{children}</button>
  )
}

export default Button