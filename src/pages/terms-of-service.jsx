
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import TextSection from "@/components/TextSection"
import Link from "next/link";
import Head from "next/head";
import {ChatBot} from "@/components/ChatBot";

const data = [
    {
        title: "Use of Service",
        text: ["Please note that by using any of the Services provided on our Site, you are agreeing to these terms. Your consent to be bound by these terms is both on your own behalf and on behalf of any corporate entity that employs you or which you represent, and the term “you” as used herein will be deemed to refer to both you and your employer, jointly and severally. if you are an employee, contractor or otherwise using or subscribing to the services by or on behalf of a corporate entity, organization or any other third-party entity, you represent and warrant to us that : (A) You are of the age of majority in your jurisdiction; (B) You have all requisite capacity, right, power and authority to accept this license on behalf of such entity; and (C) such entity shall be irrevocably bound by and shall comply with all of the terms and conditions of this agreement. The Services will continue to evolve as we refine features and functionality. We may terminate, suspend, or modify the Services, in general, or with respect to you, from time to time without cause or prior notice. We may also delete any content or data from the Services at our discretion. All documents, images, text and information on the Site are protected by copyright. Except as specifically permitted herein, no portion of the documents or information on this website may be reproduced in any form or by any means without the express written consent from us."],
    },
    {
        title: "Other Rights and Limitations",
        text: ["You shall not, and may not permit or aid others to, translate, reverse engineer, decompile, disassemble, update, modify, reproduce, duplicate, copy, distribute or otherwise disseminate all or any part of the software underlying the Services or extract or attempt to extract source code from the object code of the Software. You may not make any commercial use of the Services or the Software, whether or not for consideration, other than for your own internal business purposes. Except as may be expressly permitted by us, you may authorize expressly in writing, you will not, and will not permit anyone else to: (i) store, copy, modify, distribute, or resell any of the information; audio, visual, and audio visual works, or other content made available on our Services (collectively, “Service Content”) or compile or collect any Service Content as part of a database or other work; (ii) use any automated tool (e.g., robots, spiders) to access or use our Services or to store, copy, modify, distribute, or resell any Service Content; (iii) rent, lease, or sublicense your access to our Services to another person; (iv) use any Services or Service Content for any purpose except for your own internal use; (v) circumvent or disable any digital rights management, usage rules, or other security features of our Services; (vi) use our Services in a manner that overburdens, or that threatens the integrity, performance, or availability of, our Services; or (vii) remove, alter, or obscure any proprietary notices (including copyright and trademark notices) on any portion of our Services or any Service Content."],
    },
    {
        title: "Restricted Areas of The Service",
        text: ["Certain parts of our Services, including account management features, may be password-restricted to registered users or other authorized persons (“Password-Protected Areas”). If you are authorized to gain access to any Password-Protected Areas, you agree that you are entirely responsible for maintaining the confidentiality of your password and agree to notify us if the password is lost, stolen, disclosed to an unauthorized third-party, or otherwise may have been compromised. You agree that you are entirely responsible for any and all activities that occur under your account, whether or not you are the individual who undertakes such activities. You agree to immediately notify us of any unauthorized use of your account or any other breach of security in relation to your password or our Services that is known to you. If you use any third-party service which hinders the performance of our platform, we are authorized to block your account."],
    },
    {
        title: "Confidential Information",
        text: ["You shall not disclose to third parties nor use for any purpose other than for the proper use of the Services any Confidential Information received from us in whatever form under these Terms or in connection with the Services without our prior written permission. “Confidential Information” shall mean all data and information, not made available to the general public, oral or written, that relates to our past, present, or future research, development or business activities, information relating to services, developments, inventions, processes, plans, financial information, customer and supplier lists, forecasts, and projections. You shall limit access to Confidential Information to those of your personnel for whom such access is reasonably necessary for the proper use of the Services under these Terms. Such personnel shall be bound by written confidentiality obligations not less restrictive than those provided for herein. You shall be responsible for any breach of these Terms by any of your personnel. You shall protect the Confidential Information with the same degree of care, but no less than a reasonable degree of care, to prevent unauthorized disclosure or use of Confidential Information, as you exercise in protecting your own proprietary information. The aforementioned limitations shall not apply to Confidential Information which you can demonstrate: (i) was in your possession prior to disclosure hereunder provided that, immediately upon disclosure, you have brought this fact to our attention; or (ii) was in the public domain at the time of disclosure or later became part of the public domain without breach of the confidentiality obligations herein contained; or (iii) was disclosed by a third-party without breach of any obligation of confidentiality; or (iv) is disclosed pursuant to administrative or judicial action, provided that you shall use your best efforts to maintain the confidentiality of the Confidential Information. If only a portion of the Confidential Information falls under any of the above alternatives, then only that portion of the Confidential Information shall be excluded from the use and disclosure restrictions of these Terms."],
    },
    {
        title: "Proprietary Rights",
        text: ["You acknowledge and agree that the Services and the Software are our proprietary products and its licensors, protected under potential patents, copyright laws and international treaties. You further acknowledge and agree that all right, title and interest in and to the Services and the Software, including associated intellectual property rights and all improvements, modifications, revisions, derivative works, customization and integration work product, customer feedback, suggestions and white-label branded applications, are and shall remain the sole and exclusive property. These rights granted hereunder do not convey to you any interest in or to the underlying software. You shall not remove or alter any copyright notice, trademark or other proprietary or restrictive notice or legend affixed to, embedded, contained or included in the Software or Services or any material provided by us. In the event that you have requested, and we have agreed to make available to you, a white-label branded application for Your Customers and/or End Users with your branding, you hereby grant us a perpetual, worldwide, royalty-free license to use your trademarks, trade dress, logos, display, etc. (“Your Trademarks”) for use and display in connection with such white-label branded application."],
    },
    {
        title: "License To Use Our Services",
        text: ["Subject to these Terms, we grant to you a limited, non-exclusive, non-transferable license to use our Services for your internal use and not for resale or further distribution. Your right to use our Services is limited by all terms and conditions set forth in these Terms. Except for your pre-existing rights and this license granted to you, we and our licensors retain all rights, title and interest in and to our Services, including all related intellectual property rights. Our Services are protected by applicable intellectual property laws, including the copyright ordinance, 1962 and international treaties. Except as otherwise explicitly provided in these Terms or as may be expressly permitted by applicable law, you will not, and will not permit or authorize any third-party to: (i) reproduce, modify, translate, enhance, decompile, disassemble, reverse engineer or create derivative works of any of our Services; (ii) rent, lease or sublicense access to any of our Services; or (iii) circumvent or disable any security or technological features or measures of our Services. Certain of our Services are provided at no cost and certain Services are subject to various fees. The pricing for the Services can be found at our Site, is based on usage and are non-refundable. The fees for the pricing tiers, as well as telephony charges incurred, will be billed to you and you may authorize the card issuer to pay any amounts set forth herein and authorize us (or our billing agent) to charge your credit card account until you or we cancel or terminate your pricing tier; provided that if payment is not received from your credit card issuer, you agree to pay all amounts due upon demand. You must provide current, complete and accurate billing and credit card information. You agree to pay all costs of collection, including attorney’s fees and costs, on any outstanding balance. In certain instances, the issuer of your credit card may charge you a foreign transaction fee or related charges, which you will be responsible to pay. You will be responsible for payment of any applicable sales, use and other taxes and all applicable export and import fees, customs duties and similar charges (other than taxes based on our income), and any related penalties and interest for the grant of access rights hereunder, or the delivery of related services. You will make all required payments to us, free and clear of, and without reduction for, any withholding taxes. Any such taxes imposed on payments to us will be your sole responsibility, and you will, upon our request, provide us with official receipts issued by appropriate taxing authorities, or such other evidence as we may reasonably request, to establish that such taxes have been paid."],
    },
    {
        title: "Content and Liability Disclaimer",
        text: ["We shall not be responsible for any errors or omissions contained on any of our website and reserves the right to make changes anytime without notice. All ours and third-party information provided on the Website is provided on an “as is” basis. We can use only the users or company name and other related information on our website and in emails. WE DISCLAIM ALL WARRANTIES, EXPRESSED OR IMPLIED, WITH REGARD TO ANY INFORMATION (INCLUDING ANY SOFTWARE, PRODUCTS, OR SERVICES) PROVIDED ON ANY OF OUR WEBSITES, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you. In no event shall we be liable for any damages whatsoever, and in particular we shall not be liable for direct, special, indirect, consequential, or incidental damages, or damages for lost profits, loss of revenue or loss of use, cost of replacement goods, loss or damage to data arising out of the use or inability to use any of our website. This includes damages arising from use of or in reliance on the documents or information present on our Website (including any information posted or placed by anyone other than us), even if we have been advised of the possibility of such damages."],
    },
    {
        title: "Access to our Services",
        text: ["We do not provide you with the equipment to access our Services. You are responsible for all fees charged by third parties related to your access and use of our Services (e.g., charges by Internet service providers). We reserve the right to modify or discontinue, temporarily or permanently, all or any portion of our Services without notice. We will not be liable to you or to any third-party for any modification, suspension, or discontinuance of all or any portion of our Services. We also reserve the right, in our sole discretion, to reject, refuse to post, or remove any material that you post or submit for posting, and to restrict, suspend, or terminate your access to our Services at any time, for any or no reason, with or without prior notice, and without liability."],
    },
    {
        title: "Pricing Policy",
        text: ["All Invoices will be issued in USD only. All invoices will be made on actual usage of services and send on registered email id on the first-day of every calendar month. Mode of payment shall be debit/credit card and it will be auto-debited on first-day of every calendar month. However, in case of non-availability of a valid credit/debit card the payment can also be made through ‘Bank Account’ or ‘Paypal’. In case of these methods not being available, you would be required to provide proof of payment used for the method of payment. Registration fee is free of cost and you need to provide us a valid credit/debit card information and authorize us to charge such credit/debit card for all services you opt. Our fees do not include any taxes, levies, duties or similar governmental assessments of any nature, including, for example, value-added, sales, use or withholding taxes, assessable by any jurisdiction whatsoever (collectively, “Taxes”). You are responsible for paying all taxes associated with your purchases hereunder. If any amount owing by You under this or any other agreement for Our services is 30 or more days overdue (or 10 or more days overdue in the case of amounts You have authorized Us to charge to Your credit card), We may, without limiting Our other rights and remedies, accelerate Your unpaid fee obligations under such agreements so that all such obligations become immediately due and payable, and suspend Our services to You until such amounts are paid in full. We will give You at least 6 days’ prior notice that Your account is overdue. Once you have activated any pre-paid plan, the subscription cost will be deducted on the 1st day of every month which is non-refundable."],
    },
    {
        title: "Products Information",
        text: ["Contained in this site may contain references to our products listed on the Site. Consult your local representative or email us at for information regarding the products and services that are available to you. Our obligations with respect to its products and services are governed solely by the license and/or service agreements under which they are provided. If you obtain a product or service from us from this website that is provided without an agreement, that product or service is provided “AS-IS” with no warranties whatsoever, express or implied, and your use of that product or service is at your own risk."],
    },
    {
        title: "Data Security",
        text: [
            "GAPP Blocks: Our Services are designed to allow you to assign tasks to field workers, communicate with your field workers and customers (“Users”), and view information pertaining to your field workers’ activity. We do this in part using GPS and other sensors on devices running our applications. Information is automatically collected from or about your Users and field workers when you use our Services and may include geographic coordinates. You agree to comply with all applicable privacy and data protection regulations.",
            "We collect, store, and use your User data on our servers to provide you with the ability to better maintain and improve your Services. Our Services transfer data to servers that store User data in the U.S. and outside the U.S which is complaint to the GDPR regulations. We only share User information (Name, email and phone numbers) for third-party integrations such as SMS gateways, Email gateways and Payment Gateways.",
            "We provide you with access to your User data and ability to delete any of your User data. We also take commercially reasonable steps to safeguard User data. You agree to provide appropriate notices to your Users about, and if required by applicable laws obtain appropriate consent from Users for, your information collection and use practices relating to your use of our Services and your use of cookies for tracking purposes. Appropriate notices may include notice in the form of a privacy policy posted on your site, in your mobile application, and/or, if you use our notifications in the SMS messages you send through our service. Our Privacy Policy does not cover information that is collected about your Users on your behalf from your mobile and web properties. It is your obligation to provide your own privacy policy or notice to your users."
        ],
    }
]

export default function termsOfService() {
    return (
        <>
            <Head>
                <title>Terms of Service | GAPP Blocks</title>
                <meta
                    name="description"
                    content="We have got all the tools to turn your e-commerce ideas into reality.GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
                />
            </Head>
            <Header />
            <TextSection>
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                    <span className="block text-center text-lg font-semibold text-indigo-600">Terms Of Service</span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-500">
                    Thank you for using services rendered by our site, <Link className="text-accent" href="www.gappblocks.com">www.gappblocks.com</Link> including linked domains integrated within the site (hereinafter together referred to as the “Site” or “Website”). These terms and conditions govern your access to and use of the Site and the services we offer (together “Services”). Please read them carefully before availing any of the Service we provide. The terms “we”, “us” or “our”, refer to the Site.
                    </p>
                </div>
                <div className="prose prose-lg prose-indigo max-w-4xl mx-auto mt-6 text-gray-500">
                    {data.map((item, index) => (
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
                        Privacy And Data Protection
                    </span>
                    <p className="text-justify">
                        GAPP Blocks is firmly committed to protecting the privacy of your personal information and the personal information of your customers. By using the Service, you acknowledge and agree that GAPP Blocks collection, usage and disclosure of this personal information is governed by our <Link className="text-accent" href='/privacy-policy/'>privacy policy</Link>
                    </p>
                    <p className="text-justify">
                        We are in compliance with the additional requirements for the restricted scope with Google Cloud Platform through which the App’s use of information received from Gmail APIs will adhere to Google&apos;s Limited Use Requirements.
                    </p>
                    <p className="text-justify">
                    Additionally, if: (a) you are established in the European Economic Area (EEA); (b) you provide goods or services to customers in the EEA; or (c) you are otherwise subject to the requirements of the EU General Data Protection Regulation, GAPP Blocks collection and use of personal information of any European residents is also subject to our <Link className="text-accent" href="/data-processing">Data Processing Addendum</Link>.
                    </p>
                </div>
            </TextSection>
            <ChatBot />
            <Footer />
        </>
    )
}