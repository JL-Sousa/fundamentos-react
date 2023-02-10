import { Header } from "./components/Header";
import { Post } from "./post";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Jonyelson Lopes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.molestiae. At repellat corporis, mollitia error consequuntur accusantium quos quo, fugit neque optio, nihil inventore pariatur iure alias quasi possimus nam.
"
      />
    </>
  );
}
