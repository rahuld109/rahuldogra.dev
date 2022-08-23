import { ITEMS, PROFILES } from 'src/constants';
import { WebsiteSVG, TwitterSVG, LinkedInSVG, GithubSVG } from 'src/assets';

const CopyrightSection = () => (
  <div
    id='copyright-strip'
    className='bg-neutral-700 text-white px-2 sm:px-4 py-2.5'
  >
    <div className='container flex justify-between items-center'>
      <ul className='grid grid-rows-2 grid-flow-col md:grid-rows-none gap-y-2 gap-x-10 items-center text-sm'>
        <li id='copyright'>© Rahul Dogra</li>
        <li>
          <a href='/'>Tech Stack</a>
        </li>
        <li>
          <a href='/'>Privacy policy</a>
        </li>
      </ul>
      <div id='socials' className='grid grid-cols-3 gap-2'>
        <TwitterSVG />
        <LinkedInSVG />
        <GithubSVG />
      </div>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className='pt-10'>
      <div
        id='footer-section1'
        className='bg-neutral-800 text-white font-light tracking-wide px-2 sm:px-4 py-8 md:text-xl'
      >
        <div className='container  grid grid-rows-3 grid-cols-2 md:grid-cols-6 md:grid-rows-none justify-between items-center'>
          <div
            id='logo'
            className='flex flex-col self-start my-5 md:my-0 md:self-center tracking-normal justify-between items-center row-span-3 col-start-2 md:col-start-1'
          >
            <WebsiteSVG width='100' height='100' />
            <span className='px-2 self-center text-2xl font-semibold whitespace-nowrap'>
              Rahul <span className='text-rose-500'>Dogra</span>
            </span>
          </div>

          <div id='links' className='col-start-1 row-start-1 md:col-start-3'>
            <ul id='profiles' className='flex flex-col gap-2'>
              {ITEMS.map((item, index) => (
                <li id={`link` + index} key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className='md:col-start-4'>
            <ul id='others' className='flex flex-col gap-2'>
              <li>
                <a href='/'>
                  <span>Curriculum</span>
                </a>
              </li>
              <li>
                <a href='/'>
                  <span>Buy me Coffee</span>
                </a>
              </li>
              <li>
                <a href='/'>
                  <span>Ask me Anything</span>
                </a>
              </li>
            </ul>
          </div>

          <div className='md:col-start-5'>
            <ul id='profiles' className='flex flex-col gap-2'>
              {PROFILES.map((profile, index) => (
                <li id={`profile` + index} key={profile.name}>
                  <a href='/'>{profile.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <CopyrightSection />
    </footer>
  );
};

export default Footer;
