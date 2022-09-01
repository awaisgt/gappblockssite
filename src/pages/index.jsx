/* eslint-disable @next/next/no-img-element */
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Stats } from "@/components/Stats";
import { Newsletter } from '@/components/Newsletter'
import { AppScreen } from '@/components/AppScreen'
import { motion } from 'framer-motion'
import { useId } from 'react'
import storefront from "@/images/screens/home-storefront.png"
import notification from "@/images/screens/home-push-notifications.png"
import liveTracking from "@/images/screens/home-live-tracking.png"

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

const MotionAppScreenBody = motion(AppScreen.Body)


const PrimaryFeaturesContent = {
  Heading:"Build Apps In Minutes, Not Months!",
  innerContent:"Designed to be powerful, yet simple, GAPP Blocks give organizations the ability to create mobile applications that are native to the phone they\'re designed for."
}

const primaryFeatures = [
  {
    name: 'Storefront',
    description:
      'Create stunning e-Commerce apps without a single line of code — giving you full control of your app and its look, feel and functionality.',
    icon: function DeviceTouchIcon(props) {
      let id = useId()
    
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
          <defs>
            <linearGradient
              id={`${id}-gradient`}
              x1={14}
              y1={14.5}
              x2={7}
              y2={17}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#737373" />
              <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
            fill="#A3A3A3"
          />
          <path
            d="M7 22c0-4.694 3.5-8 8-8"
            stroke={`url(#${id}-gradient)`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
            fill="#A3A3A3"
          />
        </svg>
      )
    },
    screen: function InvestScreen({ custom, animated = false }) {
      return (
        <AppScreen className="w-full">
          <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
            <img src={storefront.src} alt="Storefront" />
          </MotionAppScreenBody>
        </AppScreen>
      )
    },
  },
  {
    name: 'Live Tracking',
    description: 
      "Give your customers an Uber-like experience by using GAPP Finder to track their delivery in real-time.",
    icon: function DeviceUserIcon(props) {
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
          <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
            fill="#737373"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
            fill="#A3A3A3"
          />
        </svg>
      )
    },
    screen: function InviteScreen({ custom, animated = false }) {
      return (
        <AppScreen className="w-full">
          <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
            <img src={liveTracking.src} alt="Live Tracking" />
          </MotionAppScreenBody>
        </AppScreen>
      )
    },
  },
  {
    name: 'Push Notifications',
    description:
      'Communicate with your customers in real-time instant notifications, your clients will never be unaware of the status of their order.',
    icon: function DeviceNotificationIcon(props) {
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
          <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
            fill="#A3A3A3"
          />
          <path
            d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
            fill="#737373"
          />
        </svg>
      )
    },
    screen: function StocksScreen({ custom, animated = false }) {
      return (
        <AppScreen className="w-full">
          <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
            <img src={notification.src} alt="notification" />
          </MotionAppScreenBody>
        </AppScreen>
      )
    },
  }
]


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <Stats />
        <PrimaryFeatures content={PrimaryFeaturesContent} features={primaryFeatures}/>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
