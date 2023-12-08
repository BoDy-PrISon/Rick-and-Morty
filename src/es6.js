/ Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {}
function fioToName(fio) {
    var [surname, name] = fio.split(' ');
    return `${name} ${surname}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {}
function filterUnique(array) {
    return Array.from(new Set(array))
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {}
function calculateSalaryDifference(array) {
    if (array.lenght === 0) {
        return false;
    }
    const max = array.reduce((accumulator, value) => accumulator < value ? value : accumulator, 0);
    const min = array.reduce((accumulator, value) => accumulator > value ? value : accumulator, max);
    return max / min;
}


// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {}
class Dictionary {
    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            // TODO
            assert.strictEqual(!!dic, true);
        });
        it('получаем значение по ключу', () => {
            const dic = new core.Dictionary();
            dic.setVal("123", "qwe");
            assert.strictEqual(dic.getVal("123"), "qwe");
            assert.strictEqual(dic.getVal("qwe"), false);            
        });
        it('добавление значения', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.setVal("1", "test"), true);
            assert.strictEqual(dic.setVal(1, "test"), false);
            assert.strictEqual(dic.setVal([1, 2, 3], "test"), false);
        });
        it('удаление значения', () => {
            const dic = new core.Dictionary();
            dic.setVal("1", "test");
            assert.strictEqual(dic.deleteVal("2"), false);
            assert.strictEqual(dic.deleteVal("1"), true);
        });
    });
});

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
