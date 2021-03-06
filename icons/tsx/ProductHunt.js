"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledProductHunt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;top:3px}&::before{border:2px solid;border-left:0;border-top-right-radius:40px;border-bottom-right-radius:40px;width:6px;height:6px;left:5px}&::after{width:2px;height:8px;background:currentColor;left:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;top:3px}&::before{border:2px solid;border-left:0;border-top-right-radius:40px;border-bottom-right-radius:40px;width:6px;height:6px;left:5px}&::after{width:2px;height:8px;background:currentColor;left:4px}\n"])));
exports.ProductHunt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledProductHunt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "product-hunt" }))));
});
var templateObject_1;
//# sourceMappingURL=ProductHunt.js.map