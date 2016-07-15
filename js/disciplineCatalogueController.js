angular.module('application').controller('disciplineCatalogueController', DisciplineCatalogueController);

/**
 * @param $scope
 * @param disciplineHttpService
 * @constructor
 */
function DisciplineCatalogueController($scope, disciplineCatalogueService, disciplineInformationService, disciplineHttpService) {

    $scope.showDisciplineInfo = false;

    $scope.activeAddButton = true;

    $scope.userElement = false;

    $scope.selectedFirstLevelIndex = -1;

    $scope.selectedSecondLevelIndex = -1;

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

    $scope.removedDiscipline = {};

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
        var success = undefined;
        $scope.removedDiscipline = element.$modelValue;
        success = (element.DcSubjectWordsID === undefined) ? true : removeRequest(element);
        console.log(success);
        if (success) {
            element.remove();
            hasMoreDisciplines();
            var elemPos = disciplineInformationService.getCurrentElementPosition();
            console.log(elemPos);
            console.log($scope.removedDiscipline);
            //очищаем, детальная инфа которого сейчас отображается или его родительский элемент
            if (elemPos[0] == index1Level && (index2Level == elemPos[1] || index2Level == -1)) {
                $scope.selectedFirstLevelIndex = -1;
                $scope.selectedSecondLevelIndex = -1;
                $scope.disableForm = true;
                disciplineInformationService.clearHistory();
                $scope.activeAddButton = true;
            }
            $scope.deleteSuccess = true;
        } else {
            $scope.deleteSuccess = false;
        }
    };

    $scope.addNewDiscipline = function (scope, index1Level) {

        $scope.activeAddButton = false;
        $scope.userElement = true;
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
        console.log(element);
        $scope.discipline = element;
        $scope.disableForm = false;
        $scope.selectedFirstLevelIndex = index1Level;
        $scope.selectedSecondLevelIndex = index2Level;
        //TODO: деактивация поля имени создателя дисциплины, если создатель этой дисциплины = этот юзер
        $scope.userElement = element.Publisher === disciplineCatalogueService.getUserName();
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
            $scope.discipline.vcChangeDate = new Date();
            disciplineInformationService.saveToHistory($scope.discipline);
            $scope.activeAddButton = true;
        }
    };

    var removeRequest = function (element) {
        $scope.deleteSuccess = disciplineHttpService.removeDiscipline(element);
        return $scope.deleteSuccess;
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
        'NameEng': '[a-zA-Z\(\),\.\& ]+',
        'NameShortEng': '[a-zA-Z\(\),\.\& ]+'
    };

    $scope.getRegexp = function (fieldName) {
        return regexps[fieldName];
    };
}