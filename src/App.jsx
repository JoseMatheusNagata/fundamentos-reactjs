
import { Header } from "./components/header";
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import style from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Matheus"
            content="daasdas"
          />

          <Post
            author="Felipe"
            content="daasdas"
          />
        </main>
      </div>

    </div>


  )
}