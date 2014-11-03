angular.module('angularBase')
    .constant('AppConfig',
        {"dataApi":{"protocol":"http","baseUrl":"localhost:10000","prefix":"","versionPrefix":""},"WebSocket":{"active":false,"url":"ws://localhost:12345"},"locale":"de-DE","dateDisplayFormat":"yyyy-MM-dd","timeDisplayFormat":"HH:MM","fullDateDisplayFormat":"yyyy-MM-dd HH:MM"}
);
