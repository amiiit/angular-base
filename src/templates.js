angular.module('angularBase').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/app.tpl.html',
    "<app-header></app-header>\n" +
    "<app-content></app-content>"
  );


  $templateCache.put('app/content/app-content.tpl.html',
    "<div id='main'>\n" +
    "    App section {{appSection}}\n" +
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
    "<paper-tabs selected=\"0\">\n" +
    "  <paper-tab ng-click=\"setState('all')\">All</paper-tab>\n" +
    "  <paper-tab ng-click=\"setState('recent')\">Recent</paper-tab>\n" +
    "  <paper-tab ng-click=\"setState('archived')\">Archived</paper-tab>\n" +
    "</paper-tabs>\n" +
    "\n"
  );


  $templateCache.put('app/header/header-toolbar.tpl.html',
    "<core-toolbar>\n" +
    "    <paper-icon-button icon=\"menu\" role=\"button\" tabindex=\"0\" aria-label=\"menu\"></paper-icon-button>\n" +
    "    <span flex=\"\">Angular Base</span>\n" +
    "    <paper-icon-button icon=\"refresh\" role=\"button\" tabindex=\"0\" aria-label=\"refresh\"></paper-icon-button>\n" +
    "    <paper-icon-button icon=\"more-vert\" role=\"button\" tabindex=\"0\" aria-label=\"more-vert\"></paper-icon-button>\n" +
    "</core-toolbar>"
  );

}]);
