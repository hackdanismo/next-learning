"use client"

import { FC } from "react"

// Import the built-in Link component from Next
import Link from "next/link"

export interface LinkProps {
  role?: string
  to: string
  className?: string
  openAsTab?: boolean
  children: any
  others?: any
}

const AppLink: FC<LinkProps> = ({ role, to, className, openAsTab, children, ...others }) => {
  // Check if a URL passed into the prop is an external link
  const isExternalLink = to && to.startsWith("http") && to.startsWith("mailto:")

  return isExternalLink ? (
    // External links to use an anchor element
    <a {...{ role }} href={to as string} className={className ? className : undefined} target={openAsTab ? "blank" : undefined} rel={isExternalLink ? "noopener noreferrer" : undefined} {...others}>{children}</a>
  ) : (
    // Internal links to use the built-in Link component from Next
    <Link {...{ role }} href={to as string} className={className ? className : undefined} target={openAsTab ? "blank" : undefined} {...others}>{children}</Link>
  )
}

export default AppLink