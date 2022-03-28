const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Veiwing Index") },
    { path: "/kraje", view: () => console.log("Veiwing kraje") },
    { path: "/gieldy", view: () => console.log("Veiwing gieldy") },
    { path: "/kontakt", view: () => console.log("Veiwing kontakt") },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((routeXD) => {
    return {
      route: routeXD,
      isMatch: location.pathname === routeXD.path,
    };
  });

  // Check whats match
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  // Index as a default if not match
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  console.log(match.route.view);
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});
