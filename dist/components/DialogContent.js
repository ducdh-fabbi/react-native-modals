Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/DialogContent.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var babelPluginFlowReactPropTypes_proptype_DialogContentProps=require('../type').babelPluginFlowReactPropTypes_proptype_DialogContentProps||require('prop-types').any;var styles=_reactNative.StyleSheet.create({content:{paddingHorizontal:18,paddingVertical:24}});function DialogContent(_ref){var style=_ref.style,children=_ref.children;return _react2.default.createElement(_reactNative.View,{style:[styles.content,style],__source:{fileName:_jsxFileName,lineNumber:16}},children);}DialogContent.propTypes=babelPluginFlowReactPropTypes_proptype_DialogContentProps===require('prop-types').any?{}:babelPluginFlowReactPropTypes_proptype_DialogContentProps;DialogContent.defaultProps={style:null};exports.default=DialogContent;