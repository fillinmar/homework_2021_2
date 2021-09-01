'use strict';
/**
 * Установливает значение в свойство объекта
 * @param  {Object} obj - Изменяемый объект.
 * @param  {string} path - Путь к вложенному свойству.
 * @param  value - Устанавливаемое значение.
 * @return {Object} Объект с новым значением.
 */
const set = (obj, path, value) => {
    path = path.substring(1);//delete first dot to correct split
    let refObj = obj;
    const pathList = path.split('.');
    const key = pathList.pop();
    pathList.forEach(() => {
        if (!refObj[item]) {
            refObj[item] = {}
        }
        refObj = refObj[item];
    });
    refObj[key] = value;
    return obj;
}