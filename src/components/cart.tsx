"use client"

import { ShoppingCart } from "lucide-react"
import { Sheet , SheetTrigger , SheetContent , SheetHeader , SheetTitle , SheetFooter} from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
import Image from 'next/image'

const Cart = () => {
    const itemCount: number = 0
    const fee: number = 1

    return (
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center p-2'>
                <ShoppingCart
                    aria-hidden='true'
                    className='h-6 w-6 flex-shring-0 text-gray-400 group-hover:text-gray-500'
                />
                <span 
                    className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800:'
                >
                    0
                </span>
            </SheetTrigger>
            <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
                <SheetHeader className='space-y-2.5 pr-6'>
                    <SheetTitle>
                        {/* Cart ({itemCount}) */}
                        Cart (0)
                    </SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className='flex w-full flex-col pr-6'></div>
                        <div className='space-y-4 pr-6'>
                        <Separator />
                        <div className='space-y-1.5 text-sm'>
                            <div className='flex'>
                                <span className='flex-1'>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className='flex'>
                                <span className='flex-1'>Transaction Fee</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                            <div className='flex'>
                                <span className='flex-1'>Total</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href='/cart' className={buttonVariants({
                                    className: 'w-full' ,
                                })}>
                                    Continue to Checkout
                                </Link>
                            </SheetTrigger>
                        </SheetFooter>

                    
                        </div>
                    </>
                ) : (
                <div className='flex h-full flex-col items-center justify-center space-y-1'>
                    <div
                        aria-hidden='true'
                        className='relative mb-4 h-60 w-60 text-muted-foreground'>
                        <Image src='/L.png' 
                        fill
                        alt='empty shopping cart'/>
                    </div>
                    <div className='text-xl font-semibold'>
                        
                    </div>
                    <SheetTrigger asChild>
                   
                    </SheetTrigger>
                </div>
                )}
            </SheetContent>
        </Sheet>
    ) 
}

export default Cart