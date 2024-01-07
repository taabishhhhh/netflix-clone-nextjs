import { Divider, FAQSection, Heading, Hero, HomePageSection } from '@/components'
import DescriptionWithHeadingCard from '@/components/DescriptionWithHeadingCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Hero />

      {/* <div className='my-container'> */}
        <Divider />
        <HomePageSection children={<>
          <DescriptionWithHeadingCard headingLines={['Enjoy on your TV']} descriptionLines={['Watch on smart TVs, PlayStation, Xbox, Chromecast,', 'Apple TV, Blu-ray players and more.']} />
          <Image src='/section-1.png' alt='image' width={550} height={550} />
        </>} />
        <Divider />
        <HomePageSection children={<>
          <Image src='/section-2.jpg' alt='image' width={550} height={550} />
          <DescriptionWithHeadingCard headingLines={['Download your shows to', 'watch offline']} descriptionLines={['Save your favourites easily and always have', 'something to watch.']} />
        </>} />
        <Divider />
        <HomePageSection children={<>
          <DescriptionWithHeadingCard headingLines={['Watch everywhere']} descriptionLines={['Stream unlimited movies and TV shows on your', 'phone, tablet, laptop, and TV.']} />
          <Image src='/section-3.png' alt='image' width={550} height={550} />
        </>} />
        <Divider />
        <HomePageSection children={<>
          <Image src='/section-4.png' alt='image' width={550} height={550} />
          <DescriptionWithHeadingCard headingLines={['Create profiles for kids']} descriptionLines={['Send children on adventures with their favourite', 'characters in a space made just for them—free with', 'your membership.']} />
        </>} />
        <Divider />
        <FAQSection />
        <Divider />
      {/* </div> */}
    </main>
  )
}
