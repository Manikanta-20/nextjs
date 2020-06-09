import Nav from '../components/Nav'
import react from 'react';
const IndexPage = () => {
  const [inputs,setInputs]=React.useState(`${process.env.NEXT_PUBLIC_API_KEY}`);
  

  return(
  <>
    <Nav />
    <div> {inputs}</div>
    <div>{process.env.NEXT_PUBLIC_API_KEY}</div>
    <input aria-label="testing input"  value={inputs} onChange={(event)=>setInputs(event.target.value)}/>
    <p>Hello, I'm the index page</p>
  </>
  )
}

export default IndexPage
