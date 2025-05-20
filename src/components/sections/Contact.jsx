export const Contact=()=>{
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                     Contact
                </h2>
                <h2 className=" flex justify-center text-xl font-bold mb-4">
                    Let's stay in touch !
                </h2>

            

        <a
          href="mailto:suhane17.harsh@gmail.com"
          className=" flex justify-center text-blue-400 hover:underline"
        >
          suhane17.harsh@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/harsh-suhane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/HARSHSUHANE17"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:suhane17.harsh@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
            </div>
        </section>
    )
}