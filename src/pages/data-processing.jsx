
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import TextSection from "@/components/TextSection"
import Link from "next/link";
import Head from "next/head"
import {ChatBot} from "@/components/ChatBot";

const data = [
    {
        title: "1. Data Processing",
        text: [
            "This Data Processing Addendum (“DPA”) forms part of the GAPP Blocks Terms of Service for the purchase of services from GAPP Blocks (identified either as “Services” or otherwise in the applicable agreement, and hereinafter defined as “Services”) (the “Agreement”) to reflect the parties’ agreement with regard to the Processing of Personal Data.",
            "By signing the Agreement, Customer enters into this DPA on behalf of itself and, to the extent required under applicable Data Protection Laws and Regulations, in the name and on behalf of its Authorized Affiliates, if and to the extent GAPP Blocks processes Personal Data for which such Authorized Affiliates qualify as the Controller. For the purposes of this DPA only, and except where indicated otherwise, the term “Customer” shall include Customer and Authorized Affiliates."
        ],
    },
    {
        title: "2. Data Protection",
        text: [
            "2.1. When Processes Personal Data in the course of providing the Services, we will: ",
            "2.2.1. Process the Personal Data as a Data Processor & controller depending on the use case, only for the purpose of providing the Services in accordance with documented instructions from you (provided that such instructions are commensurate with the functionalities of the Services), and as may subsequently be agreed to by you. If GAPP Blocks is required by law to Process the Personal Data for any other purpose, GAPP Blocks will provide you with prior notice of this requirement, unless GAPP Blocks is prohibited by law from providing such notice;",
            "2.2.2. notify you if, in GAPP Blocks opinion, your instruction for the processing of Personal Data infringes applicable Data Protection Legislation;",
            "2.2.3. notify you promptly, to the extent permitted by law, upon receiving an inquiry or complaint from a Data Subject or Supervisory Authority relating to GAPP Blocks Processing of the Personal Data;",
            "2.2.4. implement and maintain appropriate technical and organizational measures to protect the Personal Data against unauthorized or unlawful processing and against accidental loss, destruction, damage, theft, alteration or disclosure. These measures shall be appropriate to the harm which might result from any unauthorized or unlawful processing, accidental loss, destruction, damage or theft of Personal Data and appropriate to the nature of the Personal Data which is to be protected;",
            "2.2.5. provide you, upon request, with up-to-date attestations, reports or extracts thereof where available from a source charged with auditing GAPP Blocks data protection practices (e.g. external auditors, internal audit, data protection auditors), or suitable certifications, to enable you to assess compliance with the terms of this Addendum;",
            "2.2.6. notify you promptly upon becoming aware of and confirming any accidental, unauthorized, or unlawful processing of, disclosure of, or access to the Personal Data;",
            "2.2.7. ensure that its personnel who access the Personal Data are subject to confidentiality obligations that restrict their ability to disclose the Customer Personal Data; and",
            "2.2.8. upon termination of the Agreement, GAPP Blocks will promptly initiate its purge process to delete or anonymize the Personal Data. If you request a copy of such Personal Data within 30 days of termination, GAPP Blocks will provide you with a copy of such Personal Data.",
            "2.3 In the course of providing the services, you acknowledge and agree that GAPP Blocks may use Subprocessors to Process the Personal Data. GAPP Blocks use of any specific Subprocessor to process the Personal Data must be in compliance with Data Protection Legislation and must be governed by a contract between GAPP Blocks and Subprocessor."
        ],
    },
    {
        title: "Data Storage and Processing",
        text: ["3.1 Data Storage and Processing Facilities. Customer agrees that GAPP Blocks may store and process Customer Personal Data in USA and any other country in which GAPP Blocks or any of its Subprocessors maintains facilities."],
    }
]

export default function dataProcessingAddendum() {
    return (
        <>
            <Head>
                <title>Data Processing Addendum | GAPP Blocks</title>
                <meta
                    name="description"
                    content="We have got all the tools to turn your e-commerce ideas into reality.GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
                />
            </Head>
            <Header />
            <TextSection>
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                    <span className="block text-center text-lg font-semibold text-indigo-600">Data Processing Addendum</span>
                    </h1>
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
                        4. Miscellaneous 
                    </span>
                    <p className="text-justify">
                    4.1 In the event of any conflict or inconsistency between the provisions of the Agreement and this Addendum, the provisions of this Addendum shall prevail. For avoidance of doubt and to the extent allowed by applicable law, any and all liability under this Addendum, including limitations thereof, will be governed by the relevant provisions of the Agreement. You acknowledge and agree that GAPP Blocks may amend this Addendum from time to time by posting the relevant amended and restated Addendum on GAPP Blocks website, available at <Link className="text-accent" href="/terms-of-service">terms of service</Link> and such amendments to the Addendum are effective as of the date of posting. Your continued use of the Services after the amended Addendum is posted to GAPP Blocks website constitutes your agreement to, and acceptance of, the amended Addendum. If you do not agree to any changes to the Addendum, do not continue to use the Service.
                    </p>
                </div>
            </TextSection>
            <ChatBot />
            <Footer />
        </>
    )
}