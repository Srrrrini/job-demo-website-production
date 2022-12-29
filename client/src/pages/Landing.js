import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import styled from 'styled-components'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo></Logo>
        </nav>
    <div className='container page'>
    <div className='info'>
        <h1>
            job <span>tracking</span> app
        </h1>
        <p>
        Employment is a relationship between two parties regulating the provision of paid labour services.
         Usually based on a contract, one party, the employer, which might be a corporation, a not-for-profit
        organization, a co-operative, or any other entity, pays the other, the employee, in return for carrying 
        out assigned work.Employees work in return for wages, which can be paid on the basis of an hourly
        rate, by piecework or an annual salary, depending on the type of work an employee does, the prevailing
        conditions of the sector and the bargaining power between the parties.
        </p>
        <Link className='btn btn-hero' to='/register'>Login/Register</Link>
    </div>
    <img src={main} className='img main-img'></img>
    </div>
    </Wrapper>
  )
}



export default Landing
