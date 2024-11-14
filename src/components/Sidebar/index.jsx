import './Sidebar.css'
import Flame from '../../assets/Flame.png';
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return(
        <aside 
        className='sidebar'>
            <img 
                className='cover' 
                src="https://images.unsplash.com/photo-1730148139333-1dc38fa04f05?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             />
            <div 
                className='profile'>
                <img 
                    src={Flame} />
                <strong>Matheus Ferreira</strong>
                <span>Editor - Adobe After Effects</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}