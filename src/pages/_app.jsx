import '@/styles/tailwind.css'
import 'focus-visible'
import Script from 'next/script'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import * as ga from '../google-analytics'
import {NEXT_PUBLIC_MEASUREMENT_ID} from "@/utils/constants";

export default function App({Component, pageProps}) {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_MEASUREMENT_ID}`}
                    strategy='afterInteractive'/>
            <Script id="google-analytics" strategy='afterInteractive'>
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${NEXT_PUBLIC_MEASUREMENT_ID}');
        `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}
