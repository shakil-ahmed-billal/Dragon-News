import moment from 'moment'
import logo from '../assets/logo.png'
import Marquee from 'react-fast-marquee'


const Header = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="flex flex-col justify-center items-center my-3">
                <img className='' src={logo} alt="" />
                <div className="my-3 text-center">
                    <p className='text-gray-500'>Journalism Without Fear or Favour</p>
                    <p> {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} </p>
                </div>
            </div>
            <div className="bg-gray-700">
                <div className="flex">
                    <button className='btn m-2 px-5 border-none text-white rounded-none bg-red-500'>Latest</button>
                    <Marquee>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum harum vero ratione mollitia veniam quas esse! Corporis dolor expedita quibusdam,</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum harum vero ratione mollitia veniam quas esse! Corporis dolor expedita quibusdam,</p>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Header