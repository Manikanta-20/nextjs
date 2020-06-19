import Nav from '../components/Nav'
const AboutPage = () => {

  const env_value=`${process.env.NEXT_PUBLIC_API_KEY}`;
  return(
  <>
    <Nav />
    
    {env_value}
    <p>Hello, I'm the about page</p>
  </>
  )
}
// export async function getStaticProps() {
//   console.log(process.env.API_KEY)
//   var envs=process.env.API_KEY;
//  return {props:{envs}}
// }
export default AboutPage
