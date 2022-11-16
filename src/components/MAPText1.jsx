const posts = [
    {
      title: 'Boost your conversion rate',
      href: '#',
      category: { name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800' },
      description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Paul York',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '6 min',
    },
    {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
      description:
        'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      author: {
        name: 'Dessie Ryan',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '4 min',
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      author: {
        name: 'Easer Collins',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '11 min',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export function MAPText1() {
    return (
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold text-center	 tracking-tight text-gray-900 sm:text-4xl">The Perfect Geeks For Your Need</h2>
            <p className="mt-3 text-center	 text-xl text-[#4F46E5] sm:mt-4">WITHIN 3-5 WORKING DAYS</p>
            <p className="mt-3 text-center	 text-xl text-gray-500 sm:mt-4">
            We&apos;re bringing global teams of developers and geniuses to your doorstep.</p>
          </div>
          </div>
          </div>
          
    )
  }