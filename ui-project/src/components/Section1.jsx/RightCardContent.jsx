

const RightCardContent = (props) => {
  return (
<div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
<h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center ">{props.id+1}</h2>
<div>
    <p className='text-xl leading-relaxed text-white mb-14 text-shadow-xl text-shadow-black/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, et? Laudantium quia ducimus aspernatur similique?

    </p>
    <div className='flex justify-between'>
        <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
<button className='bg-white text-black font-medium w-10 h-10 flex items-center justify-center rounded-full'> <i className="ri-arrow-right-line text-2xl"> </i></button>
    </div>
</div>
   </div>
  )
}

export default RightCardContent