import { BsArrowDownCircleFill } from "react-icons/bs";

import houseImg from "../../assets/images/first-house.svg";
import "./styles.css";

export function Recommendations() {
  const dataForTest = [
    {
      id: 1234,
      image: houseImg,
      name: "Casa em Ipiranga",
      address: "Rua das orquídeas, 88, Nova Ipiranga, RJ",
    },
    {
      id: 1324,
      image: houseImg,
      name: "Casa em Ipiranga",
      address: "Rua das orquídeas, 88, Nova Ipiranga, RJ",
    },
    {
      id: 1234,
      image: houseImg,
      name: "Casa em Ipiranga",
      address: "Rua das orquídeas, 88, Nova Ipiranga, RJ",
    },
    {
      id: 1324,
      image: houseImg,
      name: "Casa em Ipiranga",
      address: "Rua das orquídeas, 88, Nova Ipiranga, RJ",
    },
  ];
  return (
    <section className="recommendations-container">
      <header className="recommendations-header">
        <h3>RECOMENDAÇÕES COM BASE EM SEU PERFIL</h3>
        <BsArrowDownCircleFill className="recommendations-arrow" />
      </header>
      <main className="recommendations-main">
        {dataForTest.map((e) => (
          <div key={e.id} className="card">
            <table>
              <tbody>
                <tr>
                  <td>
                    <img src={e.image} alt="house" />
                  </td>
                  <td>{e.name}</td>
                  <td>{e.id}</td>
                  <td>{e.address}</td>
                  <td>
                    <button type="button">Saiba mais</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </main>
    </section>
  );
}
