
import styled  from 'styled-components';


const Title=styled.h1`
font-size:40px
@media (max-width:500px)
{
    font-size:300px;
}
@media (min-width:700px)
{
    font-size:30px;
}

`



const Value=styled.h3`
`
const Button=styled.button`
background-color: ${props => props.theme.main};

color:white;
font-size:1em;
padding:0.5em;
margin:0 10px;
cursor:pointer;
width:300px;
border-radius:15px;
border-color:${props=>props.theme.border};

`

const InputData=styled.p`
  font-size:1.2em;
  color:white;
`

export {Title,Value,Button,InputData}