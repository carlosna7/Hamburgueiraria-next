import Section from "@/components/Section";
import Link from "next/link";

export default function Home() {
  return (
    <Section className="flex gap-4">
      <Link href="/">home</Link>
      <Link href="/store">store</Link>
      <Link href="/about">about</Link>
    </Section>
  )
}