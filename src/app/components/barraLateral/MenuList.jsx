import { Menu } from "antd";
import "@fortawesome/fontawesome-free";
import { EnvironmentOutlined, UserOutlined, FileDoneOutlined, UserSwitchOutlined, DollarCircleOutlined } from "@ant-design/icons";

function MenuList() {
  return (
    <Menu
      theme="light"
      mode="inline"
      className="overflow-y-auto max-h-full mt-1 flex flex-col gap-4 text-sm"
    >
      <Menu.Item key="home" icon={<UserOutlined />}>Perfil</Menu.Item>
      <Menu.Item key="1" icon={<EnvironmentOutlined />}>Rutas</Menu.Item>
      <Menu.SubMenu key="subtask" icon={<FileDoneOutlined />} title="Asignación de tareas">
        <Menu.Item key="tarea1" icon={<i className="fa-brands fa-js"></i>}>tarea1</Menu.Item>
        <Menu.Item key="tarea2" icon={<i className="fa-brands fa-js"></i>}>tarea2</Menu.Item>
        <Menu.SubMenu key="subsubtask" icon={<i className="fa-brands fa-js"></i>} title="subtask">
          <Menu.Item key="subtarea2" icon={<i className="fa-brands fa-js"></i>}>subtarea2</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key="2" icon={<UserSwitchOutlined />}>Gestión de usuarios</Menu.Item>
      <Menu.Item key="3" icon={<DollarCircleOutlined />}>Pagos</Menu.Item>
      <Menu.Item key="3" icon={<DollarCircleOutlined />}>Pagos</Menu.Item>
      <Menu.Item key="3" icon={<DollarCircleOutlined />}>Pagos</Menu.Item>
      {/* Agrega más elementos si es necesario */}
      <Menu.Item key="3" icon={<DollarCircleOutlined />}>Pagos</Menu.Item>
      <Menu.Item key="3" icon={<DollarCircleOutlined />}>Pagos</Menu.Item>
    </Menu>
  );
}

export default MenuList;
