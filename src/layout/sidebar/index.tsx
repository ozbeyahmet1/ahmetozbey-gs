import Image from "next/image";
import { useRouter } from "next/router";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import Menu from "../../component/menu";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="sidebar">
      <h1 className="sidebar_logo">
        <Image
          src="https://res.cloudinary.com/droheqpxn/image/upload/v1701058658/grenspark/greenspark-LOGO_lu8dz4.png"
          width={250}
          height={50}
          alt=""
        />
      </h1>
      <div className="sidebar_items">
        <Menu icon={<IoHomeOutline size={25} />} text="Home" isSelected={router.route == "/new"} href="/new" />
        <Menu
          icon={<IoCartOutline size={25} />}
          text="My Widgets"
          isSelected={router.route == "/new-my-widgets"}
          href="/new-my-widgets"
        />
      </div>
    </aside>
  );
}
