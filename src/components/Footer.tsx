import React from 'react'

function Footer() {
  return (
    <footer className=' bg-black text-gray-400 py-12'>
    <div className=' max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
            <h1 className=' text-xl font-bold mb-4'>About Us</h1>
            <p>Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.</p>
        </div>
        <div className=' w-1/4'>
            <h1 className=' text-xl font-bold mb-4'>Quick Links</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <h1 className=' text-xl font-bold mb-4'>Follow Us</h1>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
        <div>
            <h1 className=' text-xl font-bold mb-4'>Contact Us</h1>
            <ul>
                <li>Indore, India</li>
                <li>Indore 452001</li>
                <li>Email: info@musicschool.com</li>
                <li>Phone: (123) 456-7890</li>
            </ul>
        </div>
    </div>
    <div className=' text-center py-8 bg-black'>
        <p className=' text-xs'>© 2024 Music School. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer