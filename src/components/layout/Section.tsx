import React, { ReactNode } from 'react';

type SectionProps = {
	className?: string;
	children: ReactNode;
}

const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={`2xl:p-24 2xl:px-48 xl:p-20 xl:px-40 md:p-16 md:px-32 sm:p-8 sm:px-16 p-4 px-8  ${className}`}> {children} </section>
  )
}

export default Section