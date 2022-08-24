import React from 'react';
import { Link } from "react-router-dom"
import Book from "../book.png"
import Booklist from "../booklists.jpg"

const Home = () => {
    return (
        <div className="HomePage" style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px" ,padding:"70px"}} >

            <div className="col-md-6 m-auto " style={{display:"flex", justifyContent:"center", width:"30%", backgroundColor:"white",padding:"50px"}}>
                <div className="card"style={{textDecoration:"none"}}>
                   <img src={Booklist} alt="StudentIMage" style={{height:"125px",width:"125px"}} />
                   <br />
                   <Link className="link_class" style={{textDecoration:"none"}} to="/booklist"> Book List</Link>
                </div>
                <div className="card" style={{marginLeft:"10%"}}>
                   <img src={Book} alt="StudentIMage" style={{height:"125px",width:"125px"}} />
                   <br />
                   <Link className="link_class" style={{textDecoration:"none"}} to="/addbooks"> Add Book </Link>  
                </div>
            </div>           
        </div>
    );
};

export default Home;
