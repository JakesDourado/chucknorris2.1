import styled from 'styled-components'


export const Main = styled.div`
margin: 0 auto;
 max-width: 900px;

 padding: 20px;

 ul{
    display: grid;
    gap:9px 5px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 900px;
    margin-top:40px;

    li{
        
        display:flex;
        justify-content:center;
        text-decoration: none;
        list-style: none;
        padding: 8px 0;
        background: #FFFFE0;
        border-radius: 5px;
        font-family: 'Roboto', sans-serif;
        font-weight:bold;
        color:#8B8989;
        transition:0.2s;
        cursor: pointer;
        &:hover { 
                        background: #EEE8AA;   
                    }
     
    }
 }
`
export const Card = styled.div`



display: flex;
justify-content: center;
align-items: center;


margin-top:20px;
padding:20px;
img{
    margin-right:15px;
   
}
h3{


margin-top:40px;
padding:20px;
}

`
export const Title = styled.h2`
 font-family: 'Roboto', sans-serif;
 display: flex;
 justify-content: center;
 color:#8B8989;
`
export const CardList = styled.div`
 font-family: 'Roboto', sans-serif;
 display: flex;
 justify-content: left;
 align-items:center;
 margin-top:10px;
 background:white;
 border-radius:5px;
 color:#8B8989;
 img{
     margin:10px;
 }

`
export const Input = styled.input` 
  width: 50%;
  margin: 10px 20px 10px 0;
 
  height: 40px;
  padding: 0 24px;
  border: 1px solid #DCDCDC;
  border-radius: 5px;
  color: #3a3a3a;
  &::placeholder {
  color: #a8a8b3;
}
&:focus{
    outline: 1px solid yellow;
}
`
export const Btn = styled.button` 
  width: 39%;
  margin: 10px 20px 10px 0;
  background: #FFD700;
 
  height: 40px;
  padding: 0 24px;
  border: 1px solid #DCDCDC;
  border-radius: 5px;
  color: #3a3a3a;
  font-size:20px;
  font-weight: bold;
  color: #868691;
  transition:0.2s;
  &::placeholder {
  color: #a8a8b3;
}
&:hover{
    background: #e4c203;
}
&:focus{
    outline: none;
}
`

