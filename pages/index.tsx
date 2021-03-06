import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import ProjectLists from '../components/ProjectLists'
import Project from '../interfaces/Project'
import { server } from '../config'

interface Home {
  projects: Array<Project>
}

const Home: NextPage<Home> = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>Mofajjal Rasul | Full-Stack Web Developer</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
      </Head>
      <Banner />
      <ProjectLists projects={projects} />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  }
}