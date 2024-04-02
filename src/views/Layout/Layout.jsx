
import { Outlet } from "react-router-dom";
import './Layout.css';

import Header from "../../shared/Header";

export default function Layout(){


    return(
        <>

            <div className="content-container">
                <Outlet/>

                
            </div>

        </>
    );
}