import styled from 'styled-components'

export const MainHeader = styled.header`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-bottom: 1vh;

  h1 {
    font-size: 2vw;
    font-weight: bold;
    padding: 1vw;
  }

  p {
    font-size: 0.75vw;
  }
`

export const Section = styled.section`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  height: 100%;
  width: 100%;
`

export const Table = styled.article`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 50%;

table {
  border: 2px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 75%;
  table-layout: fixed;
}

table th,
table td {
  padding: .3vw;  
  text-align: center;
  font-size: .85vw;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .3vw;
}

table th {
  font-size: .85vw;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: bold;
}
`
export const Graph = styled.article`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 50%;
`