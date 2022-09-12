import {NEXT_PUBLIC_MEASUREMENT_ID} from "@/utils/constants";

export const pageview = (url) => {
    window.gtag('config', NEXT_PUBLIC_MEASUREMENT_ID, {
        path_url: url,
    })
}
