
export const Container = ({ title, text }) => {
 

  return ( <>
   <div>
   
                  <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
                 <h3 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-2xl">{title}</h3>
                 <p className="mt-4 text-gray-500">{text}</p>
    
            
     </div> 
    </>)
   
  
}
