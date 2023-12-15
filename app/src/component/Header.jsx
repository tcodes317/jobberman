import { FaAngleDown, FaBars, FaUser, FaUserCircle } from "react-icons/fa";
// import Link from "react-router-dom";

function Header(){
    return(
        <>
            <div className="relative flex items-center justify-between px-5 py-2">
                <div className="relative flex items-center gap-12">
                        <img src="https://www.jobberman.com/static-assets/img/ng/landscape.svg" alt="" className="w-2/12"/>
                    
                    <ul className="gap-11 w-full hidden lg:flex items-center">
                        {/* <Link to="/"> */}
                            <li>My Job Applications</li>
                        {/* </Link> */}
                        {/* <Link to="/"> */}
                            <li>My Job Alerts</li>
                        {/* </Link> */}
                        <div className="relative">
                            <div className="flex items-center">
                                <li>Resource Center</li>
                                <FaAngleDown className="ml-2"/>
                            </div>
                            <ul className="absolute hidden">
                                <li>Jobberman Plus</li>
                                <li>Youth Engagement</li>
                                <li>Job Search Advice</li>
                                <li>Soft Skill Training</li>
                                <li>Professional CV Service</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        
                        <div className="relative">
                            <div className="flex items-center">
                                <li>Help Center</li>
                                <FaAngleDown className="ml-2"/>
                            </div>
                            <ul className="absolute hidden">
                                <li>Frequently Asked Questions</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="xl:hidden xxxs:block">
                    <svg x-show="!open" fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
</svg>
                    </div>
                    <div className="items-center xxxs:hidden xl:flex">
                        <div className="border-r-2">
                            <button className="p-3 border-2 py-2 rounded-lg mr-12 px-5 flex items-center justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#004AB9" class="inline text-pri-default" role="presentation" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                            <span>Find a Job</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2 ml-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" class="" role="presentation" aria-hidden="true">
<circle cx="16" cy="16" r="12.25" fill="none" stroke="currentColor" stroke-width="2"></circle>
<path d="M17.9503 19.2504H21.2003L20.2871 18.3372C20.0394 18.0895 19.9003 17.7536 19.9003 17.4034V15.3504C19.9003 13.6523 18.815 12.2077 17.3003 11.6723V11.4504C17.3003 10.7324 16.7183 10.1504 16.0003 10.1504C15.2823 10.1504 14.7003 10.7324 14.7003 11.4504V11.6723C13.1855 12.2077 12.1003 13.6523 12.1003 15.3504V17.4034C12.1003 17.7536 11.9612 18.0895 11.7135 18.3372L10.8003 19.2504H14.0503M17.9503 19.2504V19.9004C17.9503 20.9773 17.0772 21.8504 16.0003 21.8504C14.9233 21.8504 14.0503 20.9773 14.0503 19.9004V19.2504M17.9503 19.2504H14.0503" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" class="" role="presentation" aria-hidden="true">
<path d="M20 13.3333C20 15.5425 18.2091 17.3333 16 17.3333C13.7909 17.3333 12 15.5425 12 13.3333C12 11.1242 13.7909 9.33333 16 9.33333C18.2091 9.33333 20 11.1242 20 13.3333Z" fill="none"></path>
<path d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="none"></path>
<path d="M6.82805 23.7383C9.53689 22.2072 12.6664 21.3333 16 21.3333C19.3336 21.3333 22.4631 22.2072 25.172 23.7383M20 13.3333C20 15.5425 18.2091 17.3333 16 17.3333C13.7909 17.3333 12 15.5425 12 13.3333C12 11.1242 13.7909 9.33333 16 9.33333C18.2091 9.33333 20 11.1242 20 13.3333ZM28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;