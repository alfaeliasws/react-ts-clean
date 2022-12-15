import { useEffect } from "react";

export function useFade(classname: string){
    useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                }
                else {
                    entry.target.classList.remove('show')
                }
            })
        });

        const checkElements = document.querySelectorAll(`.${classname}`)
        checkElements.forEach((el) => observer.observe(el))
    })
}