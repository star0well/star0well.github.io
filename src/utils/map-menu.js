let firstMenu = undefined;
let firstRoute = undefined;

export function menuMapToRoutes() {
  // 1.读取本地所有的路由
  const localRoutes = [];
  const routeFiles = require.context("../router/main", true, /\.js/);
  routeFiles.keys().forEach((key) => {
    if (key.indexOf("./main.js") !== -1) return;
    const route = require("../router/main" + key.split(".")[1]);
    localRoutes.push(route.default);
  });
  firstRoute = localRoutes[0];
  firstMenu = localRoutes[0].path;
  // const _recurseGetRoute = (menus) => {
  //   for (const menu of menus) {
  //     if (menu.type === 2) {
  //       const route = localRoutes.find((route) => route.path === menu.url)
  //       if (route) routes.push(route)
  //       if (!firstRoute && !firstMenu) {
  //         firstMenu = menu
  //         firstRoute = route
  //       }
  //     } else {
  //       _recurseGetRoute(menu.children ?? [])
  //     }
  //   }
  // }
  // _recurseGetRoute(userMenus)

  return localRoutes;
}

export function mapPathToBreadpaths(currentPath, userMenus) {
  const breadPaths = [];

  const _recurseGetPath = (menus) => {
    for (const menu of menus) {
      if (menu.type === 1) {
        const foundMenu = _recurseGetPath(menu.children);
        if (foundMenu) {
          breadPaths.push({name: menu.name, path: menu.url});
        }
      } else if (menu.type === 2 && menu.url === currentPath) {
        breadPaths.push({name: menu.name, path: menu.url});
        return menu;
      }
    }
  };

  _recurseGetPath(userMenus);

  return breadPaths.reverse();
}

export function pathMapBreadcrumbs(userMenus, currentPath) {
  const breadcrumbs = [];
  pathMapToMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(userMenus, currentPath, breadcrumbs) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        breadcrumbs?.push({name: menu.name, path: "/"});
        breadcrumbs?.push({name: findMenu.name, path: "/"});
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}

export function getMenuChecks(menuList) {
  const checks = [];
  const _recurseGetChecked = (menuList) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetChecked(menu.children);
      } else {
        checks.push(menu.id);
      }
    }
  };
  _recurseGetChecked(menuList);
  return checks;
}

export {firstMenu, firstRoute};
