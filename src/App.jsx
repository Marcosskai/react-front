import { Header } from "./components/Header"
import { Post } from "./Post"

export function App() {

  return (
    <div className="bg-white">

      <Header/>

      <Post 
        author="Diego Fernandes"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ut. Magnam incidunt labore porro! Sapiente molestiae perferendis sunt necessitatibus error architecto minima nemo aspernatur! Pariatur dolores nam deserunt veniam voluptate?"
      />
      <Post 
        author="Marcos Gabriel"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ut. Magnam incidunt labore porro! Sapiente molestiae perferendis sunt necessitatibus error architecto minima nemo aspernatur! Pariatur dolores nam deserunt veniam voluptate?"
      />
    </div>
  )
}