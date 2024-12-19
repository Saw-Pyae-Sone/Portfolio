function Footer()
{
    return(
        <>
            <footer className="bg-white-800 text-black py-6 text-center">
                <div className="container mx-auto">
                    <p>© 2024 Your Name. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com/yourname" className="hover:text-gray-400">GitHub</a>
                    <a href="https://linkedin.com/in/yourname" className="hover:text-gray-400">LinkedIn</a>
                    <a href="mailto:yourname@email.com" className="hover:text-gray-400">Email</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer