'use client'
function page() {
  return (
    <div className="mt-36 text-center m-4">
        <h2 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Contact Us</h2>

        <p className="text-xl m-4 text-center">We're here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.</p>

        <form className="space-y-4 mt-4">
            <input className ="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            type="email" placeholder="Your email address" />
            <textarea placeholder="Your message" className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"></textarea>
            <button type="submit" className=" px-6 py-2 rounded-lg  border bg-white text-black      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Send Message</button>
        </form>
    </div>
  )
}

export default page