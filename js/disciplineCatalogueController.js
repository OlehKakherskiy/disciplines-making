angular.module('application').controller('disciplineCatalogueController', DisciplineCatalogueController);

/**
 * @param $scope
 * @param disciplineHttpService
 * @constructor
 */
function DisciplineCatalogueController($scope, disciplineCatalogueService, disciplineInformationService, disciplineHttpService) {

    $scope.showDisciplineInfo = false;

    $scope.activeAddButton = true;

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

    $scope.deleteSuccess = undefined;
    $scope.updateSuccess = undefined;
    $scope.addNewSuccess = undefined;

    $scope.resetAddFlag = function () {
        $scope.addNewSuccess = undefined;
    };

    $scope.resetUpdateFlag = function () {
        $scope.updateSuccess = undefined;
    };

    $scope.resetDeleteFlag = function () {
        $scope.deleteSuccess = undefined;
    };

    $scope.list = disciplineCatalogueService.getDisciplineList();

    $scope.limitTo = disciplineCatalogueService.getMoreElements();

    $scope.hasMoreDisciplines = undefined;

    $scope.disableForm = true;

    $scope.getMoreElements = function () {
        $scope.limitTo = disciplineCatalogueService.getMoreElements();
        hasMoreDisciplines();
    };

    var hasMoreDisciplines = function () {
        $scope.hasMoreDisciplines = disciplineCatalogueService.hasMoreElements();
    };

    hasMoreDisciplines();


    //removes discipline from list and BD
    $scope.removeDiscipline = function (element, index1Level, index2Level) {
        $scope.disableForm = true;
        var success = undefined;

        //операция выполнена успешно, если элемент не менялся и на форме детальной инфы не отображается или если удален успешно с БД 
        success = ($scope.disciplineForm.$pristine) ? true : removeRequest(element);

        if (success) {
            element.remove();
            hasMoreDisciplines();
            var elemPos = disciplineInformationService.getCurrentElementPosition();

            //очищаем, детальная инфа которого сейчас отображается или его родительский элемент
            if (elemPos[0] == index1Level && (index2Level == elemPos[1] || index2Level == -1)) {
                disciplineInformationService.clearHistory();
                $scope.activeAddButton = true;
            }
            $scope.deleteSuccess = true;
        } else {
            $scope.deleteSuccess = false;
        }
    };

    $scope.addNewDiscipline = function (scope, index1Level) {

        $scope.disableForm = false; //TODO: в методе showDetailInformation тоже есть это действие
        $scope.activeAddButton = false;

        var parentDiscipline = scope.$modelValue;
        var newDiscipline = disciplineCatalogueService.addElement(parentDiscipline, index1Level);

        if (index1Level == -1) {
            hasMoreDisciplines();
            $scope.showDetailInformation(newDiscipline, 0, -1);
        } else {
            $scope.showDetailInformation(newDiscipline, index1Level, parentDiscipline.nodes.length - 1);
        }
    };

    $scope.showDetailInformation = function (element, index1Level, index2Level) {
        $scope.discipline = element;
        $scope.disableForm = false;

        disciplineInformationService.setCurrentElementPosition(index1Level, index2Level);
        disciplineInformationService.saveToHistory(element);
    };

    $scope.refuseChanges = function () {
        disciplineInformationService.getFromHistory($scope.discipline);
        $scope.disciplineForm.$setPristine();
    };

    $scope.submitChanges = function () {

        //изменения выполнены успешно (добавление или обновление)
        var submitIsCommitted = undefined;

        //операция добавления, если у элемента нет ID
        if ($scope.discipline.DcSubjectWordsID === undefined) {
            $scope.addNewSuccess = disciplineHttpService.addDiscipline($scope.discipline);
            submitIsCommitted = $scope.addNewSuccess;
        } else {
            $scope.updateSuccess = disciplineHttpService.updateDiscipline($scope.discipline);
            submitIsCommitted = $scope.updateSuccess;
        }
        if (submitIsCommitted) {
            disciplineInformationService.saveToHistory($scope.discipline);
            $scope.disciplineForm.$setPristine();
            $scope.activeAddButton = true;
        }
    };

    var removeRequest = function (element) {
        $scope.deleteSuccess = disciplineHttpService.removeDiscipline(element);
    };

    $scope.getErrorMessage = function (exceptionName) {
        var exceptionParams = exceptionName.split(".");
        return fieldExceptionMessages[exceptionParams[0]][exceptionParams[1]];
    };

    var fieldExceptionMessages = {
        'Name': {
            'required': "Поле повинно бути заповнене"
        },
        'NameShort': {
            'required': "Поле повинно бути заповнене"
        },
        'NameEng': {
            'required': "Поле повинно бути заповнене",
            'invalid': 'Поле не має містити літери кирилиці'
        },
        'NameShortEng': {
            'required': "Поле повинно бути заповнене",
            'invalid': 'Поле не має містити літери кирилиці'
        },
        'Publisher': {
            'required': "Поле повинно бути заповнене"
        }
    };

    var regexps = {
        'NameEng': '[^(\u0400-\u04FF) \.]+',
        'NameShortEng': '[^(\u0400-\u04FF) \.]+'
    };

    $scope.getRegexp = function (fieldName) {
        return regexps[fieldName];
    };
}