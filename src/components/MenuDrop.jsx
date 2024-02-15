import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MenuDrop = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="px-5 py-4 max-xs:py-3 max-xs:px-2 text-white scale-120" onClick={handleClick}>
        {click?
            <X />
            :
            <MenuIcon />
        }
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {navLinks.map((link) => (

                    <Menu.Item key={link.id}>
                {({ active }) => (
                    <Link
                    to={`/${link.id}`}
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    {link.title}
                    </Link>
                )}
                </Menu.Item>
            ))}
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/user"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/login"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Sign Out
                </Link>
              )}
            </Menu.Item>
          </div>
          
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MenuDrop