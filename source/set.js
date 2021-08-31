'use strict';
/**
 * Установливает значение в свойство объекта
 * @return {Object} объект с новым значением
 */
const set = (obj, path, value) => {
    path = path.substring(1);//delete first dot to correct split
    let refObj = obj;
    const pathList = path.split('.');
    const key = pathList.pop();
    pathList.forEach(function (item) {
        if (!refObj[item]) {
            refObj[item] = {}
        }
        refObj = refObj[item];
    });
    refObj[key] = value;
    return obj;
}