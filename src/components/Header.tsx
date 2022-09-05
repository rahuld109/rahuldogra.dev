import type { ReactElement, FC, MouseEventHandler } from 'react';
import type { ItemInterface, Display, Mode } from 'src/constants';
import { useState, useEffect } from 'react';
import { WebsiteSVG, BurgerSVG, LightModeSVG, DarkModeSVG } from '../assets';
import { ITEMS } from 'src/constants';

const Header: FC = (): ReactElement => {
  const [openMenu, setOpenMenu] = useState<Display>('hidden');
  const [mode, setMode] = useState<Mode>(
    localStorage.getItem('mode') ?? 'dark'
  );

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('mode', mode);
  }, [mode]);

  const handleMenuClick: MouseEventHandler<HTMLButtonElement> = (): void =>
    setOpenMenu(openMenu === 'hidden' ? 'block' : 'hidden');

  const toggleMode: MouseEventHandler<HTMLButtonElement> = () =>
    setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <header className='px-2 sm:px-4 py-2.5'>
      <div className='container flex flex-wrap justify-between items-center'>
        <div className='flex items-center'>
          <WebsiteSVG width='30' height='30' />
          <span className='px-2 self-center text-2xl font-semibold whitespace-nowra'>
            Rahul <span className='text-red-500'>Dogra</span>
          </span>
        </div>
        <button
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2  text-red-500 hover:bg-grey-800 focus:ring-red-600'
          onClick={handleMenuClick}
        >
          <span className='sr-only'>Open main menu</span>
          <BurgerSVG />
        </button>

        <nav className={`w-full md:block md:w-auto ` + openMenu}>
          <ul className='flex flex-col p-4 mt-4 rounded-lg border text-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:md:text-white dark:bg-neutral-800 border-red-500 items-center'>
            {ITEMS.map((item, index) => (
              <MenuItem key={index} name={item.name} link={item.link} />
            ))}
            <li className='w-full'>
              <button
                aria-label='Toggle Mode'
                onClick={toggleMode}
                className='block py-2 pr-4 pl-3 rounded md:border-0 md:p-0  md:hover:bg-transparent mx-auto'
              >
                {mode === 'light' ? <LightModeSVG /> : <DarkModeSVG />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const MenuItem: FC<ItemInterface> = ({ link = '#', name }): ReactElement => {
  return (
    <li className='w-full'>
      <a
        href={link}
        className='block py-2 pr-4 pl-3 rounded hover:bg-red-600 md:border-0 md:hover:brightness-75 md:p-0  md:hover:bg-transparent'
      >
        {name}
      </a>
    </li>
  );
};

export default Header;
