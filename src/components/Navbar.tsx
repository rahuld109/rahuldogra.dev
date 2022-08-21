import type { ReactElement, FC, MouseEventHandler } from 'react';
import { useState } from 'react';

type Display = 'hidden' | 'block';

interface ItemInterface {
  name: string;
  link?: string;
}

const LogoSVG = (): ReactElement => (
  <svg
    width='30'
    height='30'
    viewBox='0 0 75.59054435220287 75.39728547727759'
    className='css-1j8o68f'
  >
    <defs id='SvgjsDefs2883'></defs>
    <g
      id='SvgjsG2884'
      transform='matrix(0.7719934992729088,0,0,0.7719934992729088,-2.2241133037993865,-2.2827847906021383)'
      fill='#c8e7ed'
    >
      <g xmlns='http://www.w3.org/2000/svg'>
        <path d='M2.881,59.625v25.604l22.175,12.803L47.23,85.229V59.625L25.056,46.822L2.881,59.625z M37.778,79.772l-12.722,7.345   l-12.723-7.345v-14.69l12.723-7.346l12.722,7.346V79.772z'></path>
        <path d='M72.556,15.759L50.381,2.957L28.206,15.76v25.605l22.175,12.803l22.175-12.803V15.759z M63.104,35.907l-12.723,7.346   l-12.722-7.346v-14.69l12.722-7.346l12.723,7.346V35.907z'></path>
        <path d='M75.707,46.822L53.531,59.625v25.604l22.175,12.803l22.175-12.803V59.625L75.707,46.822z M88.429,79.772l-12.723,7.345   l-12.723-7.345v-14.69l12.724-7.346l12.722,7.346V79.772z'></path>
      </g>
    </g>
  </svg>
);

const BurgerSVG = (): ReactElement => (
  <svg
    className='w-6 h-6'
    aria-hidden='true'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
      clipRule='evenodd'
    ></path>
  </svg>
);

const MenuItem: FC<ItemInterface> = ({ link = '#', name }): ReactElement => {
  return (
    <li>
      <a
        href={link}
        className='block py-2 pr-4 pl-3 rounded hover:bg-rose-600 md:border-0 md:hover:brightness-75 md:p-0  md:hover:bg-transparent'
      >
        {name}
      </a>
    </li>
  );
};

const Navbar: FC = (): ReactElement => {
  const [openMenu, setopenMenu] = useState<Display>('hidden');

  const ITEMS: ItemInterface[] = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Work', link: '/work' },
    { name: 'Contact', link: '/contact' },
  ];

  const handleMenuClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    setopenMenu(openMenu === 'hidden' ? 'block' : 'hidden');
  };

  return (
    <nav className='text-white px-2 sm:px-4 py-2.5'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <div className='flex items-center'>
          <LogoSVG />
          <span className='px-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Rahul <span className='text-rose-500'>Dogra</span>
          </span>
        </div>
        <button
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2  text-rose-500 hover:bg-grey-800 focus:ring-rose-600'
          onClick={(e) => handleMenuClick(e)}
        >
          <span className='sr-only'>Open main menu</span>
          <BurgerSVG />
        </button>

        <div className={`w-full md:block md:w-auto ` + openMenu}>
          <ul className='flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:text-white bg-neutral-800 md:dark:bg-grey-800 border-red-500'>
            {ITEMS.map((item) => (
              <MenuItem key={item.name} name={item.name} link={item.link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
