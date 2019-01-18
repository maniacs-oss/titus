(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"../titus-components/src/navigation/navigation.js":function(e,t,n){"use strict";n.d(t,"a",function(){return M});var o=n("./node_modules/react/index.js"),i=n.n(o),a=n("./node_modules/classnames/index.js"),r=n.n(a),s=n("../titus-components/node_modules/@material-ui/core/styles/index.js"),c=n("../titus-components/node_modules/@material-ui/core/Drawer/index.js"),l=n.n(c),u=n("../titus-components/node_modules/@material-ui/core/Divider/index.js"),p=n.n(u),d=n("../titus-components/node_modules/@material-ui/core/IconButton/index.js"),m=n.n(d),A=n("../titus-components/node_modules/@material-ui/icons/ChevronLeft.js"),g=n.n(A),h=n("../titus-components/node_modules/@material-ui/icons/ChevronRight.js"),y=n.n(h),f=n("../titus-components/node_modules/@material-ui/core/AppBar/index.js"),E=n.n(f),B=n("../titus-components/node_modules/@material-ui/core/Toolbar/index.js"),w=n.n(B),j=n("../titus-components/node_modules/@material-ui/core/Typography/index.js"),b=n.n(j),I=n("../titus-components/node_modules/@material-ui/icons/Menu.js"),O=n.n(I);function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Y(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){R(e,t,n[t])})}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=Y(this,(e=T(t)).call.apply(e,[this].concat(i)))).state={menuOpen:!1},n.handleMenuOpen=function(){return n.setState({menuOpen:!0})},n.handleMenuClose=function(){return n.setState({menuOpen:!1})},n}var n,a,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.handleMenuOpen,t=this.handleMenuClose,n=this.props,o=n.classes,a=n.title,s=n.children,c=n.items,u=n.theme,d=n.headerRight,A=this.state.menuOpen;return i.a.createElement("div",{className:o.root},i.a.createElement(E.a,{color:"primary",className:r()(o.appBar,R({},o.appBarShift,A)),"data-testid":"app-bar"},i.a.createElement(w.a,{disableGutters:!A},i.a.createElement(m.a,{color:"inherit","aria-label":"Open Menu",onClick:e,className:r()(o.menuButton,R({},o.hide,A))},i.a.createElement(O.a,null)),i.a.createElement(b.a,{variant:"h6",color:"inherit",noWrap:!0},a),d&&i.a.createElement(d,{className:o.headerRight}))),i.a.createElement(l.a,{color:"primary",variant:"permanent",classes:{paper:r()(o.drawerPaper,R({},o.drawerPaperClose,!A))},open:A,onClick:t,"data-testid":"app-bar-drawer"},i.a.createElement("div",{className:o.toolbar},i.a.createElement(m.a,null,"rtl"===u.direction?i.a.createElement(y.a,{"data-testid":"app-bar-drawer-icon-right"}):i.a.createElement(g.a,{"data-testid":"app-bar-drawer-icon-left"}))),i.a.createElement(p.a,null),c),i.a.createElement("div",{className:o.content},i.a.createElement("div",{className:o.toolbar}),i.a.createElement("main",{className:o.main},s)))}}])&&C(n.prototype,a),s&&C(n,s),t}();t.b=Object(s.withStyles)(function(e){return{root:{flexGrow:1,height:"100vh",zIndex:1,position:"relative",display:"flex",overflow:"hidden"},appBar:{position:"absolute",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:e.menuWidth,width:"calc(100% - ".concat(e.menuWidth,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},hide:{display:"none"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:e.menuWidth,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:R({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),toolbar:F({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,backgroundColor:e.palette.background.default,height:"100vh",display:"flex",flexDirection:"column"},main:{overflowY:"auto",padding:3*e.spacing.unit,flex:1},headerRight:{marginLeft:"auto"}}},{withTheme:!0})(M),M.__docgenInfo={description:"",methods:[{name:"handleMenuOpen",docblock:null,modifiers:[],params:[],returns:null},{name:"handleMenuClose",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Navigation",props:{title:{type:{name:"string"},required:!0,description:"The title to display on the top toolbar."},classes:{type:{name:"object"},required:!0,description:"Classes provided by the Material-UI styling infrastructure, for internal use."},theme:{type:{name:"object"},required:!0,description:"Theme provided by the Material-UI styling infrastructure, for internal use."},items:{type:{name:"node"},required:!0,description:"The menu items to display on the left drawer."},children:{type:{name:"node"},required:!0,description:"The content to display in the content area."},headerRight:{type:{name:"func"},required:!1,description:"A function which renders the elements displayed in the right area of the top toolbar."}}}},"../titus-components/src/navigation/navigation.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var o=n("./node_modules/react/index.js"),i=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),r=n("./node_modules/docz/dist/index.m.js"),s=n("../titus-components/src/navigation/navigation.js"),c=n("../titus-components/src/navigation/stories/navigation.story.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,m(t).call(this,e))).layout=null,n}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,i.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=u(e,["components"]);return i.a.createElement(a.MDXTag,{name:"wrapper",components:t},i.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"navigation"}},"Navigation"),i.a.createElement(a.MDXTag,{name:"p",components:t},"The Navigation component provides a typical page layout with a header, a left side drawer and a main content area, all built on top of ",i.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://material-ui.com/"}},"Material UI")," lower-level components."),i.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),i.a.createElement(r.f,{of:s.a}),i.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"typings-definitions"}},"Typings Definitions"),i.a.createElement(a.MDXTag,{name:"pre",components:t},i.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-ts"}},"import { StyledComponentProps } from '@material-ui/core/styles'\n\nexport interface NavigationProps extends StyledComponentProps {\n  title: string\n  items: React.ReactNode\n  children: React.ReactNode\n  headerRight?: React.ReactNode\n}\n")),i.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),i.a.createElement(r.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYADlXD-FJogGVAlmAdgYLghCWX8VDYIgeCe1QG9KXYeQ3RNdpPTgARyG-HC8MQmj0Pw_0BXtKYUO1TIRgyZsYCIOAlgACQladRVwwgljQ3CMNQRw9CzEjjTlcjJEo6jUFo6SVIieE4AYqT8JwVFhUSZjIPYIMpVIpSzSVO0NXYFDNB8BT3XaAABXiRHoqgunacFUF0VFjlOAAvZwCESbF2G4Bz1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdkoAFky9gADZMuy9YwBAgAxH1oESZL-GcQ5EUdTB2AABSEfgliIahKDgPLESqmsapoZwIBCy52AARiKnL5H8wKpgAQTmaL2EjFDyBsKB0HDYjOWisRtpjGR2FRSKYG4YBDzCiLsXkbda2APboEO4IADJvvGRJ5koZoPoOo7uHB-UwFCAKmPYAB-DZPvDSMTquEGvtQZaaykGRq3fMxYXszAwDCKAphR07zuxjaVxrRMLIIHBasyFJrwIV7azrSS6OoVdOZiAhYD4EA3D_dh1MYxD-D52sXl4uA7sYDjXC4gQeL49gtyxznOc2TsMlElJCDuoT9YEQ3CG1nWOZ1xhuek2TQKmLcZake38JtqQGaZlm2deqQabxsxvxAVS9J51Bw-kgCtAoED9AYFj7IZ5DHQzV0XLImzXzsh0esoGZLAB-ArPlAcC4tCL5jgPzUCTh1yCgfw4Bg487EU-VG-b9S29r-u2PzPFwpuuxM6Utyolofp4gtUIIEBYUYC0ke-7M5XVdL9zJ4yCAZ7nheukkdeMlX1j2G1NguAyTeJ6yaeoFn-efKXi-_mnU_7IaXQb3CCJzA7red9d4P33s_SQX9qA_xuNQD-Dp7CbFYEIVAAAZGAYACAQP_q5W-U9gGP0kLEagul4EwEQdQVB6DYFTBIWQ1AFsMG6Bvtve--DCGoGIQgpB9CqHsBpoRI4ACcE7z3k_Rekg-GuAEDwywwgoAeEkUwoBIiD5LxkZQORkjpEA0oCkTIMw8DJEEcwvBoCxFFyFLo2YBieH6joKETBijcHKLYbpWxqAOgrSIVMa6UUYoTF4t0bgZ0drrCECIK4wBVxgFgFgAA4kIEYVw5o5V1jAMSBBkpzRSilVgeAxqcxCg0CMWAkkpNrEKfI-FkpdCbjEVgMB8m1hYMNJuTVIYxMaRYX4GRomjGSjYLsdBa4WCUOsWYMx-ERNXBUl4iFkquA8HAdR4QGllIsIU4pVx_HHhwBstQOBDoq2vgAanmms8YmR2GzOoFszYOy0TuEqYhOAHwzS0EjAAbXaLidAExsrynioldoABdZCMsJT5EKgSAJOAHlXPwi8iFBRDJ-AEDMc5Fh0B9GkrcmFcKnlEIOdigyFI_izmcOQLodBVzyHfCMsp4z-HOBsOgqZdN2CArQBQjJ0KdnXlCAAdS4BMc5PyJhXFKPEcgkYskpQAKTsAtOwAAJMAbZ_5-VCt-XgeQmVOTFHOfi65SVeX_iNQi15Ep3lfLFXkpY7ROWoBBWC9lFgkVQvVbCy5BL2E4HdSkFFkj0UyyxZkKppqvWPONS80N0d9A73JZSoIAZ2W0vWKMms_KoF_zZZzR13KkkACZzmOvoVcZMZV01lIGbNSJ7LmnklcG09oPwXTDOImUw5qsuqzAyLm8pQ1jXVIXAhepnT8w2FoM4Eas0W2jD0eO21uK-V2K1SK1c5q5kRs3YSpNWQny2v-XWnWMJ_AFGXWa710a_VntnIGtFGLjjEq3Z6ndvrY0GXjTOFIFKqUps5mmmsGbMWcQyD2uE9goBDVraubpAhekjAABr9K4JgJ1hqr3htfZh55lr93fOFXa2KrrT2QpSBeyN8LcP-vvcGkjH6X13MvVGi1DHqA4FJQUX9yaaWclFYRijw1JTIuhhOIw7AADs5yPmeo8GabYQo0AEBeaEGYT44A2k5MC_tnMl0RqE-QETdcpjiYAJw0qresCI6j5HlmI5zBtrTkrROwOO-IuFUDq3uJ3L9471B5BiGARIjt9DOZiRaOg6Bx15S7Oe-UaUAAclVzk4FS56ogEAsBoBedZjRAhLM1l0E7HTRoYnxL6Wc1c8idi6LaBgRwUG7OeryrAG4_5qvbFq9DdABy0GkwIOczY6TMnZNyeOxzTawuufOS5rAF8uhSi3e0KgUBQhECdQViwUQ0AlbgwhgAmvM8IlBov5Ti56gzRmxPpRmzEpJBX1h6xEsN-ztZ81oJ5e0MIER21Y0AwTLAZ8u5wDsO7RCMIsCgXQHYdc1BXTHqugQBC5B-yDnMSXGKCOLDGHE9YboAtYDDmOLYRtyQWT-OHDMYcNnJH1F5Bul4sArj50LsXF5qJv04FsOKAAjnPLoixVw44cE3EHJdy5vzzB4ZIFP9RKIfgAVQaIjyKBROCoBlP4NEoQpR9BgEsGqRwlMZHUlAXIcB_zsHp-y4HFvvMs_Ry8ygHh1BbEZtzmAfOIAC_OcLvHx5Ue_CvjkaX0L2By6cYr5XPi1doE1xznXBA9cG-FOrqepvzeW-t_zJjzO0ds5wM713UoudwF5_z7IvuTBWE2ByuxnBaAawiMTlpTa9jmAp7AdBxxQMCDp3ydlcs-J54Lo7nAPxMCl_L97yvQvq946LHJKYzeJvJDQGHorrpJESn76udG4YR-s-ruP4sU_PcV8F-y4Xa0jTQ0WyyEYNg9qTkixkOwFOFwBJoHYVfeZ18U_6CNimG31cD2GaApwiCp1y1s133ZSewNhewdwLyhgCnTX8gsFRCyC2ixzr3cV1HmBNRJigAtzQP_WmAwFgDcVCHwOCBigpiCQJFsEMjHHCn3RQn5RoJNW126EAwsD8AoJgCoMg2gy2noLOgmCYItwIFYPeXYLsU4KuCIIt2OnQJfwjAEAphwNWgcnIPQEoPkIIKWH4L0MELsWEOUJIj8UJD3y8Ve05lt3gEfQJ31xln3zoEfSH34hlnVUfXgPNhe1NmeyAJpS2gkJeXLjuBsPYQHg4IIOIlCMJEMiR1oFUIsC6CTwEHMGjBI1jA4Ft1blunelFztzDBfBehlkTAkXyxI3sPUWFGFgHAFEkUSGlhqNrHyJ9EKI6LbkjAcJeUZUkRdRPRPQ-T6JwAGIEGZQgHQW01wOoIIIqNrFpStmGOOGiFcErngBiB4H4HGQtFs1aNWJthPUYDUTyxbwWVgFiV_jfzugAEJYi6Byi2jOZGBMFs1eYXidYVt6j-A0BNh-hRAQBFiT1JFd4LQm5AgoBhZODw87FDjVidZqBINYhtg7pjD9C8CCCVjESLBuiujiiCi4Bejij4AcAs1f5qAhjcSdZRjSSXka1ZjHiyCaTjocSjiQTbYqCHEXYvidx3jKTUBjjhjTjtFLF9FkhWAwT3ACBhY8BK0QAixGthZ_id4gTxZKABU9FhTVi1VGcYB2SRTJBzEdE9EDFqxOSLBgBAiECgD2Bfo6wbT_C7T8S7oxi_D6ESItZOSpAzjbMdS6xxE5h-EAylZe9OSfiBAGj-h4oWjgSvipTp4aAGiMgohMwgSIz6S7ocDVi8o4Q0ZCTOjiSxiu0wNe0BBqTWS6Tm4yTSyBBwMMhzCYBZiHiDDqU-SVCvj5BDTOYC46A7pmSezaxjAQhUBkhG5UT1cw86zB4EhA8LEsDKgegoNlCxMB9cTkSoBUT0TKhMTQgmyhzMV1jNjUQuBhY9jbMrRwz4yOSvjcjlzm4Ci3T6TYVZFbNnjWS3jv5BSAyT01UmMDkZ979zBwYYpOhBZ2h4YqZWTXiaEuF0kHF0BjzaBTydiQALzJEryjkBALQ2ELRADCB-BNZfydZUZoKYLEw4LyEPtELkKtizzdi5h9jMK6zcLdAISPsiLeSKLORDzawpABToEhSfTdxZAfTX4r4jhuLETgBPChypBj4BBQzLpXSiiayXlN8aAPzET7zVKxjoDJEvSSLGBttzA9KXzTKXp3p9oMZ5ApBTLQzRLhScY4xVw6ViIzAsYAcz5iZ-tB4Jhh5sRIwfFHCdCCw8B_dZpuDjpIwwdqB3wQ4w4JZ9J6IjIdIo4DI0rEgY4gJNKDBwJ-5zItRN5s4eEUI0qIB4BdRmgx55Q3IsqvBKBthJBSrc4ph6p2ojF5dWFApJAOqGk2r2BkFbBpRsFjFlEwFhrUQeEpqMFG9HFhEQFRFD5Zr1YZqRr1YHEurI98FJqNrG9MF1rUR1ZLBsBRqyIhEWFTEVr9reJTrIceFtR_A8AvBJEchtrFqeqiEj5nrXqBAot_JCq4qsEyJUsMrEJa5vL7IUDgLz5e8vNNDQkxw-gsjVxGBZrnLVrG9QysbeJMFjKnq4AXrKA3riLFipBcaiB8bybKb7r2ZkqI52AtzUBtgKbbqiA6bnLJBKbPZuaRrXp3wvKXRAdoa798J2AnT6FIwIi4AToEd0iUbyLExLpgBUscAZaSIQrsyOVJFEoy15o0puznL-qyb2UXKxKaxBb_JCYHQYbxbgaQsaBEaawFbMi6xcYGbpJF8nZzbqwhaKqqqwAnxgb_kBosVYBORxiuwnxfLQgyZ_kxDyK7YNJ8IGdBZboWofRyRuhPbU6bzZZG8FZgAwzsKvNiKcSPT0kTZhJbTLZ1hPYHb44sxpK3YU7EI8YEqlAQARpthXA0gY5qBcqm78qQAEd-Ae4mQkB2B-AgRiQqhvAMgIssAs7YA-p1h-B6kBB8heYp7-AUocB96Uo16ax-ByhKUIAZg86rh-Ab98gxZfxs7jgYByRKBEg8w8g1ds4LRZ6QQF78sQAyl-BTL-Br6VBikY5j6LBT7n7X8ApKq4AQG7Dp7BAtREH-AAA9OaMqHAAAVhwELUgdrH4AiMrjZzQZAEwbwewYIYAdXH4EupMWWsntAfQeTBwDYaPtofZXofGqWoIUCnIdYYPpwDmkIagZAHqu0kSEauauzkEbYaKhEdEa4c5n4C_utEEawdwfwYRL-0St_twF0EgADU0EHu0DyoYEiRAEb0bRSKQBnreRgHwq1AtHGX4HkAUG7KAA",__position:1,__code:'<Navigation\n  title="Sample navigation"\n  items={<DrawerItems />}\n  headerRight={HeaderRight}\n>\n  <NavigationContent />\n</Navigation>',__scope:{props:this?this.props:n,Navigation:s.b,NavigationBase:s.a,DrawerItems:c.a,HeaderRight:c.b,NavigationContent:c.c}},i.a.createElement(s.b,{title:"Sample navigation",items:i.a.createElement(c.a,null),headerRight:c.b},i.a.createElement(c.c,null))))}}])&&p(n.prototype,o),l&&p(n,l),t}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"../titus-components/src/navigation/stories/navigation.story.js":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return E}),n.d(t,"b",function(){return B}),n.d(t,"c",function(){return w});var o=n("./node_modules/react/index.js"),i=n.n(o),a=n("../titus-components/node_modules/@storybook/react/dist/client/index.js"),r=n("../titus-components/node_modules/@material-ui/icons/Face.js"),s=n.n(r),c=n("../titus-components/node_modules/@material-ui/core/List/index.js"),l=n.n(c),u=n("../titus-components/node_modules/@material-ui/core/ListItem/index.js"),p=n.n(u),d=n("../titus-components/node_modules/@material-ui/core/ListItemIcon/index.js"),m=n.n(d),A=n("../titus-components/node_modules/@material-ui/core/ListItemText/index.js"),g=n.n(A),h=n("../titus-components/node_modules/@material-ui/icons/Dashboard.js"),y=n.n(h),f=n("../titus-components/src/navigation/navigation.js");function E(){return i.a.createElement(l.a,null,i.a.createElement(p.a,null,i.a.createElement(m.a,null,i.a.createElement(y.a,null)),i.a.createElement(g.a,null,"navigation link")))}function B(e){return i.a.createElement("div",Object.assign({},e,{style:{marginRight:10}}),i.a.createElement(s.a,null))}function w(){return i.a.createElement("div",null,"navigation content")}Object(a.storiesOf)("Navigation",e).add("default",function(){return i.a.createElement(f.b,{title:"Sample navigation",items:i.a.createElement(E,null),headerRight:B},i.a.createElement(w,null))}),E.__docgenInfo={description:"",methods:[],displayName:"DrawerItems"},B.__docgenInfo={description:"",methods:[],displayName:"HeaderRight"},w.__docgenInfo={description:"",methods:[],displayName:"NavigationContent"}}).call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=titus-components-src-navigation-navigation.27400bae5ba5da65c005.js.map