import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
const NotFound = () => {
    const router= useRouter()
    useEffect(() =>{
        setTimeout(() =>{
            router.push('/')
        },3000)
    },[])
    return (
        <div className="">
           <img className="w-full h-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqggTvGDk1ZJJkMAYKx4ZNXAXzZz-GiBs4Gg&usqp=CAU" alt="" />
        </div>
    )
}

export default NotFound;
