sitemaps.add('/sitemap.xml', function() {
  
  var basicRoutes = ['pinturas', 'ilustraciones', 'contacto'];
  
  var items = [];

  _.each(basicRoutes, function(routeName){
    items.push({
      page: Router.path(routeName),
      lastmod: new Date(),
      changefreq: 'weekly',
    })
  });

  return items;
});