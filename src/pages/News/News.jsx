import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Home/NewsCard";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

import LSImg1 from "../../assets/1.png"
import LSImg2 from "../../assets/1.png"
import LSImg3 from "../../assets/1.png"



const News = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>News Details</h2>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                  
                   <p>{id}</p>

                <div className="flex justify-center items-center gap-3">
                <img src={LSImg1} alt="" />
                <img src={LSImg2} alt="" />
                <img src={LSImg3} alt="" />
            </div>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>

                
            </div>
            
        </div>
    );
};

export default News;