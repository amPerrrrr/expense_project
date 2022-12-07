export const listMenuAll = [
    // {
    //   nameMenu: "Dashboard",
    //   pathnameMenu: "/dashboard",
    //   activePathMenubar: ["/dashboard", "/"],
    //   subMenu : []
    // },
    {
      nameMenu: "Expense",
      pathnameMenu: "/expense",
      activePathMenubar: ["/expense" , "/new-expense"],
      subMenu : []
    },
    {
      nameMenu: "Project",
      pathnameMenu: "/project",
      activePathMenubar: ["/project" , "/new-project"],
      subMenu : []
    },
    // {
    //   nameMenu: "Request",
    //   pathnameMenu: "/request",
    //   activePathMenubar: ["/request"],
    //   subMenu : []
    // },
    {
      nameMenu: "Admin",
      pathnameMenu: "/admin",
      activePathMenubar: ["/admin" , "/admin-budget", "/admin-request", "/admin-analysis" , "/admin-category" , "/admin-create-category"],
      subMenu : [
        {
          subMenuName : "Category",
          subMenuPathname : "/admin-category"
        },
        // {
        //   subMenuName : "Budget",
        //   subMenuPathname : "/admin-budget"
        // },
        // {
        //   subMenuName : "Request",
        //   subMenuPathname : "/admin-request"
        // },
        // {
        //   subMenuName : "Analysis",
        //   subMenuPathname : "/admin-analysis"
        // }
    ]
    },
    {
      nameMenu: "Manager",
      pathnameMenu: "/manager",
      activePathMenubar: ["/manager" , "/manager-request"],
      subMenu : [{
        subMenuName : "Request",
        subMenuPathname : "/manager-request"
      }]
    },
  ];
  