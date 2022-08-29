import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Item(props) {
    return (
        <Menu.Item>
            {({ active }) => (
                <a
                    href={props.href}
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                >
                    {props.label}
                </a>
            )}
        </Menu.Item>
    )
}

const data = [
    {label: "Store front", href: "storefront"},
    {label: "Finder", href: "finder"},
    {label: "Shipping", href: "shipping"},
    {label: "Payment", href: "payment"},
]

export function Services(props) {
    return (<Menu as="div">
        <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            show={props.show || false}
        >
            <Menu.Items className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {data.map((item, index) => (
                        <Item key={index} {...item} />
                    ))}
                </div>
            </Menu.Items>
        </Transition>
    </Menu>)
}