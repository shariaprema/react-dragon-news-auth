import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LSImg1 from "../../../assets/1.png"
import LSImg2 from "../../../assets/2.png"
import LSImg3 from "../../../assets/3.png"

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-6 items-center">
            <h2 className="text-2xl py-2 bg-slate-300 text-center">All Categories</h2>
            <div className="text-justify">
            {
                categories.map(category => <Link 
                    className="block my-3 text-slate-600 ml-4 text-base font-medium" 
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}</Link>)
            }
            </div>

            <div>
                <img src={LSImg1} alt="" />
                <img src={LSImg2} alt="" />
                <img src={LSImg3} alt="" />
            </div>
        </div>
    );
};

export default LeftSideNav;