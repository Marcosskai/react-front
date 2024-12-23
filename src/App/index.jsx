import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Post } from "../components/Post"
import './App.css'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rockectseat',
    },
    content: [
      {type: 'paragraph', content: "Fala galeraa 👋"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link', content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Mayki Brito',
      role: 'Dev React',
    },
    content: [
      {type: 'paragraph', content: "Fala galeraa 👋"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link', content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
];

export function App() {

  return (
    <div className="bg-white">

      <Header/>

      <div className="wrapper">
        
        <Sidebar/>

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
             />
            )
          })}
        </main>
      </div>
    </div>
  )
}