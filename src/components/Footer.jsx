/* eslint-disable @next/next/no-img-element */
/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import LinkedInIcon from '@/images/logos/linkedin.svg'
import InstagramIcon from '@/images/logos/instagram.svg'
import FacebookIcon from '@/images/logos/facebook.svg'
import YouTubeIcon from '@/images/logos/youtube.svg'

const navigation = {
  services: [
    { name: 'Storefront', href: 'storefront' },
    { name: 'GAPP Finder', href: 'finder' },
    { name: 'Shipping Methods', href: 'shipping' },
    { name: 'Payment Gateways', href: 'payment' },
  ],
  support: [
    { name: 'Pricing', href: 'pricing' },
    { name: 'FAQs', href: 'faqs' },
    { name: 'Contact Us', href: 'contact' },
  ],
  company: [
    { name: 'Blog', href: '#' },
    { name: 'Privacy Policy', href: 'privacy-policy' },
    { name: 'Terms of Service', href: 'terms-of-service' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/gappblocks',
      icon: (props) => (
        <img src={FacebookIcon.src} alt="Facebook" {...props} /> 
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/gappblocks/',
      icon: (props) => (
        <img src={InstagramIcon.src} alt="Instagram" {...props} /> 
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/gappblocks/',
      icon: (props) => (
        <img src={LinkedInIcon.src} alt="LinkedIn" {...props} />  
      ),
    },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/channel/UC-5v2irYvFj3D6oeJxpYTDQ',
      icon: (props) => (
        <img src={YouTubeIcon.src} alt="YouTube" {...props} />  
      ),
    },
  ],
}

export function Footer() {
  return (
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">Services</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.services.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.support.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0" />
              </div>
            </div>
            <div className="mt-8 xl:mt-0">
              <h3 className="text-base font-medium text-gray-900">Subscribe to our newsletter</h3>
              <p className="mt-4 text-base text-gray-500">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form
                action="https://gappblocks.us12.list-manage.com/subscribe/post?u=654a9ebf3c705bf7e43c6644f&amp;id=433cdb7345&amp;f_id=0046b7e0f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_self"
                className="validate mt-4 sm:flex sm:max-w-md"
              >
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL" className="sr-only">
                    Email address
                  </label>
                  <input
                      type="email"
                      defaultValue=""
                      name="EMAIL"
                      id="mce-EMAIL"
                      required
                      autoComplete="email"
                      className="required email appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-accent focus:border-accent focus:placeholder-gray-400"
                      placeholder="Enter your email"
                  />
                  <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: 'none' }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: 'none' }}
                  ></div>
                </div>
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                  <input
                    type="text"
                    name="b_654a9ebf3c705bf7e43c6644f_433cdb7345"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                
                
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      type="submit"
                      className="w-full bg-accent flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-accent focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
              ))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2022 GAPP Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}
