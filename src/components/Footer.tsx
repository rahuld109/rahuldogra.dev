import { LogoSVG } from 'src/assets';

function Footer() {
  return (
    <footer id='footer' className=' px-2 sm:px-4 py-2.5 '>
      <div className='text-white container mx-auto flex flex-wrap justify-between items-center'>
        <div id='logo' className='flex flex-col justify-between items-center'>
          <LogoSVG width='100' height='100' />
          <span className='px-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Rahul <span className='text-rose-500'>Dogra</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
