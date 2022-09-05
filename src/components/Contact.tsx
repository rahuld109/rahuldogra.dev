import type { FC, ReactElement } from 'react';

const Contact: FC = (): ReactElement => {
  return (
    <section className='container h-max pt-2 tracking-wider'>
      <h1 className='text-4xl my-3'>Contact</h1>
      <div className='grid p-3 md:grid-cols-2'>
        <form
          autoComplete='off'
          className='md:mr-8'
          action='https://formsubmit.co/d76ee28af6d7ec2b3c527495e717dbd7'
          method='POST'
          encType='multipart/form-data'
        >
          <input type='text' name='_honey' className='hidden' />
          <input type='hidden' name='_template' value='table' />
          <input
            type='hidden'
            name='_autoresponse'
            value='You did it. I will get back to you soon enough.'
          />
          <div className='my-3'>
            <label htmlFor='name' className='block mb-2 text-md font-medium'>
              Full Name <span className='text-red-500 font-bold '> * </span>
            </label>
            <input
              className='block p-4 w-full dark:bg-neutral-800 rounded-lg border border-neutral-300 sm:text-md focus:ring-neutral-500 focus:border-neutral-500'
              required
              type='text'
              id='name'
              name='name'
              placeholder='Full Name'
            />
          </div>
          <div className='my-3'>
            <label htmlFor='email' className='block mb-2 text-md font-medium'>
              Email <span className='text-red-500 font-bold '> * </span>
            </label>
            <input
              className='block p-4 w-full dark:bg-neutral-800 rounded-lg border border-neutral-300 sm:text-md focus:ring-neutral-500 focus:border-neutral-500'
              type='email'
              id='email'
              name='email'
              placeholder='Email Address'
              required
            />
          </div>
          <div className='my-3'>
            <label
              htmlFor='attachment'
              className='block mb-2 text-md font-medium'
            >
              Attach a file (max. 8 MB)
            </label>
            <input
              className='block p-4 w-full dark:bg-neutral-800 rounded-lg border border-neutral-300 sm:text-md focus:ring-neutral-500 focus:border-neutral-500'
              type='file'
              id='attachment'
              name='attachment'
              accept='image/png, image/jpeg, application/pdf'
            />
          </div>
          <div className='my-3'>
            <label htmlFor='message' className='block mb-2 text-md font-medium'>
              Message
            </label>
            <textarea
              className='block p-4 w-full dark:bg-neutral-800 rounded-lg border border-neutral-300 sm:text-md focus:ring-neutral-500 focus:border-neutral-500'
              rows={4}
              cols={50}
              id='message'
              name='message'
              placeholder='Message'
            />
          </div>
          <div className='my-3 flex items-center justify-center'>
            <button
              className='text-white bg-red-600 rounded-lg px-5 py-2 my-2 w-full font-bold hover:bg-red-600'
              type='submit'
            >
              Send
            </button>
          </div>
        </form>
        <section className='md:p-5 text-xl font-light'>
          <div className='max-w-lg'>
            <p>
              To <b className='font-bold'>request a quote</b>, please include
              company and project information, your CV or LinkedIn profile, and
              availability for an online meeting.
            </p>
            <p className='mt-8'>
              If you are <b className='font-bold'>looking to recruit</b> or are
              <b className='font-bold'> interested in collaborating</b> on a
              project, please include your CV or LinkedIn profile and available
              timeslots for an online meeting.
            </p>
            <p className='mt-8'>
              Many thanks! • Rahul <span className='text-red-500'>Dogra</span>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
