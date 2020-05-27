import Nav from '../components/Nav'
import react from 'react';
const IndexPage = () => {
  const [envs,setenv]=React.useState();
  console.log(envs);
  React.useEffect(()=>{
    setenv(`${process.env.EXAMPLE_KEY}`)
  },[])
 
  return(
  <>
    <Nav />
    <div> {envs}</div>
    
    <p>Hello, I'm the index page</p>
  </>
  )
}

export default IndexPage
