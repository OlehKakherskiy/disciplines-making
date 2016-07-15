/**
 * Created by Lenovo on 14.07.2016.
 */

angular.module('application').service('disciplineInformationService', function () {

    var history;

    var firstLevelIndex;

    var secondLevelIndex;

    var cloneSimpleFields = function (elemFrom, elemTo) {
        elemTo.Name = elemFrom.Name;
        elemTo.NameShort = elemFrom.NameShort;
        elemTo.NameEng = elemFrom.NameEng;
        elemTo.NameShortEng = elemFrom.NameShortEng;
        elemTo.vcActuality = elemFrom.vcActuality;
        elemTo.vcChangeDate = elemFrom.vcChangeDate;
        elemTo.Publisher = elemFrom.Publisher;
    };

    var saveToHistory = function (element) {
        cloneSimpleFields(element, history);
        return history;
    };

    var getFromHistory = function (element) {
        cloneSimpleFields(history, element);
    };

    var getCurrentElementPosition = function () {
        return [firstLevelIndex, secondLevelIndex];
    };

    var setCurrentElementPosition = function (level1Index, level2Index) {
        firstLevelIndex = level1Index;
        secondLevelIndex = level2Index;
    };

    var clearHistory = function () {
        firstLevelIndex = undefined;
        secondLevelIndex = undefined;
        history = {Name: "Нова дисципліна"};
    };

    clearHistory();

    return {
        saveToHistory: saveToHistory,
        getFromHistory: getFromHistory,
        getCurrentElementPosition: getCurrentElementPosition,
        setCurrentElementPosition: setCurrentElementPosition,
        clearHistory: clearHistory
    }
});