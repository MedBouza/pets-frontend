import { logout } from "@/store/actions/userActions";
import { store, useAppDispatch, useAppSelector } from "@/store/store";
import Link from "next/link";
import { useMemo } from "react";
const logoutFromStore = () => store.dispatch(logout());
const Menu = () => {
  // const dispatch = useAppDispatch();
  // const logoutHandler = () => dispatch(logout());
  const navConnected = [
    { name: "Profil", href: "/profil" },
    { name: "Log Out", href: "/", onClick: logoutFromStore },
  ];

  const navNotConnected = [
    { name: "Sign In", href: "/signIn" },
    { name: "Sign Up", href: "/signUp" },
  ];

  const { isConnected } = useAppSelector((state) => state.user);
  const navLink = useMemo(
    () => (isConnected ? navConnected : navNotConnected),
    [isConnected]
  );
  return (
    <nav className="flex h-12 items-center px-4 justify-between shadow-md">
      <Link href="/" className="text-3xl font-bold text-pink-500">
        PetSave
      </Link>
      <div className="flex">
        {navLink.map((link) => (
          <Link
            key={link.href}
            className="px-3 py-2 mx-1 text-black hover:bg-pink-200 hover:text-white rounded-md  text-1xl"
            href={link.href}
            onClick={link?.onClick}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Menu;
