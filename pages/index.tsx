import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import ProjectLists from '../components/ProjectLists'
import Project from '../interfaces/Project'

interface Home {
  projects: Array<Project>
}

const Home: NextPage<Home> = ({ projects }) => {
  return (
    <div className='px-10'>
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
  const res = await fetch(`https://gist.githubusercontent.com/IMZihad21/87c7211efa951e1f10b4d4f5c89fc5d5/raw/portfolioData.json`);
  const portfolioData = await res.json();
  const projects = portfolioData.projects;

  return {
    props: {
      projects,
    },
  }
}