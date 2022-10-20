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
                <div className="menu-line">
                <MdOutlineDashboard className="icon" />
                Dashboard
                </div>
              </a>
            </ul>
            <ul>
              <a href="#">
                <div className="menu-line">
                <FiUser className="icon" />
                Usuários
                </div>
              </a>
            </ul>
            <ul>
              <a href="#">
                <div className="menu-line">
                <FiHome className="icon" />
                Imóveis
                </div>
              </a>
            </ul>
          </li>
        </div>
        <hr className="divider" />
        <div className="second-menu-list">
          <li>
            <ul>
              <a href="#">
                <div className="menu-line">
                <IoMdExit className="icon" />
                Sair
                </div>
              </a>
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}
