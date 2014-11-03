angular.module('angularBase').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/app.tpl.html',
    "<app-header></app-header>\n" +
    "<app-content></app-content>"
  );


  $templateCache.put('app/content/app-content-all.tpl.html',
    "<p>Showing all cards</p>"
  );


  $templateCache.put('app/content/app-content-archived.tpl.html',
    "<p>Showing archived content</p>"
  );


  $templateCache.put('app/content/app-content-recent.tpl.html',
    "<p>Showing recently added content</p>"
  );


  $templateCache.put('app/content/app-content.tpl.html',
    "<div id='main' vertical layout ui-view='main'>\n" +
    "\t\n" +
    "</div>"
  );


  $templateCache.put('app/header/app-header.tpl.html',
    "<header>\n" +
    "\t<header-toolbar></header-toolbar>\n" +
    "\t<header-tabs></header-tabs>\n" +
    "</header>\n" +
    "\n"
  );


  $templateCache.put('app/header/header-tabs.tpl.html',
    "<paper-tabs ng-model=\"selectedTabIndex\">\n" +
    "\t<paper-tab ng-repeat='tab in tabs'>\n" +
    "\t\t{{tab.title}}\n" +
    "\t</paper-tab>\n" +
    "</paper-tabs>\n" +
    "\n"
  );


  $templateCache.put('app/header/header-title-all.tpl.html',
    "<p>All</p>"
  );


  $templateCache.put('app/header/header-title-archived.tpl.html',
    "<p>Archived</p>"
  );


  $templateCache.put('app/header/header-title-recent.tpl.html',
    "<p>Recent</p>"
  );


  $templateCache.put('app/header/header-toolbar.tpl.html',
    "<core-toolbar>\n" +
    "    <paper-icon-button icon=\"menu\" role=\"button\" tabindex=\"0\" aria-label=\"menu\"></paper-icon-button>\n" +
    "   \n" +
    "    <span flex=\"\">Angular Base</span>\n" +
    "     <span ui-view='toolbar'></span>\n" +
    "    <paper-icon-button icon=\"refresh\" role=\"button\" tabindex=\"0\" aria-label=\"refresh\"></paper-icon-button>\n" +
    "    <paper-icon-button icon=\"more-vert\" role=\"button\" tabindex=\"0\" aria-label=\"more-vert\"></paper-icon-button>\n" +
    "</core-toolbar>"
  );

}]);
