angular.module('application').service('disciplineHttpService', DisciplineHttpService);

function DisciplineHttpService($http, sessionObject) {
    var disciplines = [];

    function getDescendantsRequest(parentID) {
        //get request with undefined
    }

    function addChildren(parentID, children) {
        if (parentID === undefined) { //запрос на бэкенд
            // disciplines = children;
            disciplines = getMock();
        } else {
            disciplines.foreach(function (discipline) {
                if (discipline.id === parentID) {
                    discipline.nodes = children;
                    return;
                }
            });
        }
    }

    function getMock() {
        return [{
            DcSubjectWordsID: 1,
            Name: "name1Long",
            NameShort: "name1short",
            NameEng: "engName1Long",
            NameShortEng: "engName1short",
            vcActuality: true,
            vcChangeDate: undefined,
            Publisher: "me",
            nodes: [{
                DcSubjectWordsID: 2,
                Name: "name1.1Long",
                NameShort: "name1.1short",
                NameEng: "engName1.1Long",
                NameShortEng: "engName1.1short",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "",
                parentDiscipline: 1
            },
                {
                    DcSubjectWordsID: 3,
                    Name: "name1.2Long",
                    NameShort: "name1.2short",
                    NameEng: "engName1.2Long",
                    NameShortEng: "engName1.2short",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "",
                    parentDiscipline: 1
                },
                {
                    DcSubjectWordsID: -1,
                    Name: "name1.3Long",
                    NameShort: "name1.3short",
                    NameEng: "engName1.3Long",
                    NameShortEng: "engName1.3short",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "",
                    parentDiscipline: 1
                }
            ],
            parentDiscipline: undefined
        }];
    }

    return {
        getDescendants: function (parentID) { //can be null if need root elements, need pagination params
            var response = getDescendantsRequest(parentID);
            addChildren(parentID, response);
            return disciplines;
        },

        addDiscipline: function (discipline) {
            return true;
            //http post + получаем ID и добавляем его в discipline
        },

        removeDiscipline: function (discipline) {
            return true;
            //http post передаем ID
        },

        updateDiscipline: function (discipline) {
            return true;
        }
    };
}