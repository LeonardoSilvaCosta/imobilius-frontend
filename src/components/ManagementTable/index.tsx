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
      <div
        className={
          entityType === "user"
            ? "table-container-user"
            : "table-container-real-state"
        }
      >
        {entityType === "user" ? (
          <table>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th className="user-name">Nome</th>
              <th className="user-email">E-mail</th>
              <th className="user-phone">Telefone</th>
              <th className="edit"></th>
              <th className="delete"></th>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td className="user-name">Leonardo Costa</td>
              <td className="user-email">leonardocostapsi@gmail.com</td>
              <td className="user-phone">(91) 98816-5507</td>
              <td className="edit">
                <span>
                  <button>
                    <FiEdit2 />
                    Editar
                  </button>
                </span>
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
              <th className="real-state-id">id</th>
              <th className="real-state-category">Categoria</th>
              <th className="real-state-real-state-description">Descrição</th>
              <th className="real-state-address">Endereço</th>
              <th className="real-state-value">Valor</th>
              <th className="edit"></th>
              <th className="delete"></th>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td className="real-state-id">001</td>
              <td className="real-state-category">Casa</td>
              <td className="real-state-real-state-description">1 sala, 2/4, 1 banheiro, sem garagem, 122m2</td>
              <td className="real-state-address">Rua esperança, satélite, 535, Belém-PA, 66458/758</td>
              <td className="real-state-value">R$ 100,00</td>
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
        <span>0 - 1 de 1</span>
        <div className="pagination-button-group">
          <button>1</button>
        </div>
      </div>
    </div>
  );
}
