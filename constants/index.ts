export const sidebar = [
  {
    title: "All Invoices",
    description: "Week comparison",
    progress: {
      value: 80,
    },
    value: "1.345",
    growth: true,
    color: "#5E81F4",
  },
  {
    title: "Scheduled",
    description: "Month comparison",
    progress: {
      value: 65,
    },
    value: "3.82",
    growth: false,
    color: "#F4BE5E",
  },
  {
    title: "Unpaid",
    description: "Week comparison",
    progress: {
      value: 29,
    },
    value: "$4690",
    growth: true,
    color: "#FF808B",
  },
  {
    title: "Paid",
    description: "Month comparison",
    progress: {
      value: 85,
    },
    value: "$3820",
    growth: true,
    color: "#7CE7AC",
  },
];

export const toolbar = [
  {
    icon: "/timer.svg",
    path: "/admin/timer",
    title: "timer",
  },
  {
    icon: "/business.svg",
    title: "business",
    path: "/admin/business",
  },
  {
    icon: "/note.svg",
    title: "notes",
    path: "/admin/note",
  },
  {
    icon: "/layer.svg",
    title: "layers",
    path: "/admin/layer",
  },
  {
    icon: "/calender.svg",
    title: "calender",
    path: "/admin/calender",
  },
  {
    icon: "/user.svg",
    title: "users",
    path: "/admin/user",
  },
  {
    icon: "/chat.svg",
    title: "chat",
    path: "/admin/chat",
  },
  {
    icon: "/box.svg",
    title: "ideas",
    path: "/admin/box",
  },
  {
    icon: "/calculator.svg",
    title: "accounts",
    path: "/admin/calculator",
  },
  {
    icon: "/file.svg",
    title: "files",
    path: "/admin/file",
  },
  {
    icon: "/focus.svg",
    title: "vision",
    path: "/admin/focus",
  },
  {
    icon: "/image.svg",
    title: "gallery",
    path: "/admin/image",
  },
  {
    icon: "/help.svg",
    title: "help",
    path: "/admin/help",
  },
];

export const fromField = [
  {
    name: "Invoice number",
    icon: "/invoice.svg",
    plcaeholder: "Selecte invoice number",
    type: "text",
  },
  {
    name: "Template ",
    icon: "/company.svg",
    plcaeholder: "Selecte template number",
    type: "selection",
    value: [
      "Select A for A",
      "Select A for A",
      "Select A for A",
      "Select A for A",
      "Select A for A",
    ],
  },
  {
    name: "Company name",
    icon: "/company.svg",
    plcaeholder: "Start typing ...",
    type: "text",
  },
  {
    name: "Due date",
    icon: "/calender.svg",
    plcaeholder: "Select due date",
    type: "date",
  },
  {
    name: "Business address",
    icon: "/businessAddress.svg",
    plcaeholder: "Start typing…",
    type: "text",
  },
  {
    name: "Country",
    icon: "/phone.svg",
    plcaeholder: "Select city",
    value: ["India", "China", "Dubai"],
    type: "selection",
  },
  {
    name: "City",
    icon: "/phone.svg",
    plcaeholder: "Select country",
    value: ["Calicut", "Kochi", "Tvr"],
    type: "selection",
  },
  {
    name: "Phone number",
    icon: "/phone.svg",
    plcaeholder: "Start typing…",
    type: "text",
  },
  {
    name: "Email",
    icon: "/email.svg",
    plcaeholder: "Start typing…",
    type: "text",
  },
  {
    name: "Tax rate",
    icon: "/tax.svg",
    plcaeholder: "Start typing…",
    type: "text",
  },
];

export const formNavigation = [
  {
    title: "Bill To",
    description: "Set your customer’s details",
    icon: "/bill.svg",
  },
  {
    title: "Bill To",
    description: "Set your personal details",
    icon: "/from.svg",
  },
  {
    title: "Description",
    description: "Add products or items",
    icon: "/description.svg",
  },
  {
    title: "Save As a Draft",
    description: "Edit and send this invoice later",
    icon: "/description.svg",
  },
  {
    title: "Delete Invoice",
    description: "Hide & disable current invoice",
    icon: "/description.svg",
  },
];
