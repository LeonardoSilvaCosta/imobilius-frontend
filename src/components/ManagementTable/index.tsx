import { BiTrash } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";

import "./styles.css";

interface ManagementTableProps {
  title: string;
  entityType: "user" | "real state";
}

type User = {
  name: string;
  email: string;
  phone: string;
};

type RealState = {
  id: number;
  category: string;
  description: string;
  address: string;
  value: number;
};

export function ManagementTable({ title, entityType }: ManagementTableProps) {
  return (
    <div className="management-table-container">
      <header>
        <h2>{title}</h2>
        <button>+ Criar novo</button>
      </header>
      <div className="table-container">
        {entityType === "user" ? (
          <table>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th className="edit"></th>
              <th className="delete"></th>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Leonardo Costa</td>
              <td>leonardocostapsi@gmail.com</td>
              <td>(91) 98816-5507</td>
              <td className="edit">
                <button>
                  <FiEdit2 />
                  Editar
                </button>
              </td>
              <td className="delete">
                <BiTrash className="trash-icon" />
              </td>
            </tr>
          </table>
        ) : (
          <table>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>id</th>
              <th>Categoria</th>
              <th>Descrição</th>
              <th>Endereço</th>
              <th>Valor</th>
              <th className="edit"></th>
              <th className="delete"></th>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>001</td>
              <td>Casa</td>
              <td>1 sala, 2/4, 1 banheiro, sem garagem, 122m2</td>
              <td>Rua esperança, satélite, 535, Belém-PA, 66458/758</td>
              <td>R$ 100,00</td>
              <td className="edit">
                <button>
                  <FiEdit2 />
                  Editar
                </button>
              </td>
              <td className="delete">
                <BiTrash className="trash-icon" />
              </td>
            </tr>
          </table>
        )}
      </div>
      <div className="pagination-container">
        <span>0 - 2 de 2</span>
        <div className="pagination-button-group">
          <button>1</button>
        </div>
      </div>
    </div>
  );
}
