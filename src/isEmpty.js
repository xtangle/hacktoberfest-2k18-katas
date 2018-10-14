import {isObject} from "./isObject";

export const isEmpty = (value) => {
    if (isObject(value)){
        for(let key in value) {
            if(value.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    return value == null || value.length === 0;
};
