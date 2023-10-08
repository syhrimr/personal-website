import Link from 'next/link'
import { getHeader } from '@/sanity/sanity-utils'
// import { useState } from 'react';

export default async function HeaderNavbar() {
  // const [isOpenMenu, setOpenMenu] = useState<Boolean>(false);
  const { navbars } = await getHeader();

  function SosmedSvgLoader({ snsType }: { snsType: string }) {
    if (snsType === 'twitter') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"></path>
        </svg>
      )
    } else if (snsType === 'github') {
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" 
          y="0px" 
          width="24" 
          height="24" 
          viewBox="0 0 32 32"
        >
          <path
            fillRule="evenodd"
            d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
          </svg>
      )
    } else if (snsType === 'linkedin') {
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" 
          y="0px" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
        >
          <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
        </svg>
      )
    } else if (snsType === 'notion') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M6.392 4.978L21.71 4.193l-3.38-1.926c-.835-.568-1.846-.838-2.844-.768L3.397 1.983 6.392 4.978zM5 6.414l-3-3v13.48c0 .596.174 1.171.504 1.664L5 22.303V6.414zM7 6.95v15.989l15.062-.941C22.589 21.965 23 21.528 23 21V6.13L7 6.95zM20.458 9.84c-.531.11-.531.11-.531.645 0 2.874-.002 5.748.005 8.622 0 .2-.054.322-.244.382-.341.108-.675.248-1.023.321-.557.116-1.047-.037-1.381-.515-.461-.659-.91-1.326-1.348-2-1.018-1.567-2.027-3.141-3.039-4.712-.022-.034-.047-.065-.105-.142-.012.107-.025.171-.025.235-.001 1.956.001 3.913-.005 5.869-.001.173.055.243.222.275.375.072.747.162 1.117.244-.045.406-.27.658-.686.727-.305.05-.617.057-.927.075-.75.045-1.502.079-2.251.132-.218.016-.262-.075-.225-.253.046-.222.159-.383.399-.441.236-.057.469-.131.703-.197 0-2.814 0-5.613 0-8.432-.356-.031-.704-.062-1.049-.092-.137-.484.165-.931.676-.972.92-.074 1.845-.103 2.762-.204.392-.044.576.1.772.4 1.298 1.987 2.613 3.963 3.923 5.942.048.073.101.144.195.279 0-2.001 0-3.928 0-5.87-.32-.037-.626-.081-.934-.104-.168-.012-.209-.088-.19-.236.041-.317.29-.605.624-.63C18.909 9.112 19.928 9.06 20.941 9 21.088 9.5 20.946 9.739 20.458 9.84z"></path>
        </svg>
      )
    }
  }

  // function toggleMenu() {
  //   setOpenMenu(!isOpenMenu);
  // }

  return (
    <nav className='max-w-3xl mx-10 sm:mx-auto py-8 relative'>
      <div className='flex flex-row gap-4 justify-between'>
        <ul className='flex flex-row gap-4'>
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
                <SosmedSvgLoader snsType={navbar.snsType} />
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