import styled from 'styled-components';

export const Nav = styled.nav`

  background:linear-gradient(135deg, #C56CD6 0%,#3425AF 100%);
  /* background:linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%); */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 15vh;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }

  input {
    font-size: 20px;
    margin: 0.5vw;
    display: block;
    height: 7vh;
    width: 30vh;
    padding: 5px 10px;
    background: #EEE;
    background-image: none;
    border: 2px solid #444;
    border-radius: 0.5vh;
    color: #444;
    /* -webkit-transition: border-color .25s ease, box-shadow .25s ease; */
    /* transition: border-color .25s ease, box-shadow .25s ease;background: '#000'; */
  }

  button {
    background: none;
    line-height: 1;
    margin: 0.5vw;
    padding: 5px 10px;
    font-size: 20px;
    height: 7vh;
    width: 30vh;  
    cursor: pointer; 
  }

  button.safe {
    border: 2px solid #77DD77;
    color: #77DD77;
    transition: color 0.5s, background 0.5s;
  }
    button.safe:hover{
    color: #444;
    background: #77DD77;
    transition: color 0.5s, background 0.5s;
  }

  button.warning {
    border: 2px solid #FDFD98;
    color: #FDFD98;
  }
  button.warning:hover{
    color: #444;
    background: #FDFD98;
    transition: color 0.5s, background 0.5s;
  }

  button.danger {
    border: 2px solid #FE6B64;
    color: #FE6B64;
  }
  button.danger:hover{
    color: #444;
    background: #FE6B64;
    transition: color 0.5s, background 0.5s;
  }

`

