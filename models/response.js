module.exports = class Response{
    code;
    data;
    errorList;

    constructor(code, data, errorList = []){
        this.code = code;
        this.data = data;
        this.errorList = errorList;
    };
}