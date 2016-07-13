angular.module('application').controller('systemActionsController', SystemActionsController);

function SystemActionsController($scope, $location) {

    var functionIsNotImplemented = "функція знаходиться в стадії розробки";

    var editFullUniversityDisciplineList = function () {
        $location.path('disciplineCatalogue');
    };

    var editBasicUniversityDisciplineList = function () {
        alert(functionIsNotImplemented);
    };

    var editSpecialityDisciplines = function () {
        alert(functionIsNotImplemented);
    };

    var editSpecialityDisciplinesForYear = function () {
        alert(functionIsNotImplemented);
    };

    $scope.currentAction = undefined;

    $scope.collapsed = true;

    $scope.actions = [
        {
            id: 0,
            title: "Формування загального списку назв Предметів в Університеті",
            description: "Призначення - створення єдиного уніфікованого переліку назв Предметів (дисциплін, кредитних модулів), " +
            "які будуть використовуватися при плануванні освітнього процесу в Університеті.",
            locateTo: editFullUniversityDisciplineList
        },
        {
            id: 1,
            title: "Формування переліку базових Предметів за спеціальностями в Університеті",
            description: "Призначення - створення єдиного уніфікованого переліку базових Предметів за спеціальностями " +
            "(затверджених міжкафедральними комісіями), які будуть використовуватися при плануванні освітнього процесу в Університеті.",
            locateTo: editBasicUniversityDisciplineList
        },
        {
            id: 2,
            title: "Формування переліку Предметів за спеціальностями на кафедрі",
            description: "Призначення - створення єдиного уніфікованого переліку Предметів за всіма спеціальностями " +
            "(напрямами) та освітніми ступенями(ОКР), які будуть використовуватися при плануванні освітнього процесу " +
            "на конкретній кафедрі Університету.",
            locateTo: editSpecialityDisciplines
        },
        {
            id: 3,
            title: "Формування переліку Предметів за спеціальностями на кафедрі на певний навчальний рік",
            description: "Призначення - створення єдиного уніфікованого переліку Предметів за всіма спеціальностями (напрямами) " +
            "та освітніми ступенями(ОКР), які будуть використовуватися при плануванні освітнього процесу на конкретній " +
            "кафедрі Університету з визначенням кафедр, які будуть читати данні Предмети в певному визначеному навчальному році.",
            locateTo: editFullUniversityDisciplineList
        }
    ];

    $scope.loadAction = function (id) {
        for (var i = 0; i < $scope.actions.length; i++)
            if ($scope.actions[i].id === id) {
                return $scope.actions[i].locateTo;
            }
    };

}