import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import Login from './Login'; // Import the Login component if it's in a separate file

const Contact = () => {
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className='w-[600px]'>
          <div className='modal-box'>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
              <h3 className="font-bold text-lg">Contact Us</h3>
              {/* Name */}
              <div className='mt-2 space-y-2'>
                <span>Name</span>
                <br />
                <input type="text" placeholder='Enter Your Fullname' className='w-80 px-3 py-1 border rounded-md outline-none' />
                <br />
              </div>
              {/* Email */}
              <div className='mt-2 space-y-2'>
                <span>Email</span>
                <br />
                <input type="email" placeholder='Email address' className='w-80 px-3 py-1 border rounded-md outline-none' />
                <br />
              </div>
              {/* message */}
              <div className='mt-2 space-y-2'>
                <span>Message</span>
                <br />
                <input type="text" placeholder='Type Your Message ' className='w-80 px-3 py-1 border rounded-md outline-none' />
                <br />
              </div>
              {/* Button */}
              <div className='flex justify-around mt-4'>
                <input type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
