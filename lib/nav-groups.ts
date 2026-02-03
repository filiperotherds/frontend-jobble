import { BanknoteArrowDown, CircleDashed, ClipboardList, LayoutGrid, Package, ScrollText, Users, Wrench } from "lucide-react";

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
        title: "Produtos",
        url: "/products",
        icon: Package,
      },
      {
        title: "Serviços",
        url: "/services",
        icon: Wrench,
      },
    ],
  },
  {
    label: "Relacionamento com Cliente",
    items: [
      {
        title: "Clientes",
        url: "/customers",
        icon: Users,
      },
    ],
  },
];