
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import TextSection from "@/components/TextSection"
import Head from "next/head";
import {ChatBot} from "@/components/ChatBot";

const data = [
    {
        title: "1. Introduction",
        text: [
            "1.1 Your privacy is important to you and to us, so we'll protect the information you share with us. To protect your privacy, the Site follows different principles in accordance with worldwide practices for customer privacy and data protection.",
            "1.2 We at GAPP Blocks are committed to respecting your online privacy and recognize your need for appropriate protection and management of any personally identifiable information (“Personal Information”) you share with us. For purpose of this Policy, Personal Information means any information that may be used to identify an individual, including, but not limited to, a first and last name, a home or other physical address and an email address or other contact information, whether at work or at home. In general, you can visit the Site's web pages without telling us who you are or revealing any Personal Information about yourself. If, however, Personal Information is reveled to us, we won't sell or give away any content of your Personal Information to anyone and use state-of-the-art security measures to protect your information from unauthorized users.",
            "1.3 For customers in Europe - if and when we collect or use your personal information, we shall do so within the framework of General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679) and any related legislation, regulations, requirements or guidance from time to time for us to comply. For purpose of clarity, ‘Personal Data' shall have the meaning given to it in the General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679)."
        ],
    },
    {
        title: "2. Information we collect and how we use it",
        text: [
            "2.1 When you visit or use our service, we collect and store information about you, your computer or mobile device and your activities. This information may include, but is not limited to: ",
            "2.2.1 your computer's IP address; technical information about your computer or mobile device (such as type of device, web browser or operating system);",
            "2.2.2 your mobile device's unique ID number (when available), your mobile device's geographic location (specific geographic location if you've enabled collection of that information, or general geographic location automatically);",
            "2.2.3 your provided full name, email address, zip code and other information you may provide with your account, such as your gender and birth date;",
            "2.2.4 how long you visited our service, and which features you used;",
            "2.2.5 you agree to comply with all applicable privacy and data protection regulations. Further, you agree to not use our service to send us sensitive information where unauthorized disclosure could cause material, severe, or catastrophic harm or impact to GAPP Blocks, any data subjects or relying parties. Sensitive Information includes, passwords, authentication/authorization credentials, information under strict regulatory or contractual handling requirements (e.g., federal data security laws) such as, credit card information, credit card numbers, CIV numbers (three or four digit codes for Credti/Debit Cards) and magnetic stripe information, social security numbers, driver's license numbers, passport numbers, government issued identification numbers, financial account information, health data, biometric data, personally identifiable information knowingly collected from children under the age of 13 or from online services directed toward children, real time geolocation data which can identify an individual, business secrets deemed highly confidential (e.g., highly-confidential business strategies and communications, sensitive attorney-client privileged and confidential communications). We collect, store, and use your user data on our servers to provide you with the ability to better maintain and improve your services. We may also use data in an aggregated form for our own purposes. Our services transfer data to servers that store user data in the United States of America (“USA”) and outside USA.",
            "2.3 Additionally, we shall not be liable for any loss or damage sustained by reason of any disclosure (inadvertent or otherwise) of any information concerning the user's account and / or information relating to or regarding online transactions using credit cards / debit cards and / or their verification process and particulars nor for any error, omission or inaccuracy with respect to any information so disclosed and used whether or not in pursuance of a legal process or otherwise.",
            "2.4 We use the information to improve the Service's functionality, quality and also personalize your experience. We also use this information to display relevant advertising, provide support, message you, and comply with legal obligations.",
            "2.5 Please note that some of this information is automatically collected without you voluntarily choosing to provide this information to us.",
            "2.6 App's use of information received, and App's transfer of information to any other app, from Google APIs will adhere to Google's Limited Use Requirements. "
        ],
    },
    {
        title: "3. Notice",
        text: [
            "We will ask you when we need information that personally identifies you or allows us to contact you. Generally, this information is requested when you create a registration or login ID on the Site or when you connect or browse connected sites, linked or listed on our Website. We use your Personal Information for four primary purposes:",
            "a. to make the site easier for you to use by not having to enter information more than once;",
            "b. to help you quickly find services or information that you are looking for;",
            "c. to help us create content most relevant to you;",
            "d. to alert you to special offers, updated information and other new services available on our Site."
        ],
    },
    {
        title: "4. Third Party Services",
        text: [
            "Our services are designed to allow you to assign tasks to field workers, communicate with your field workers and customers (“Users”), and view information pertaining to your field workers' activity. GAPP Blocks does this in part using GPS and other sensors on devices running our software products and applications. Some information is automatically collected from or about your Users and field workers when you use our services and may include, for example, geographic coordinates, phone numbers, names, and addresses."
        ],
    },
    {
        title: "5. Consent",
        text: [
            "5.1 If you choose not to register or provide Personal Information, you can still use most of the Website. But you will not be able to access areas that require registration. If you decide to register, you will be able to select the kinds of information you want to receive from us by subscribing to various services, like our electronic newsletters. If you do not want us to communicate with you about other offers regarding the Site's programs, events, or Services by email, postal mail, or telephone, you may select the option stating that you do not wish to receive messages from us.",
            "5.2 By accessing our Site you agree to allow us to share data lawfully, with third parties who work on our behalf to provide your services, to comply with laws or to respond to lawful requests and legal process (provided that GAPP Blocks will endeavor to notify you if GAPP Blocks has received a lawful request for your information), to protect the rights and property of GAPP Blocks, our agents, customers, and others including to enforce our agreements, policies, and terms of use, in an emergency, including to protect the personal safety of any person; and for the purposes of a business deal (or negotiation of a business deal) involving sale or transfer of all or a part of our business or assets (business deals may include, for example, any merger, financing, acquisition, divestiture, or bankruptcy transaction or proceeding).",
            "5.3 Calls made through Mobile Network on a particular deal would be captured in the Call Logs of the CRM."
        ],
    },
    {
        title: "6. Access",
        text: [
            "We will provide you with the means to ensure that your Personal Information is correct and current. You may review and update this information at any time at the login section. There, you can: ",
            "a. view and edit personal information you have already given us; ",
            "b. tell us whether you want us to send you marketing information, or whether you want third parties to send you their offers by postal mail; ",
            "c. sign up for electronic newsletters about our services and products; and ",
            "d. Register. Once you register, you won't need to do it again. Wherever you go on the Site, your information stays with you. "
        ],
    },
    {
        title: "7. Security",
        text: [
            "7.1 The Site has taken strong measures to protect the security of your Personal Information and to ensure that your choices for its intended use are honored. We take strong precautions to protect your data from loss, misuse, unauthorized access or disclosure, alteration, or destruction.",
            "7.2 You also have a significant role in protecting your information. No one can see or edit your Personal Information without knowing your username and password, so do not share these with others.",
            "7.3 Data Security: In addition to the above, GAPP Blocks will maintain security procedures and practices to store in a secure fashion and protect all personally identifiable information regarding the end user (“PII”) that is collected by GAPP Blocks and stored in a database owned or controlled by GAPP Blocks (the “Database”), against accidental or unlawful destruction or loss, unauthorized disclosure or access. Such security procedures and practices shall be implemented in accordance with all applicable data protection laws and shall be appropriate to the nature of the information collected and shall be aligned with industry standard practices for the management, transport, and storage of PII."
        ],
    },
    {
        title: "9. Registration",
        text: [
            "9.1 When you login to the Site's secure pages, we may ask you to register yourself electronically. When you do, we merge your registration information with any information you've already left with us (we call that information your personal profile). If you haven't previously registered with us, we create a personal profile for you from your registration information. If you ever want to review or update that information, you can visit the Site, click on update profile, and edit any of the Personal Information in your profile."
        ],
    },
    {
        title: "11. What we do with the information you share",
        text: [
            "11.1 When you join us, you provide us with your contact information, including your name and email address. We use this information to send you updates about our services, questionnaires to measure your satisfaction with our service and announcements about new and exciting services that we offer.",
            "11.2 We will disclose your Personal Information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: (a) confirm to the edicts of the law or comply with legal process served on the Site; (b) protect and defend the rights or property of GAPP Blocks; and (c) act in urgent circumstances to protect the personal safety of users of GAPP Blocks or the public."
        ],
    },
    {
        title: "12. Information sharing and disclosure",
        text: [
            "12.1 We do not rent or sell Personal Information about you with other people (save with your consent) or non-affiliated companies, except to provide services you’ve requested, under the following circumstances:",
            "a. We respond to court orders, legal proceedings or to establish or exercise our legal rights or defend against legal claims.",
            "b. We believe it is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of the Website’s terms of use, or as otherwise required by law.",
            "c. We shall transfer information about you only if we are acquired by another company or individual. In this event, the Website will notify you before information about you is transferred and becomes subject to a different privacy policy.",
            "d. We may need to contact you to comply or co-operate with a legal request. For this purpose, we will use the email address provided to us by you. All communications sent by us at such email address shall be deemed to have been communicated to you. "
        ],
    },
    {
        title: "13. Confidentiality and security",
        text: [
            "13.1 We limit access to Personal Information about you to employees who we believe reasonably need to come into contact with that information to provide products or services to you or in order to do their jobs.",
            "13.2 We have physical, electronic, and procedural safeguards that comply with the laws prevalent in the United States and elsewhere we provide our services to protect personal information about you. We seek to ensure compliance with applicable technology laws to ensure the protection and preservation of your privacy. Additionally, we follow generally accepted industry standards to protect the Personal Information submitted to us, both during transmission and once we receive it. However, no method of transmission over the Internet or via mobile device, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security."
        ],
    },
    {
        title: "15. Contact Information",
        text: [
            "15.1 We welcome your comments regarding this privacy statement at the contact address given at the website. Should there be any concerns about contravention of this Privacy Policy, we will employ all commercially reasonable efforts to address the same. The terms in this Policy may be changed by us at any time. GAPP Blocks is free to offer its services to any client/prospective client without restriction."
        ],
    }
]

export default function privacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | GAPP Blocks</title>
                <meta
                    name="description"
                    content="We have got all the tools to turn your e-commerce ideas into reality.GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
                />
            </Head>
            <Header />
            <TextSection>
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                    <span className="block text-center text-lg font-semibold text-indigo-600">Privacy Policy</span>
                    </h1>
                </div>
                <div className="prose prose-lg prose-indigo max-w-4xl mx-auto mt-6 text-gray-500">
                    <p className="text-justify py-4">
                        This website privacy policy (“Privacy Policy” or “Policy”) describe <a className="text-accent" href="https://gappblocks.com">www.gappblocks.com</a> (herein after referred to as “GAPP Blocks”, “Site” or “Website”) policy on the collection, use, and disclosure of information about you in connection with your use of the domain, <a className="text-accent" href="https://gappblocks.com">www.gappblocks.com</a> and all associated product sites listed on our Site. The terms “we”, “us” or “our”, refer to <a className="text-accent" href="https://gappblocks.com">www.gappblocks.com</a>. When you use the service available at our Website, you consent to our collection, use, and disclosure of information about you as described in this Privacy Policy. The Site is owned and controlled by <a className="text-accent" href="https://gapp.co/">GAPP Company</a>, 16192 Coastal Highway, Lewes, DE 19958.
                    </p>
                    <p className="text-justify py-4">We reserve the right to update, change, amend or modify this Privacy Policy at any time and said changes will be effective upon posting. Every time there is a change, we will display a notice on our Site thereof. We shall also notify you by email. We will use your personal information in a manner consistent with the Privacy Policy in effect at the time you submitted the information unless you consent to the new or revised policy. </p>
                    <p className="text-justify py-4">In every respect, by using the Site, you agree to be bound by terms of this Privacy Policy.</p>
                    {data.slice(0, 7).map((item, index) => (
                        <div key={index}>
                            <span className="mt-2 block text-xl font-bold leading-8 tracking-tight text-priamry sm:text-xl">
                                {item.title}
                            </span>
                            {item.text.map((text, _index) => (
                                <p className="text-justify" key={_index}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    ))}
                    <span className="mt-2 block text-xl font-bold leading-8 tracking-tight text-priamry sm:text-xl">
                        8. Notice to Parents
                    </span>
                    <p className="text-justify">
                        8.1 We want to help you guard your children&#39;s privacy. We encourage you to talk to your children (below 18 years) about safe and responsible use of their Personal Information while using our Site. The Site does not publish content that is harmful, derogatory or pornographic in nature. However, the Website shall not incur any liability should your children provide us any Personal Information without parental consent. If you become aware that a child has provided us with personal information without parental consent, please contact us at {<a className="text-accent" href="mailto:legal@gappblocks.com">legal@gappblocks.com</a>}. If we become aware that a child under 18 has provided us with Personal Information without parental consent, we take steps to remove such information and terminate the child&#39;s account.
                    </p>
                    {data.slice(7, 8).map((item, index) => (
                        <div key={index}>
                            <span className="mt-2 block text-xl font-bold leading-8 tracking-tight text-priamry sm:text-xl">
                                {item.title}
                            </span>
                            {item.text.map((text, _index) => (
                                <p className="text-justify" key={_index}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    ))}
                    <span className="mt-2 block text-xl font-bold leading-8 tracking-tight text-priamry sm:text-xl">
                        10. Customer Profile
                    </span>
                    <p className="text-justify">
                        10.1 As mentioned above, every registered customer has a unique personal profile. Each profile is assigned a unique personal identification number, which helps us ensure that only you can access your profile.
                    </p>
                    <p className="text-justify">
                        10.2 Cookies: When you visit our Site, we may place “cookies” on your computer to recognize you. We do this to store your preferences, collect statistical data and track your use of our service. Cookies are widely used, and most web browsers are configured initially to accept cookies automatically. If you prefer not to accept cookies, you may adjust and configure your browser settings accordingly. However, if you turn off cookies, or refuse to accept a request to place a cookie, some features and services on the Site may not function properly. Ad companies (including but not limited to Google and Facebook) may also place cookies on your computer to track your activities across various sites so that they can display targeted advertisements. In addition to above you are requested to read our cookie policy at <a className="text-accent" href="https://gappblocks.com/privacy-policy/">privacy-policy</a>
                    </p>
                    <p className="text-justify">
                        10.3 We provide you with access to your user data and ability to delete any of your user data. We also take commercially reasonable steps to safeguard user data. We may also collect registration and other information about you as our customer through our Site. Our collection and use of information collected about you on our website is governed by this Privacy Policy.
                    </p>
                    {data.slice(8, 11).map((item, index) => (
                        <div key={index}>
                            <span className="mt-2 block text-xl font-bold leading-8 tracking-tight text-priamry sm:text-xl">
                                {item.title}
                            </span>
                            {item.text.map((text, _index) => (
                                <p className="text-justify" key={_index}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    ))}
                    <span className="mt-2 block text-xl font-bold leading-8 tracking-tight text-priamry sm:text-xl">
                        14. Your Consent
                    </span>
                    <p className="text-justify">
                        14.1 By using the Website, you consent to the terms of our Privacy Policy and to the Site&#39;s processing of Personal Information for the purposes given above as well as those explained where we at <a className="text-accent" href="https://gappblocks.com">www.gappblocks.com</a> collect personal information on the web.
                    </p>
                    <p className="text-justify">
                        10.2 Cookies: When you visit our Site, we may place “cookies” on your computer to recognize you. We do this to store your preferences, collect statistical data and track your use of our service. Cookies are widely used, and most web browsers are configured initially to accept cookies automatically. If you prefer not to accept cookies, you may adjust and configure your browser settings accordingly. However, if you turn off cookies, or refuse to accept a request to place a cookie, some features and services on the Site may not function properly. Ad companies (including but not limited to Google and Facebook) may also place cookies on your computer to track your activities across various sites so that they can display targeted advertisements. In addition to above you are requested to read our cookie policy at <a className="text-accent" href="https://gappblocks.com/privacy-policy/">privacy-policy</a>
                    </p>
                    <p className="text-justify">
                        10.3 We provide you with access to your user data and ability to delete any of your user data. We also take commercially reasonable steps to safeguard user data. We may also collect registration and other information about you as our customer through our Site. Our collection and use of information collected about you on our website is governed by this Privacy Policy.
                    </p>
                    {data.slice(11).map((item, index) => (
                        <div key={index}>
                            <span className="mt-2 block text-xl font-bold leading-8 tracking-tight text-priamry sm:text-xl">
                                {item.title}
                            </span>
                            {item.text.map((text, _index) => (
                                <p className="text-justify" key={_index}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </TextSection>
            <ChatBot />
            <Footer />
        </>
    )
}