import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { WhyVeyQon } from '@/components/sections/WhyVeyQon'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatWeDo />
      <WhyVeyQon />
      <FinalCTA />
    </>
  )
}
