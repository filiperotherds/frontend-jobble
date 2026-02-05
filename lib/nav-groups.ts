import {
  BanknoteArrowDown,
  CircleDashed,
  ClipboardList,
  LayoutGrid,
  Package,
  ScrollText,
  UsersRound,
} from "lucide-react";

export const navGroups = [
  {
    label: "Geral",
    items: [
      {
        title: "Visão Geral",
        url: "/overview",
        icon: LayoutGrid,
      },
    ],
  },
  {
    label: "Operacional",
    items: [
      {
        title: "Orçamentos",
        url: "/estimates",
        icon: ClipboardList,
        pending: 3,
      },
      {
        title: "Em Progresso",
        url: "/in-progress",
        icon: CircleDashed,
      },
      {
        title: "Pagamentos",
        url: "/payments",
        icon: BanknoteArrowDown,
      },
      {
        title: "Notas Fiscais",
        url: "/invoices",
        icon: ScrollText,
      },
    ],
  },
  {
    label: "Cadastros",
    items: [
      {
        title: "Itens",
        url: "/items",
        icon: Package,
      },
      {
        title: "Clientes",
        url: "/customers",
        icon: UsersRound,
      },
    ],
  },
];
