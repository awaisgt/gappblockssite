import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import {Button} from "@/components/Button";

const KEY = 'cookieConsent'

const PopUp = (Content, buttonRef, state) => {
    return (
        <Transition.Root show={state} as={Fragment}>
            <Dialog as="div" className="relative z-50" initialFocus={buttonRef} onClose={() => {}}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                { Content }
            </Dialog>
        </Transition.Root>
    )
}

export const PopUpPrivacyPolicy = ({data, open, setOpen, acceptButtonLink}) => {
    const acceptButtonRef = useRef(null);

    const content = <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                        </div>
                        <div className="mt-3 text-center sm:mt-5">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                {data.Heading && data.Heading}
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    {data.Content1 && data.Content1}
                                    <a className="text-blue-600 hover:text-blue-800 visited:text-purple-600" href={data.Links[0].href && data.Links[0].href}>{data.Links[0].label && data.Links[0].label}</a> and <a className="text-blue-600 hover:text-blue-800 visited:text-purple-600" href={data.Links[1].href && data.Links[1].href}>{data.Links[1].label && data.Links[1].label}</a>
                                    {data.Content2 && data.Content2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                        <Button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                            href={acceptButtonLink}
                            onClick={() => setOpen(false)}
                            ref={acceptButtonRef}
                        >
                            {data.Button[0] && data.Button[0]}
                        </Button>
                        <Button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-base font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                            onClick={() => setOpen(false)}
                        >
                            {data.Button[1] && data.Button[1]}
                        </Button>
                    </div>
                </Dialog.Panel>
            </Transition.Child>
        </div>
    </div>

    return PopUp(content, acceptButtonRef, open);
}

export const CookieConsent = ({data}) => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (localStorage.getItem(KEY) === null) {
            setOpen(true);
            localStorage.setItem(KEY, "true");
        }
    }, []);

    const setLocalStorage = (key, value) => {
        localStorage.setItem(key, value);
    }

    const acceptButtonRef = useRef(null)

    const content = <div className="fixed bottom-0 left-5 z-50 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div>
                            <div className="mt-3 text-center sm:mt-5">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    {data.Heading && data.Heading}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {data.Content && data.Content}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                                onClick={() => {
                                    setOpen(false);
                                    setLocalStorage(KEY, 'false');
                                    data.Button1Action && data.Button1Action();
                                }}
                                ref={acceptButtonRef}
                            >
                                {data.Button1Text && data.Button1Text}
                            </button>
                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                                onClick={() => {
                                    setOpen(false);
                                    setLocalStorage(KEY, 'false');
                                    data.Button2Action && data.Button2Action();
                                }}>
                                {data.Button2Text && data.Button2Text}
                            </button>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </div>
        </div>

    return PopUp(content, acceptButtonRef, open);
}