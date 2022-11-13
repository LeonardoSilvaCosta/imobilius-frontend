import { Dispatch, SetStateAction } from "react";
import { BiTrash } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";

import "./styles.css";

interface ManagementTableProps {
  title: string;
  entityType: "user" | "real state";
  users?: User[];
  setUserFactory: Dispatch<SetStateAction<Data>>;
  realStates?: RealState[];
}

type User = {
  id: number;
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

export type Data = {
  users: User[] | undefined;
}

export function ManagementTable({
  title,
  entityType,
  users,
  setUserFactory,
  realStates,
}: ManagementTableProps) {


  function handleDelete(e: any, user_id: number) {
    let usersWithoutDeleteElement: User[] | undefined = [];
    usersWithoutDeleteElement = users?.filter((e: User) => {
      return e.id !== user_id
    })

    setUserFactory({ users: usersWithoutDeleteElement });
  }
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
            {users?.map((user: User) => (
              <tr key={user.id}>
                <>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="user-name">{user.name}</td>
                  <td className="user-email">{user.email}</td>
                  <td className="user-phone">{user.phone}</td>
                  <td className="edit">
                    <span>
                      <button type="button">
                        <FiEdit2 />
                        Editar
                      </button>
                    </span>
                  </td>
                  <td className="delete">
                    <BiTrash onClick={(e) => handleDelete(e, user.id,)} className="trash-icon" />
                  </td>
                </>
              </tr>
            ))}
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
            {realStates?.map((realState: RealState) => (
              <tr key={realState.id}>
                <>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="real-state-id">{realState.id}</td>
                  <td className="real-state-category">{realState.category}</td>
                  <td className="real-state-real-state-description">
                    {realState.description}
                  </td>
                  <td className="real-state-address">{realState.address}</td>
                  <td className="real-state-value">{realState.value}</td>
                  <td className="edit">
                    <button type="button">
                      <FiEdit2 />
                      Editar
                    </button>
                  </td>
                  <td className="delete">
                    <BiTrash className="trash-icon" />
                  </td>
                </>
              </tr>
            ))}
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
