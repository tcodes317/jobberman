import { FaBars } from "react-icons/fa";

function Header(){
    return(
        <>
            <div className="relative flex items-center justify-between">
                <div className="relative">
                    <img src="https://www.jobberman.com/static-assets/img/ng/landscape.svg" alt="" />
                </div>
                <div>
                    <FaBars />
                </div>
            </div>
        </>
    )
}
export default Header;