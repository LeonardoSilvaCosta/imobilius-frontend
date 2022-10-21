import "./styles.css";

export function ManagementTable() {
  return (
    <div className="management-table-container">
      <header>
        <h2>Usuários</h2>
        <button>+ Criar novo</button>
      </header>
      <div className="table-container">
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
              <button>Editar</button>
            </td>
            <td className="delete">Trash</td>
          </tr>
        </table>
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
