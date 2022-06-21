//This is a utility namesapce that can be exported from here and imported
//to another namespaces / class files for use, in order to divide code in multiple files

namespace NamespaceUtils {

    export class EmployeeDataHelper {
        
        protected name;
        protected id;

        setData(name, id){
            this.name = name
            this.id = id
        }
    }

    export interface EmpInterface {
        getData()
    }
}