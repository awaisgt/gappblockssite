import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Do I need to be a developer to use GAPP Blocks?',
      answer:
        'No, you don’t need to be a designer or developer to use GAPP Blocks. Add features and functionality to your store with blocks.',
    },
    {
      question: 'How does the live chat block work?',
      answer:
        'The live chat block makes it possible for you to integrate live chat into your website and mobile app, which in turn makes it possible for customers, store admins, and delivery drivers to communicate with one another.',
    },
    {
      question: 'What exactly is GAPP CO consultancy?',
      answer:
        'GAPP Consultants are the core of GAPP Universe. They are experts & geeks in the field of SDLC & ITIL with over 10 years of combined experience building applications for Fortune 500s. Our GAPP Consultants lead the architecture on our GAPP Blocks™ and continuously develop modulated blocks for our customers.',
    },
  ],
  [
    {
      question: 'Can I use my own domain with GAPP Blocks?',
      answer:
        'With GAPP Blocks, you may use your own domain name. If you already have a domain name, you can connect it to GAPP Blocks through admin panel.',
    },
    {
      question: 'What is GAPP Finder?',
      answer:
        'GAPP Finder is the delivery workforce manager block that leads to more effective deliveries. It makes it easy for you and your customers to track their deliveries in real-time and enables the delivery workforce to work efficiently and make deliveries on time.',
    },
    {
      question: 'How many branches am I allowed to add?',
      answer:
        'You have the possibility to add an endless number of branches if you go with our "Scale" package.',
    },
  ],
  [
    {
      question: 'How can I get my app available on the App Store and Play Store?',
      answer:
        'You may opt to publish your app yourself using the ".ipa" and ".aab" files, or a consultant from our consulting firm "GAPP Co" will publish it on Google Play Store and Apple App Store.',
    },
    {
      question: 'Which shipping blocks can be used with GAPP Blocks?',
      answer:
        'With one of our many blocks, you can easily integrate your default shipping methods such as GAPP Finder, Fed-Ex, UPS, Uber Eats, etc. or request a GAPP Consultant for custom integration.',
    },
    {
      question: 'In what countries can I use GAPP Blocks?',
      answer:
        'You are able to utilize GAPP Blocks in almost all of the countries across the world.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="contact"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
