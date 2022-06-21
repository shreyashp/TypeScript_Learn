var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//NameSpace here is a way of organizing and structuring code,
//When code have multiple elements for same usability , they can be put under same namspace for optimum
//code handling
/// <reference path = './NmUtils.ts'/>
var EmployeeUtility;
(function (EmployeeUtility) {
    //every elements from namespace are exported to access them outside it
    var EmployeeData = /** @class */ (function (_super) {
        __extends(EmployeeData, _super);
        function EmployeeData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmployeeData.prototype.getData = function () {
            console.log("Employee Name : ".concat(this.name, ", Employee Id : ").concat(this.id));
        };
        return EmployeeData;
    }(NamespaceUtils.EmployeeDataHelper));
    EmployeeUtility.EmployeeData = EmployeeData;
})(EmployeeUtility || (EmployeeUtility = {}));
var employee = new EmployeeUtility.EmployeeData();
employee.setData('George', 213);
employee.getData();
