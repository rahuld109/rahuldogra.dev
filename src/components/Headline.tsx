const Socials = () => {
  return (
    <div className='grid w-full grid-cols-1 grid-rows-3 gap-3 pt-3 mt-3 lg:grid-rows-1 md:grid-rows-1 lg:grid-cols-3 md:grid-cols-3 lg:w-2/3 md:w-full'>
      <article className='flex flex-col items-center justify-center w-full h-full p-6 text-center duration-500 border-2 border-gray-500 rounded shadow-xl cursor-pointer hover:scale-105 bg-neutral-800'>
        <h2 className='text-lg'>LinkenIn</h2>
        <p className='text-sm'>
          Primarily using for professional networking and showcasing career
          path.
        </p>
        <a
          className='mt-3 text-sm underline cursor-pointer text-rose-300 decoration-dotted underline-offset-2'
          href='https://www.linkedin.com/in/irahuldogra/'
          target='_blank'
          rel='noreferrer'
        >
          Visit Now
        </a>
      </article>
      <article className='flex flex-col items-center justify-center w-full h-full p-6 text-center duration-500 border-2 border-gray-500 rounded shadow-xl cursor-pointer hover:scale-105 bg-neutral-800'>
        <h2 className='text-lg'>Github</h2>
        <p className='text-sm'>Checkout my project contributions on github.</p>
        <a
          className='mt-3 text-sm underline cursor-pointer text-rose-300 decoration-dotted underline-offset-2'
          href='https://github.com/irahuldogra'
          target='_blank'
          rel='noreferrer'
        >
          Visit Now
        </a>
      </article>
      <article className='flex flex-col items-center justify-center w-full h-full p-6 text-center duration-500 border-2 border-gray-500 rounded shadow-xl cursor-pointer hover:scale-105 bg-neutral-800'>
        <h2 className='text-lg'>Twitter</h2>
        <p className='text-sm'>
          Using for social networking, development, and memes. 😛
        </p>
        <a
          className='mt-3 text-sm underline cursor-pointer text-rose-300 decoration-dotted underline-offset-2'
          href='https://twitter.com/_rahuldogra'
          target='_blank'
          rel='noreferrer'
        >
          Visit Now
        </a>
      </article>
    </div>
  );
};

const Headline = () => {
  return (
    <>
      <h2 className='text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold'>
        Rahul <span className='text-rose-500'>Dogra</span>
      </h2>
      <p className='text-2xl'>Full Stack Developer | Game Developer</p>
      <p className='text-center text-red-300 text-1xl'>
        Disclaimer: Website is in early development and final website could be
        entirely different.
      </p>
      <p className='text-red-300 text-1xl'>
        Until then checkout my other profiles. 🙏
      </p>
      <Socials />
    </>
  );
};

export default Headline;
