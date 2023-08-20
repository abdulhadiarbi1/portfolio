'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Drawer } from 'vaul';
import MagneticFramer from '../MagneticFramer';
const Contact = () => {
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [comapny, setCompany] = useState("");
    const [message, setMessage] = useState("");

    const HandleChange = (e) => {
        setText(e.target.value);
    };
    const HandleChange1 = (e) => {
        setName(e.target.value);
    };
    const HandleChange2 = (e) => {
        setPhone(e.target.value);
    };
    const HandleChange3 = (e) => {
        setCompany(e.target.value);
    };
    const HandleChange4 = (e) => {
        setMessage(e.target.value);
    };
    return (
        <div>
            <Drawer.Root className=''>
                <Drawer.Trigger asChild>
                    <div className='flex justify-center mt-16'>
                        <button className='w-auto  text-white bg-black  h-auto p-4 rounded-xl '>Contact Me </button>
                    </div>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                    <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
                        <div className="p-4 bg-white rounded-t-[10px] ">
                            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                            <div className="">

                                <div className="w-full mt-20 md:mt-0  h-full ">
                                    <h1 className=" text-black font-bold mb-8 flex justify-center lg:ml-20  text-lg sm:text-2xl  tracking-wider mt-8 pt-8">
                                        Let's start a project together
                                    </h1>

                                    <div className='flex justify-between   lg:px-64'>

                                        <div className="flex justify-start lg:ml-10 ">
                                            <div className="">
                                                <form
                                                    target="_blank"
                                                    action="https://formspree.io/f/xpzgqqbz"
                                                    method="POST"
                                                    className=""
                                                >
                                                    <div className='flex flex-col gap-5  lg:w-[700px]'>
                                                        <div>
                                                            <div className='flex gap-4 text-black'>
                                                                <div className='text-xs font-bold hidden sm:block'>01</div>
                                                                <div className='sm:text-2xl text-lg uppercase'>What's your name ?</div>
                                                            </div>

                                                            <div className='mt-1'>
                                                                <input type="text" placeholder='Abdul hadi' required value={name} onChange={HandleChange1} className='bg-white text-black lg:w-[700px] text-xl lg:ml-10  h-10' />
                                                            </div>


                                                        </div>

                                                        <div>
                                                            <div className='flex gap-4 text-black'>
                                                                <div className='text-xs font-bold hidden sm:block'>02</div>
                                                                <div className='sm:text-2xl text-lg uppercase'>What's your email?</div>
                                                            </div>

                                                            <div className='mt-1'>
                                                                <input type="email" placeholder='hadi@abdulhadi.com' required value={text} onChange={HandleChange} className='bg-white text-black lg:w-[700px] text-xl lg:ml-10  h-10' />
                                                            </div>


                                                        </div>

                                                        <div>
                                                            <div className='flex gap-4 text-black'>
                                                                <div className='text-xs font-bold hidden sm:block'>03</div>
                                                                <div className='sm:text-2xl text-lg uppercase'>What's the name of your organization?</div>
                                                            </div>

                                                            <div className='mt-1'>
                                                                <input type="text" placeholder='Brilliant IT Solutions' required value={comapny} onChange={HandleChange3} className='bg-white text-black lg:w-[700px] text-xl lg:ml-10 h-10' />
                                                            </div>


                                                        </div>

                                                        <div>
                                                            <div className='flex gap-4 text-black'>
                                                                <div className='text-xs font-bold hidden sm:block'>04</div>
                                                                <div className='sm:text-2xl text-lg uppercase'>What services are you looking for?</div>
                                                            </div>

                                                            <div className='mt-1'>
                                                                <input type="text" placeholder='Web Design , Web Development' required value={phone} onChange={HandleChange2} className='bg-white text-black lg:w-[700px] text-xl lg:ml-10  h-10' />
                                                            </div>


                                                        </div>

                                                        <div>
                                                            <div className='flex gap-4 text-black'>
                                                                <div className='text-xs font-bold hidden sm:block'>05</div>
                                                                <div className='sm:text-2xl text-lg uppercase'>Your message</div>
                                                            </div>

                                                            <div className='mt-1'>
                                                                <textarea
                                                                    value={message}
                                                                    onChange={HandleChange4}
                                                                    placeholder='Need Frontend Developer'
                                                                    className='bg-white text-xl lg:ml-10  h-20 w-[300px] lg:w-[700px] text-black' />
                                                            </div>


                                                        </div>


                                                    </div>
                                                    <div className='flex justify-start'>
                                                        <button
                                                            type="submit"
                                                            className="p-2 w-[300px] sm:w-[600px] mt-4 h-10 rounded-lg bg-black text-white mb-4  "
                                                        >
                                                            Send Message
                                                        </button>
                                                    </div>

                                                </form>


                                            </div>
                                        </div>

                                        <div className='hidden lg:flex lg:flex-col lg:gap-12'>
                                            <div>
                                                <h1 className='text-lg font-bold uppercase' >CONTACT DETAILS</h1>
                                                
                                                <MagneticFramer><h1 className='hover:underline transition-all'>+923120202881</h1></MagneticFramer>
                                                <MagneticFramer><h1 className='hover:underline transition-all'>ah912425@gmail.com</h1></MagneticFramer>
                                                
                                            </div>
                                            <div>
                                                <h1 className='text-lg font-bold uppercase'>BUSINESS DETAILS</h1>
                                                
                                                <MagneticFramer><h1 className='hover:underline transition-all'>Location: Pakistan</h1></MagneticFramer>
                                                <MagneticFramer><h1 className='hover:underline transition-all'>Category: Developer</h1></MagneticFramer>
                                                <MagneticFramer><h1 className='hover:underline transition-all'>Freelancer</h1></MagneticFramer>
                                                
                                            </div>
                                            <div>
                                                <h1 className='text-lg font-bold uppercase'>SOCIALS</h1>
                                                <div className='flex flex-col'>
                                                
                                                <MagneticFramer><Link className='hover:underline transition-all' href={'https://github.com/abdulhadi240'} target='_blank'>Github</Link></MagneticFramer>
                                                <MagneticFramer><Link className='hover:underline transition-all' href={'https://www.linkedin.com/in/abdul-hadi-28a46221b/'} target='_blank'>Linkedin</Link></MagneticFramer>
                                                <MagneticFramer><Link className='hover:underline transition-all' href={'https://api.whatsapp.com/send/?phone=%2B923120202881&text&type=phone_number&app_absent=0'} target='_blank'>Whatsapp</Link></MagneticFramer>
                                                <MagneticFramer><Link className='hover:underline transition-all' href={'https://mail.google.com/mail/?view=cm&to=ah912425@gmail.com&su=Your%20Subject&body=Your%20Message'} target='_blank'>Email</Link></MagneticFramer>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Drawer.Content>

                </Drawer.Portal>
            </Drawer.Root>
        </div>


    )
}

export default Contact