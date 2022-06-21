//This is a utility namesapce that can be exported from here and imported
//to another namespaces / class files for use, in order to divide code in multiple files
var NamespaceUtils;
(function (NamespaceUtils) {
    var EmployeeDataHelper = /** @class */ (function () {
        function EmployeeDataHelper() {
        }
        EmployeeDataHelper.prototype.setData = function (name, id) {
            this.name = name;
            this.id = id;
        };
        return EmployeeDataHelper;
    }());
    NamespaceUtils.EmployeeDataHelper = EmployeeDataHelper;
})(NamespaceUtils || (NamespaceUtils = {}));
