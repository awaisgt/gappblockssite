/* eslint-disable @next/next/no-img-element */

import HeroSection from "@/components/HeroSection"
import { useId } from 'react'
import { Header } from "@/components/Header"
import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { CallToAction } from "@/components/CallToAction"
import { Footer } from "@/components/Footer"
import { SecondaryFeaturesFinder }  from "@/components/SecondaryFeaturesFinder"
import screenshotContacts from '@/images/screens/finder-track-driver.png'
import screenshotInventory from '@/images/screens/finder-set-commission.png'
import screenshotProfitLoss from '@/images/screens/finder-manage-drivers.png'
import { motion } from 'framer-motion'
import { AppScreen } from '@/components/AppScreen'

import myEarnings from '@/images/screens/finder-my-earnings.png'
import manageOrders from '@/images/screens/finder-manage-orders.png'
import easyNavigation from '@/images/screens/finder-easy-navigation.png'

const HeroSectionHeadingContent = {
  Heading1: "GAPP Finder",
  Heading2: "Driving The Delivery Economy"
}
const HeroSectionInnerContent = {
  pContent:"Improve productivity, increase revenues, and provide a great client experience at scale by centralizing management of all your delivery activities on a single platform."
}
const PrimaryFeaturesContent = {
Heading:"What is GAPP Finder?",
innerContent:"GAPP Finder is real-time tracking and live map make clients feel involved in the buying process. GAPP Finder uses local data like modern ride-sharing apps, allowing users totrack drivers positions and communicate in real time."
}
const SecondaryFeaturesContent = {
Heading:"How it Helps You?",
innerContent:"The GAPP Finder Admin App allows store owners to track their delivery team in real-time, set prices per mile, per hour, or per delivery, and allows the delivery staff to track their income."
}
const secondaryFeatures = [
{
  name: 'Manage Drivers',
  summary: 'Add, Suspend or Remove Delivery Drivers.',
  description:
    'Create a new user account, suspend or remove an existing one. You have the ability to add, remove and suspend drivers from your network via our User Management tool ',
  image: screenshotProfitLoss,
  icon: function ReportingIcon() {
    let id = useId()
    return (
      <>
        <defs>
          <linearGradient
            id={id}
            x1="11.5"
            y1={18}
            x2={36}
            y2="15.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".194" stopColor="#fff" />
            <stop offset={1} stopColor="#6692F1" />
          </linearGradient>
        </defs>
        <path
          d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
          stroke={`url(#${id})`}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )
  },
},
{
  name: 'Set Commissions',
  summary:
    'Incentivize Drivers to Deliver the Best Service',
  description:
    'Establish a commission structure for your delivery driver based on either miles driven, hours worked, a flat rate per order, or all of these factors.',
  image: screenshotInventory,
  icon: function InventoryIcon() {
    return (
      <>
        <path
          opacity=".5"
          d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
          fill="#fff"
        />
        <path
          opacity=".3"
          d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
          fill="#fff"
        />
        <path
          d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
          fill="#fff"
        />
      </>
    )
  },
},
{
  name: 'Track Drivers',
  summary:
    'Manage any challenges they face during deliveries.',
  description:
    'GAPP Finder allows you to track your drivers in real time. You will be able to keep tabs on their location, speed and delivery time.',
  image: screenshotContacts,
  icon: function ContactsIcon() {
    return (
      <>
        <path
          opacity=".5"
          d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
          fill="#fff"
        />
        <path
          d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
          fill="#fff"
        />
      </>
    )
  },
},
]
const MotionAppScreenBody = motion(AppScreen.Body)

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
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

const primaryFeatures = [
  {
    name: 'Easy Navigation',
    description:
      'Deliver more quickly and efficiently thanks to navigation that is simple and dynamic in real-time. Increase delivery efficiency.',
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
            <img src={easyNavigation.src} alt="Finder - Easy Navigation" />
          </MotionAppScreenBody>
        </AppScreen>
      )
    },
  },
  {
    name: 'Track Earnings',
    description: 
      'Make it possible for your delivery crew to keep track of how much they earn every order, per mile driven, or per hour worked.',
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
            <img src={myEarnings.src} alt="Finder - Track Earnings" />
          </MotionAppScreenBody>
        </AppScreen>
      )
    },
  },
  {
    name: 'Manage Orders',
    description:
      'Your delivery drivers can view presently assigned orders and either accept or reject them, as well as view completed orders from the past. ',
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
            <img src={manageOrders.src} alt="Finder - Manage Orders" />
          </MotionAppScreenBody>
        </AppScreen>
      )
    },
  }
]

const CallToActionContent = {
  Heading:"Start Deploying Your Delivery Fleet",
  innerContent:"You may begin adding your delivery drivers as soon as you select any plan that includes GAPP Finder Basic or GAPP Finder Plus.",
  buttonText: "Get Started",
  buttonLink: "pricing",
}


export default function Register() {
    
    return (
      <>
      <Header/>
        <HeroSection secondaryHidden={false} headingContent={HeroSectionHeadingContent} innerContent={HeroSectionInnerContent}/>
        <PrimaryFeatures content={PrimaryFeaturesContent} features={primaryFeatures}/>
        <SecondaryFeaturesFinder content={SecondaryFeaturesContent} features={secondaryFeatures}/>
        <CallToAction content={CallToActionContent}/>
      <Footer/>
      </>
    )}