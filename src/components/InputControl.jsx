const InputControl = (props) => {
  return (
    <div className='w-full flex flex-col gap-4 py-2'>
        {props.label && <label className='font-bold text-base text-white-100'>{props.label}</label>}
        <input {...props} className='rounded-md border border-[#eee] outline-none py-[8px] px-[15px] text-[#000] hover:border-[#ccc] focus:border-[#9900ff]'/>
    </div>
  )
}

export default InputControl