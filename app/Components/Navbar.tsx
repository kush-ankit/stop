'use client'

import Image from "next/image";
export default function page() {
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1">
                <a className="normal-case text-2xl font-bold">stOp</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/nRH5Gxn/kush-ankit-boy-avatar-cf588cb5-f0b2-4311-9e11-a05eae005f8e-removebg-preview.png" alt="img" />
                        </div>
                    </label>
                    
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}