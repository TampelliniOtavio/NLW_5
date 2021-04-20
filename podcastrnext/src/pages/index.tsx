// SPA -> single page application
// SSR -> server side rendering 
// SSG -> static side generation (Next.js)

import { useEffect } from "react"

export default function Home(props) {

  console.log(props.episodes)
  //SPA 
  // useEffect(()=>{
  //   fetch('http://localhost:3333/episodes')
  //     .then(response => response.json())
  //     .then(data =>console.log(data))
  // },[])

  return (
    <>
    <h1> Index </h1>
    {/* <p>{JSON.stringify(props.episodes)}</p> */}
    </>
  )
}

// SSR -> getServerSideProps
// SSG  -> getStaticProps + add revalidade  no return após props
export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  //retorna para o props da função Home(props)
  return {
    props:{
      episodes: data,
    },
    //gerar a cada 8h -> 60s * 60min * 8h
    revalidate: 60 * 60 * 8,
  }
}