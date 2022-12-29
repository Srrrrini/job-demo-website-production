import img from '../assets/images/not-found.svg' 
import Wrapper from '../assets/wrappers/ErrorPage'


const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={img}></img>
                <h3>Ohh! Page Not Found</h3>
                <p>We can't seem to find the page you're looking for</p>
                <a href='/landing'>Back Home</a>
            </div>
        </Wrapper>

    )
  }
  
  export default Error
  