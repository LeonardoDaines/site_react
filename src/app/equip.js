import React from "react";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import businesSwoman1 from "./image/business woman1.jpg"
import businesSwoman2 from "./image/business woman2.jpg"
import businesSwoman3 from "./image/business woman3.jfif"
import businesSwoman4 from "./image/business woman4.jpg"

function Equip(props){
    return (
        <header className='equip'>
                <div className="equipTitle">
                    <h3>{props.titulo}</h3>
                    <h2>{props.subtitulo} </h2>
                </div>
                <div className="cardEquip">
                    <div className="main">
                        <div data-aos="fade-right">
                            <img src={businesSwoman1} alt="img" width="280" height="200"/>
                            <button className="mybuttonEquip">Josy Hair <br/> Estetica </button>
                        </div >  
                    </div >
                    <div className="main">
                        <div data-aos="fade-right">
                            <img src={businesSwoman2} alt="img" width="280" height="200"/>
                            <button className="mybuttonEquip">Helena <br/> Manicure</button>
                        </div>  
                    </div>
                    <div className="main">
                        <div data-aos="fade-right">
                            <img src={businesSwoman3} alt="img" width="280" height="200"/>
                            <button className="mybuttonEquip">Alice <br/> cabeleireira</button>
                        </div>  
                    </div>
                    <div className="main">
                        <div data-aos="fade-right">
                            <img src={businesSwoman4} alt="img" width="280" height="200"/>
                            <button className="mybuttonEquip">Valentina <br/> cabeleireira</button>
                        </div>  
                    </div>
                </div>
                <div className="equipTitle">
                    <Link to="/Squad">
                    <button className="mybuttonEquip" data-aos="fade-up">Saiba Mais</button>
                    </Link>
                </div>
        </header>
        
      );    
}
export default Equip;