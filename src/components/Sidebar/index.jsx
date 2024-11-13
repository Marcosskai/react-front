import './Sidebar.css'

export function Sidebar() {
    return(
        <aside 
        className='sidebar'>
            <img 
            className='cover' 
            src="https://images.unsplash.com/photo-1730148139333-1dc38fa04f05?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div 
            className='profile'>
                <strong>Matheus Ferreira</strong>
                <span>Editor - After Effects</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}