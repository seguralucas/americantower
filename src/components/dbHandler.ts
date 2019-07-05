
import { getConnection } from "typeorm";

const getConnectionDatabase=function(){
    return getConnection()
}

export {getConnectionDatabase}