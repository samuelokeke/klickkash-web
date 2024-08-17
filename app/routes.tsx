import CardIcon from "@/public/assets/jsx-icons/card";
import CardOutlinedIcon from "@/public/assets/jsx-icons/card-o";
import HomeIcon from "@/public/assets/jsx-icons/home";
import HomeOutlinedIcon from "@/public/assets/jsx-icons/home-o";
import ProfileIcon from "@/public/assets/jsx-icons/profile";
import ProfileOutlinedIcon from "@/public/assets/jsx-icons/profile-o";
import TransactionIcon from "@/public/assets/jsx-icons/transaction";
import TransactionOutlinedIcon from "@/public/assets/jsx-icons/transaction-o";

const activeClassNames = "fill-foreground group-hover:fill-white group-data-[current=true]:fill-white";

const inActiveClassNames = "stroke-foreground group-hover:stroke-white";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    activeIcon: <HomeIcon className="fill-foreground group-hover:fill-white group-data-[current=true]:fill-white" />,
    inactiveIcon: <HomeOutlinedIcon className="stroke-foreground group-hover:stroke-white" />,
  },
  {
    path: "/transactions",
    name: "Transaction",
    activeIcon: (
      <TransactionIcon className="fill-foreground group-hover:fill-white group-data-[current=true]:fill-white" />
    ),
    inactiveIcon: <TransactionOutlinedIcon className="stroke-foreground group-hover:stroke-white" />,
  },
  {
    path: "/cards",
    name: "Card",
    activeIcon: <CardIcon className="fill-foreground group-hover:fill-white group-data-[current=true]:fill-white" />,
    inactiveIcon: <CardOutlinedIcon className="stroke-foreground group-hover:stroke-white" />,
  },
  {
    path: "/profile",
    name: "Profile",
    activeIcon: <ProfileIcon className="fill-foreground group-hover:fill-white group-data-[current=true]:fill-white" />,
    inactiveIcon: <ProfileOutlinedIcon className="stroke-foreground group-hover:stroke-white" />,
  },
];

export default routes;
