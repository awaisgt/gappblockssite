import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Faqs } from "@/components/Faqs"
import { Testimonials } from "@/components/Testimonials"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Head from 'next/head'
import {ChatBot} from "@/components/ChatBot";
import {PopUpPrivacyPolicy} from "@/components/Cookie-Privacy-Popup";

const plans = [
  {
    name: 'Basic',
    featured: false,
    price: { Monthly: '$300', Yearly: '$255', Difference: "$45"},
    description:
      'Everything you need to set up your web shop, mobile shop and process payments.',
    button: {
      label: 'Subscribe',
      qHref: 'https://buy.stripe.com/7sI18081e1EWfZKaEM',
      aHref: 'https://buy.stripe.com/eVaeYQftG3N44h24gl',
    },
    features: [
      '500 orders',
      'Website',
      'Native Mobile App (iOS and Android)',
      '10 hours of Consultancy by GAPP CO',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'Growth',
    featured: false,
    price: { Monthly: '$500', Yearly: '$425', Difference: "$75"},
    description:
      'Take your company to the next level by using GAPP Finder to manage your delivery staff',
    button: {
      label: 'Subscribe',
      qHref: 'https://buy.stripe.com/14k7wogxK97obJu9AH',
      aHref: 'https://buy.stripe.com/cN203W4P20ASdRC28c',
    },
    features: [
      '1000 Orders',
      'Website',
      'Native Mobile App (iOS & Android)',
      '20 hours of Consultancy by GAPP CO',
      'GAPP Finder Basic'
    ],
    logomarkClassName: 'fill-gray-500',
  },
  {
    name: 'Scale',
    featured: true,
    price: { Monthly: '$1000', Yearly: '$850', Difference: "$150"},
    description:
      'Enjoy the benefits of GAPP Blocks & GAPP CO to the fullest, with the support of multiple branches',
    button: {
      label: 'Subscribe',
      qHref: 'https://buy.stripe.com/9AQbME3KYdnE8xicMS',
      aHref: 'https://buy.stripe.com/aEUg2U1CQdnE8xi8wz',
    },
    features: [
      '5000 Orders',
      'Website',
      'Multiple Branches',
      'Native Mobile App (iOS & Android)',
      '30 hours of Consultancy by GAPP CO',
      'GAPP Finder Plus',
    ],
    logomarkClassName: 'fill-cyan-500',
  },
]

const PivacyPopUp = {
  Heading: 'Privacy Policy',
  Content1: "By clicking Accept, you agree to our ",
  Content2: ". You can opt out at any time.",
  Links: [
    {
      label: "Terms",
      href: "terms-of-service"
    },
    {
      label: "Privacy Policy",
      href: "privacy-policy"
    }
  ],
  Button: [
    "Accept",
    "Decline"
  ]
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = false,
  activePeriod,
  logomarkClassName,
  openPrivacyPopUp,
  setSubscribeLink
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        <span>{name}</span>
      </h3>
      <p
        className={clsx(
          'relative flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {price.Monthly === price.Yearly ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Yearly (Save 15%)'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Yearly (Save 15%)' &&
                  'pointer-events-none translate-x-6 select-none opacity-0'
              )}
            >
              <span className={clsx('text-lg text-gray-500')}>&nbsp;</span><br/>
              {price.Monthly}<span className={clsx('text-xl text-gray-500')}> /mo</span>
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 select-none opacity-0'
              )}
            >
              <span className={clsx('text-lg text-gray-500 line-through')}>{price.Monthly}</span><br/>
              {price.Yearly}<span className={clsx('text-xl text-gray-500')}> /mo</span>
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-cyan-500'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={() => {
            setSubscribeLink(activePeriod === 'Monthly' ? button.qHref : button.aHref)
            openPrivacyPopUp(true)
        }}
        color={featured ? 'cyan' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export default function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Monthly')
  const [privacyPolicyPopUp, setPrivacyPolicyPopUp] = useState(false)
  const [subscribeLink, setSubscribeLink] = useState('')

  return (
    <>
      <Head>
      <title>Pricing | GAPP Blocks</title>
      <meta
          name="description"
          content="We have got all the tools to turn your e-commerce ideas into reality.GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
      />
      </Head>

      <section>
      <Header/>


        <Container>
          <div className="mx-auto max-w-2xl text-center mt-8">
            <h2
              id="pricing-title"
              className="text-3xl font-medium tracking-tight text-gray-900"
            >
              Simple prices that work for every business
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Whether you’re one person trying to get ahead or a big firm trying
              to take over the world, we’ve got a plan for you.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="relative">
              <RadioGroup
                value={activePeriod}
                onChange={setActivePeriod}
                className="grid grid-cols-2"
              >
                {['Monthly', 'Yearly (Save 15%)'].map((period) => (
                  <RadioGroup.Option
                    key={period}
                    value={period}
                    className={clsx(
                      'cursor-pointer text-center  border border-gray-300 py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                      period === 'Monthly'
                        ? 'rounded-l-lg'
                        : '-ml-px rounded-r-lg'
                    )}
                  >
                    {period}
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
              <div
                aria-hidden="true"
                className={clsx(
                  'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300',
                  activePeriod === 'Monthly'
                    ? '[clip-path:inset(0_50%_0_0)]'
                    : '[clip-path:inset(0_0_0_calc(50%-1px))]'
                )}
              >
                {['Monthly', 'Yearly (Save 15%)'].map((period) => (
                  <div
                    key={period}
                    className={clsx(
                      'py-2 text-center text-sm font-semibold text-white [&:not(:focus-visible)]:focus:outline-none',
                      period === 'Yearly (Save 15%)' && '-ml-px'
                    )}
                  >
                    {period}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3 mb-16">
            {plans.map((plan) => (
              <Plan key={plan.name} {...plan} activePeriod={activePeriod} openPrivacyPopUp={setPrivacyPolicyPopUp} setSubscribeLink={setSubscribeLink}/>
            ))}
          </div>
        </Container>

        <Testimonials
          text={"GAPP Blocks has all the capabilities needed to build reliable mobile and web apps. " +
              "The platform includes CMS, Product Management, Shipping, Payment Processing, " +
              "and Real-Time Delivery Driver Tracking modules"}
          by={"Marie Chilvers"}
          designation={"CEO, Mom's Cuisine"}
        />
        <Faqs></Faqs>
        <ChatBot />
        <Footer></Footer>
        <PopUpPrivacyPolicy data={PivacyPopUp} open={privacyPolicyPopUp} setOpen={setPrivacyPolicyPopUp} acceptButtonLink={subscribeLink}/>
      </section>
    </>
  )
}
