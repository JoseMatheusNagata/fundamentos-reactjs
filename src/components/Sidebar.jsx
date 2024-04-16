
import { PencilLine } from "phosphor-react";

import style from './Sidebar.module.css';
import { Avatar } from "./Avatar";

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
        <img 
            className={style.cover} 
            src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
        />
        
        <div className={style.profile}>

            <Avatar hasBorder className="s" src="https://github.com/JoseMatheusNagata.png"/>

            <strong>Matheus</strong>
            <span>WEbdev</span>


        </div>

        <footer>
            <a href="#">
            <PencilLine size={20} />
            Editar seu perfil</a>
        </footer>
        
        </aside>
    );
}