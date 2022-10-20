import { FiUser, FiHome } from "react-icons/fi";
import { IoMdExit } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";

import "./styles.css";

export function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="menu">
        <div className="first-menu-list">
          <li>
            <ul>
              <a href="#">
                <MdOutlineDashboard className="icon" />
                Dashboard
              </a>
            </ul>
            <ul>
              <a href="#">
                <FiUser className="icon" />
                Usuários
              </a>
            </ul>
            <ul>
              <a href="#">
                <FiHome className="icon" />
                Imóveis
              </a>
            </ul>
          </li>
        </div>
        <hr className="divider" />
        <div className="second-menu-list">
          <li>
            <ul>
              <a href="#">
                <IoMdExit className="icon" />
                Sair
              </a>
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}
