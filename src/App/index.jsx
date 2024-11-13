import { Header } from "../components/Header"
import { Post } from "../Post"
import './App.css'

export function App() {

  return (
    <div className="bg-white">

      <Header/>

      <div className="wrapper">
        <aside>
          sidebar
        </aside>
        <main>
          <Post 
            author="Diego Fernandes"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ut. Magnam incidunt labore porro! Sapiente molestiae perferendis sunt necessitatibus error architecto minima nemo aspernatur! Pariatur dolores nam deserunt veniam voluptate?"
          />
         <Post 
            author="Marcos Gabriel"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ut. Magnam incidunt labore porro! Sapiente molestiae perferendis sunt necessitatibus error architecto minima nemo aspernatur! Pariatur dolores nam deserunt veniam voluptate?"
          />
        </main>
      </div>
    </div>
  )
}