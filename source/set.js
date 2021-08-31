'use strict';

const set = (obj, path, value) => {
    path = path.substring(1);//delete first dot to correct split
    let refObj = obj;
    const pathList = path.split('.');
    const len = pathList.length;
    for (let i = 0; i < len - 1; i++) {
        let elem = pathList[i];
        if (!refObj[elem]) refObj[elem] = {}
        refObj = refObj[elem];
    }
    refObj[pathList[len - 1]] = value;
    return obj;
}