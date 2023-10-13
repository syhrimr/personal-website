import { getHeader } from '@/sanity/sanity-utils';
// import { useState } from 'react';

import CustomIconRender from './CustomIconRender';
import Link from 'next/link';

export default async function HeaderNavbar() {
  // const [isOpenMenu, setOpenMenu] = useState<Boolean>(false);
  const { navbars } = await getHeader();

  // function toggleMenu() {
  //   setOpenMenu(!isOpenMenu);
  // }

  return (
    <nav className='max-w-3xl mx-10 sm:mx-auto py-8 relative'>
      <div className='flex flex-row gap-4 justify-between'>
        <ul className='flex flex-row gap-6'>
          {navbars.map((navbar, index) => ( 
            navbar.type === "nav" &&
            <li
              key={index}
              className='hover:scale-110'
            >
              <Link
                href={navbar.url}
                title={navbar.text}
                className="text-gradient-primary text-lg font-bold"
              >
                {navbar.text}
              </Link>
            </li>
          ))}
        </ul>

        <ul className='flex flex-row gap-4'>
          {navbars.map((navbar, index) => (
            navbar.type === "sns" &&
            <li
              key={index}
              className='hover:scale-110'
            >
              <Link
                href={navbar.url}
                title={navbar.text}
                target='_blank'
                rel='noopener noreferrer'
                className="text-gradient-primary text-lg font-bold"
              >
                <CustomIconRender type={navbar.snsType} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className='flex sm:hidden justify-end'>
        <div
          className='p-2 border border-gray-300 rounded-lg'
          onClick={() => toggleMenu()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
<path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
</svg>
        </div>

        <div className='hidden flex flex-col gap-16 bg-white absolute w-full h-[100svh] top-28'>
          <ul className='flex flex-col gap-4'>
            {navbars.map((navbar, index) => ( 
              navbar.type === "nav" &&
              <li
                key={index}
                className='hover:scale-110'
              >
                <Link
                  href={navbar.url}
                  title={navbar.text}
                  className="text-gradient-primary text-lg font-bold"
                >
                  {navbar.text}
                </Link>
              </li>
            ))}
          </ul>

          <ul className='flex flex-row gap-4 justify-center'>
            {navbars.map((navbar, index) => (
              navbar.type === "sns" &&
              <li
                key={index}
                className='hover:scale-110'
              >
                <Link
                  href={navbar.url}
                  title={navbar.text}
                  target='_blank'
                  rel='noopener noreferrer'
                  className="text-gradient-primary text-lg font-bold"
                >
                  <SosmedSvgLoader snsType={navbar.snsType} />
                </Link>
              </li>
            ))}
          </ul>
      </div>
      </div> */}
    </nav>
  )
}