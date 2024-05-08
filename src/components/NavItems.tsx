'use client';
import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { ClickOutside } from "@/hooks/cilck-outside";
import { handler } from "tailwindcss-animate";

const NavItems = () => {
    const [activeIndex , setActiveIndex] = useState<null | number>(null)
    const isAnyOpen = activeIndex !== null

    const navRef = useRef<HTMLDivElement | null>(null)
    ClickOutside(navRef, () => setActiveIndex(null))

    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
            if (e.key === 'Escap') {
                setActiveIndex(null)
            }
        }
        document.addEventListener('keydown', handler)

        return () => {
            document.removeEventListener('keydown' , handle)
        }
    },[])

    return (
        <div className='flex gap-4 h-full' ref={navRef}>
            {PRODUCT_CATEGORIES.map((category, i) => {
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null)
                    } else {
                        setActiveIndex(i)
                    }
                }

                const isOpen = i === activeIndex

                return (
                    <NavItem
                        category={category}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        key={category.value}
                        isAnyOpen={isAnyOpen} 
                    />
                )
            })}
        </div>
    );
};

export default NavItems
