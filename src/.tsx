import styled from "styled-components";
import "./App.css";
import cvInfo from "../cvInfo.json";
const palette = {
  first: "#12372A",
  second: "#436850",
  third: "#ADBC9F",
  fourth: "#FBFADA",
};

const Layout = styled.div`
npm install styled-components
display: flex;
    background-color: ${palette.fourth};
    width: 80vw;
    height: 120vh;
`;
const SideSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  background-color: ${palette.first};
`;
const Propic = styled.img`
  margin: 18px;e
  border-radius: 20pc;
`;

function App() {
  return (
    <Layout>
      <SideSection>
        <Propic src={cvInfo.informazioniPersonali.foto} alt="" />
      </SideSection>
      <div></div>
    </Layout>
  );
}

export default App;
