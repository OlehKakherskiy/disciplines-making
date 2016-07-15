angular.module('application').service('disciplineHttpService', DisciplineHttpService);

function DisciplineHttpService($http, sessionObject) {
    var disciplines = [];

    function getDescendantsRequest(parentID) {
        //TODO get request with null ID (or -1)
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

    function addDiscipline(discipline) {
        return true;
        //TODO: http post + получаем ID и добавляем его в discipline
    }

    function removeDiscipline(discipline) {
        return true;
        //TODO: http post + отдаем ID
    }

    function updateDiscipline(discipline) {
        return true;
        //TODO: http post or update. Вытаскиваем все простые поля и передаем.
    }

    //TODO: remove this when server api will be deployed
    function getMock() {
        return [
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            },
            {
                DcSubjectWordsID: 1,
                Name: "Вища математика",
                NameShort: "Вища математика",
                NameEng: "Higher mathematics",
                NameShortEng: "higherMath",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [{
                    DcSubjectWordsID: 2,
                    Name: "Вища математика -1. Теорія імовірності",
                    NameShort: "Теорія імовірності",
                    NameEng: "Higher mathematics -1. Theory of probability",
                    NameShortEng: "Theory of probability",
                    vcActuality: true,
                    vcChangeDate: undefined,
                    Publisher: "Мелкумян Катерина Юріївна",
                    parentDiscipline: 1
                }]
            },
            {
                DcSubjectWordsID: 3,
                Name: "Програмування",
                NameShort: "Програмування",
                NameEng: "Programming",
                NameShortEng: "Programming",
                vcActuality: true,
                vcChangeDate: undefined,
                Publisher: "Мелкумян Катерина Юріївна",
                nodes: [
                    {
                        DcSubjectWordsID: 4,
                        Name: "Програмування -1. Технології програмування",
                        NameShort: "Технології програмування",
                        NameEng: "Programming -1. Programming technologies",
                        NameShortEng: "Programming technologies",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Алгоритмічне програмування",
                        NameShort: "Алгоритмічне програмування",
                        NameEng: "Programming -1. Algorithmic programming",
                        NameShortEng: "Algorithmic programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 6,
                        Name: "Програмування -1. Модульне програмування",
                        NameShort: "Модульне програмування",
                        NameEng: "Programming -1. Modular programming",
                        NameShortEng: "Modular programming",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    },
                    {
                        DcSubjectWordsID: 5,
                        Name: "Програмування -1. Об'єктно-орієнтоване програмування",
                        NameShort: "ООП",
                        NameEng: "Programming -1. Object-oriented programming",
                        NameShortEng: "OOP",
                        vcActuality: true,
                        vcChangeDate: undefined,
                        Publisher: "Мелкумян Катерина Юріївна",
                        parentDiscipline: 3
                    }
                ]

            }
        ]
    }

    return {
        getDescendants: function (parentID) { //can be null if need root elements, need pagination params
            var response = getDescendantsRequest(parentID);
            addChildren(parentID, response);
            return disciplines;
        },

        addDiscipline: addDiscipline,

        removeDiscipline: removeDiscipline,

        updateDiscipline: updateDiscipline
    };
}