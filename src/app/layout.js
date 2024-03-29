import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head'





export const metadata = {
  title: 'Innovative Digital Solutions | Joyn Digital - Your IT Partner',
  description: 'Discover innovative digital solutions tailored to meet your business needs at Joyn Digital. Partner with us to transform your online presence and achieve your goals.',
  openGraph: {
    type: 'website',
    url: 'https://www.joyndigital.com/', // Add your website URL here
    title: 'Innovative Digital Solutions | Joyn Digital - Your IT Partner',
    description: "Transform your online presence with Joyn Digital's innovative solutions. Partner with us to achieve your business goals.",
    images: [
      {
        url: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1200,
        height: 630,
        alt: 'Joyn Digital Open Graph Image'
      }
    ],
    'theme-color': '#f2eeee',
    "color-scheme": 'white gray only',
  },
  twitter: {
    cardType: 'summary_large_image',
    'twitter-image': 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
};


export default function RootLayout({ children }) {

  return (
    <html lang="en" className='scroll-smooth'>
      <Head>

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body  >
        <Navbar />

        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
