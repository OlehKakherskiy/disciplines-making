angular.module('application').controller('disciplineCatalogController', DisciplineCatalogController);

/**
 *
 * @param $scope
 * @param disciplineService
 * @param accessTokenSharingService
 * @constructor
 */
function DisciplineCatalogController($scope, disciplineService, accessTokenSharingService) {

    $scope.showDisciplineInfo = false;

    $scope.wasAdded = false;

    $scope.discipline = {
        DcSubjectWordsID: undefined,
        Name: "Нова дисципліна",
        NameShort: "",
        NameEng: "",
        NameShortEng: "",
        vcActuality: false,
        vcChangeDate: undefined,
        Publisher: ""
    };

    var disciplineHistory = {};
    var level1Index = undefined;
    var level2Index = undefined;

    $scope.deleteSuccess = undefined;
    $scope.updateSuccess = undefined;
    $scope.addNewSuccess = undefined;

    $scope.list = disciplineService.getDescendants(undefined);

    var elementsCountIncrement = 10;

    $scope.limitTo = elementsCountIncrement;

    $scope.getMoreElements = function () {
        $scope.limitTo = ($scope.limitTo + elementsCountIncrement > $scope.list.length)
            ? $scope.list.length : $scope.limitTo + elementsCountIncrement;
        $scope.hasMoreDisciplines();
    };

    $scope.hasMoreElements = $scope.list.length > elementsCountIncrement;

    $scope.hasMoreDisciplines = function () {
        $scope.hasMoreElements = $scope.list.length > $scope.limitTo;
    };

    var cloneSimpleFields = function (elemFrom, elemTo) {
        elemTo.Name = elemFrom.Name;
        elemTo.NameShort = elemFrom.NameShort;
        elemTo.NameEng = elemFrom.NameEng;
        elemTo.NameShortEng = elemFrom.NameShortEng;
        elemTo.vcActuality = elemFrom.vcActuality;
        elemTo.vcChangeDate = elemFrom.vcChangeDate;
        elemTo.Publisher = elemFrom.Publisher;
    };

    $scope.disable = true;

    $scope.showDetailInformation = function (element, index1Level, index2Level) {
        $scope.disable = false;

        console.log(element);
        console.log(index1Level);
        console.log(index2Level);
        level1Index = index1Level;
        level2Index = index2Level;
        $scope.discipline = element;
        cloneSimpleFields(element, disciplineHistory);
    };

    //removes discipline from list and BD
    $scope.removeDiscipline = function (element, index1Level, index2Level) {
        $scope.disable = true;
        console.log(element);
        var success = undefined;

        if ($scope.disciplineForm.$pristine) {
            success = true;
        } else {

        }
        success = ($scope.disciplineForm.$pristine) ? true : removeRequest(element);

        if (success) {
            element.remove();
            $scope.hasMoreDisciplines();
            if (level1Index == index1Level && (index2Level == level2Index || index2Level == -1)) { //удаляем элемент, детальная инфа которого сейчас отображается или его родительский элемент
                //вычищаем данные с истории
                disciplineHistory = {Name: "Назва"};
                level1Index = undefined;
                level2Index = undefined;
                $scope.isCollapsed = false;
            }
            $scope.wasAdded = false;
            $scope.deleteSuccess = true;
        } else {
            $scope.deleteSuccess = false;
        }
    };

    $scope.addNewDiscipline = function (scope, index1Level) {
        $scope.disable = false;
        var parentDiscipline = scope.$modelValue;
        $scope.wasAdded = true;

        console.dir(scope);
        var newOne = {
            DcSubjectWordsID: undefined,
            Name: "Назва",
            NameShort: "",
            NameEng: "",
            NameShortEng: "",
            vcActuality: false,
            vcChangeDate: undefined,
            Publisher: "",
            parentDiscipline: undefined
        };

        if (index1Level == -1) { //добавляем элемент в корневой уровень дерева
            $scope.list.unshift(newOne); // не unshift, а вставка в начало конкретной страницы
            $scope.showDetailInformation(newOne, 0, -1); //TODO: тут нужно знать номер
            $scope.hasMoreDisciplines();
        } else { //добавляем элемент в поддерево
            parentDiscipline.nodes.push(newOne);
            newOne.parentDiscipline = parentDiscipline;
            $scope.showDetailInformation(newOne, index1Level, parentDiscipline.nodes.length - 1);
        }
    };

    $scope.refuseChanges = function () {
        cloneSimpleFields(disciplineHistory, $scope.discipline);
        $scope.disciplineForm.$setPristine();
    };

    $scope.submitChanges = function () {
        console.log($scope.discipline);
        var submitIsCommitted = undefined;
        if ($scope.discipline.DcSubjectWordsID === undefined) {
            $scope.addNewSuccess = disciplineService.addDiscipline($scope.discipline);
            submitIsCommitted = $scope.addNewSuccess;
        } else {
            $scope.updateSuccess = disciplineService.updateDiscipline($scope.discipline);
            submitIsCommitted = $scope.updateSuccess;
        }
        if (submitIsCommitted) {
            cloneSimpleFields($scope.discipline, disciplineHistory);
            $scope.disciplineForm.$setPristine();
            $scope.wasAdded = false;
        }
    };

    var removeRequest = function (element) {
        $scope.deleteSuccess = disciplineService.removeDiscipline(element);
    };

    $scope.getErrorMessage = function (target) {
        return disciplineService.getExceptionMessage(target);
    };

    $scope.getRegexp = function (modelName) {
        return disciplineService.getRegexp(modelName);
    }
}