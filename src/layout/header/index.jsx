import React from 'react'
import './index.css'
import { headerData } from '../headerData'
const Header = () => {
    // const [navbar, setNavbar] = useState(['Home', 'Genre', 'LeaderBoard', 'DailyQuiz', 'Logout'])
    const navbar = [
        "Home" , "Genre" , "LeaderBoard" , "DailyQuiz" , "Logout"
    ]
    return (
        <>
            <div className="container-fluid">
                <div className="row m-2">
                    <div className="col-md-12 m-0 p-0 header-section">
                        {
                            navbar.map((value, index) => {
                                return (
                                    <>
                                        <div className='data-nav' key={index + 1}>
                                            <p className='navbar-data'>{value}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='header-bottom '>
                       {
                        headerData.map((value , index)=>{
                            return(
                                <div key={index+1} className='bottom-header'>
                            <img src={value.img} alt="" style={{
                                width:"2rem" , borderRadius:"1rem"
                            }} />
                            <p>{value.name}</p>
                         </div>
                            )
                         
                        })
                       }
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Header