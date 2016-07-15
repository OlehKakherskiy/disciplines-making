/**
 * Created by Lenovo on 14.07.2016.
 */

angular.module('application').service('disciplineCatalogueService', function (disciplineHttpService, sessionObject) {

    var list = undefined;

    var elementsCountIncrement = 10;

    var currentShownElementsCount = 0;

    function getDisciplineList() {
        list = disciplineHttpService.getDescendants(undefined);
        return list;
    }

    var getMoreElements = function () {
        var newSize = currentShownElementsCount + elementsCountIncrement;
        currentShownElementsCount = (newSize > list.length) ? list.length : newSize;
        return newSize;
    };

    var hasMoreElements = function () {
        return list.length > currentShownElementsCount;
    };

    var addNewElement = function (parentElement, level1Index) {

        var newOne = {
            DcSubjectWordsID: undefined,
            Name: "Нова дисципліна",
            NameShort: "",
            NameEng: "",
            NameShortEng: "",
            vcActuality: true,
            vcChangeDate: undefined,
            Publisher: "",
            parentDiscipline: undefined
        };

        insertUserName(newOne);
        if (level1Index == -1) { //добавляем элемент в корневой уровень дерева
            list.unshift(newOne);
        } else { //добавляем элемент в поддерево
            parentElement.nodes.push(newOne);
            newOne.parentDiscipline = parentElement;
        }
        return newOne;
    };

    var insertUserName = function (element) {
        element.Publisher = getUserName() ? getUserName() : "";
    };

    //TODO: разобаться с userInfo. Забрать имя с сессии
    var getUserName = function () {
        return (sessionObject.get('userInfo') === undefined) ? undefined : sessionObject.get('userInfo').name;
    };

    return {
        getDisciplineList: getDisciplineList,
        getMoreElements: getMoreElements,
        hasMoreElements: hasMoreElements,
        addElement: addNewElement,
        getUserName: getUserName
    }

});