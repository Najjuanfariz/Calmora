import Navbar from "@/components/navigation-bar";
import { getUserSession } from "@/lib/getUserSession";

const NavbarWrapper = async () => {
  const { sessionToken, userId } = getUserSession();

  return <Navbar isLoggedIn={!!sessionToken || !!userId} />;
};

export default NavbarWrapper;
