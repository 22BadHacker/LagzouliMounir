import React, {useState} from 'react'

const Form = () => {
  const [formData, setFormData] = useState({ firstName: "",lastName: '',number: '', email: "", message: "" });
  const [errors, setErrors] = useState({});
  
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "* First Name's required!";
    if (!formData.lastName) newErrors.lastName = "* Type Your Last Name!";
    if (!formData.number) newErrors.number = "* Don't Forget Your Number!";
    if (!formData.email) newErrors.email = "* Also Your email!";
    if (!formData.message) newErrors.message = "* Leave Me a message!";

    setErrors(newErrors);
  };

         
 
  return (
    <div id='getInTouch' className='w-full relative overflow-hidden rounded-3xl shadow-[2px_2px_3px_rgba(0,0,0,.15)] h-auto flex flex-col p-4 items-center md:p-8 lg:p-10 gap-4'>
      {/* <div class="absolute top-0 blur-[10px] left-0 z-[-2] h-screen w-screen rotate-180 transform bg-transparent bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div> */}
      <div class="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      <p className='headLine font-open-sans tracking-wide text-[50px] pb-5'>Get in Touch</p>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-8 gap-6 lg:gap-10">

          <div className="flex flex-col gap-1">
              <label className='text-[16px] font-open-sans'>First name</label>
              <input value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} type="text" className={`border-b-[1px] outline-none bg-transparent border-black/60`}/>
              {errors.firstName && <p className='text-[13px] text-red-600/90 font-semibold'>{errors.firstName}</p>}
          </div>
          <div className="flex flex-col gap-1">
              <label className='text-[16px] font-open-sans'>Last name</label>
              <input value={formData.lastName} onChange={(e)=> setFormData({ ...formData, lastName: e.target.value })} type="text" className='border-b-[1px] outline-none bg-transparent border-black/60'/>
              {errors.lastName && <p className='text-[13px] text-red-600/90 font-semibold'>{errors.lastName}</p>}
          </div>
          <div className="flex flex-col gap-1">
              <label className='text-[16px] font-open-sans'>Phone Number</label>
              <input value={formData.number} onChange={(e)=> setFormData({ ...formData, number: e.target.value })} type="text" className='border-b-[1px] outline-none bg-transparent border-black/60'/>
              {errors.number && <p className='text-[13px] text-red-600/90 font-semibold'>{errors.number}</p>}
          </div>
          <div className="flex flex-col gap-1">
              <label className='text-[16px] font-open-sans'>Email</label>
              <input value={formData.email} onChange={(e)=> setFormData({ ...formData, email: e.target.value })} type="text" className='border-b-[1px] outline-none bg-transparent border-black/60'/>
              {errors.email && <p className='text-[13px] text-red-600/90 font-semibold'>{errors.email}</p>}
          </div>
        </div>
          <div className="flex w-full flex-col gap-1">
              <label className='text-[16px] font-open-sans'>Your Message</label>
              <textarea value={formData.message} onChange={(e)=> setFormData({ ...formData, message: e.target.value })} type="text" className='border-b-[1px] max-h-[150px] h-[160px] min-h-[100px] outline-none bg-transparent border-black/60'/>
              {errors.message && <p className='text-[13px] text-red-600/90 font-semibold'>{errors.message}</p>}
          </div>


          <input type="submit" className='px-10 font-open-sans cursor-pointer py-4 mt-3 bg-black text-white rounded-full w-fit'  value="Send Message" />
      </form>
    </div>
  )
}

export default Form



// const toggle = () => {
//   setOpen(!open)
// }
// const active = open ? "active" : ''