import React, { ReactNode } from 'react';

type SectionProps = {
	className?: string;
	children: ReactNode;
}

const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={`p-24 px-48 ${className}`}> {children} </section>
  )
}

export default Section