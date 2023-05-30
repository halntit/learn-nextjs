'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const { data: session } = useSession()

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, [])

    return (
        <nav className="flex-between pt-3 mb-16 w-full">
            <Link href="/" className='flex gap-2 flex-center'>
                <Image src="/assets/images/logo.svg" width={30} height={30} alt="Promptopia Logo"
                    className='object-contain' />
                <p className="logo_text">Promptopia</p>
            </Link>

            {/* mobile menu */}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className='black_btn'>
                            Create Post
                        </Link>

                        <button className="outline_btn" onClick={signOut} type='button'>
                            {signOut}
                            Sign out
                        </button>

                        <Link href={'/profile'}>
                            <Image src={session?.user.image}
                                width={37} height={37}
                                className='rounded-full'
                                alt="profile" />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map(provider => (
                                
                                <button key={provider.name} onClick={() => signIn(provider.id)} type='button'>
                                    Sign in with {provider.name}
                                </button>
                            ))
                        }
                    </>
                )}
            </div>

            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Image src={session?.user.image}
                            width={37} height={37} 
                            className='rounded-full'
                            alt="profile"
                            onClick={() => setToggleDropdown((prev) => {
                                return !prev
                            })} />

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link href="/profile"
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}>
                                    My Profile
                                </Link>
                                <Link href="/create-prompt"
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}>
                                    Create Prompt
                                </Link>
                                <button className="mt-5 w-full black_btn" type='button'
                                    onClick={() => {
                                        signOut()
                                        setToggleDropdown(false)
                                    }}>
                                        Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map(provider => (

                                <button key={provider.name} onClick={() => signIn(provider.id)} type='button'>
                                    Sign in with {provider.name}
                                </button>
                            ))
                        }
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav