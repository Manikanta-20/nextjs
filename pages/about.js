import Nav from '../components/Nav'
const AboutPage = (envs) => {

  console.log(envs);
  const env_value=envs;
  return(
  <>
    <Nav />
    
    {env_value.envs}
    <p>Hello, I'm the about page</p>
  </>
  )
}
export async function getStaticProps() {
  console.log(process.env.API_KEY)
  var envs=process.env.API_KEY;
 return {props:{envs}}
}
export default AboutPage
