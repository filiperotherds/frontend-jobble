import { Archive, CreditCard, Inbox, LayoutDashboard, Package, ReceiptText, Users, Wrench } from "lucide-react";

export const navGroups = [
  {
    label: "Geral",
    items: [
      {
        title: "Início",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Faturamento",
        url: "/billing",
        icon: CreditCard,
      },
    ],
  },
  {
    label: "Operacional",
    items: [
      {
        title: "Orçamentos",
        url: "/estimates",
        icon: Inbox,
        pending: 3,
      },
      {
        title: "Serviços",
        url: "/service-orders",
        icon: ReceiptText,
      },
      {
        title: "Serviços Arquivados",
        url: "/archived-service-orders",
        icon: Archive,
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