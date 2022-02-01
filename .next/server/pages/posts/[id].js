(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 5970:
/***/ ((module) => {

// Exports
module.exports = {
	"postsall": "Post_postsall__XxU1u",
	"postscontainer": "Post_postscontainer__owJmG",
	"headerauthor": "Post_headerauthor__jch6Z",
	"photo": "Post_photo__1vDYe",
	"photoimg": "Post_photoimg__2dx68",
	"text": "Post_text__R_lHb",
	"blog": "Post_blog__1QDf6"
};


/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/photo.1e1d4dad.png","height":120,"width":120,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Ad/n7QD7+/wpBwcImOzt7Dnv8PAADwwMyOnn5mfk4N3XAd/m6ykDBAbF8/LzEbydkADx2s4AGktgAAEBAu/LxME7AeHo7sIFBgg9yL23+hDh0AYTEhUAiJ6h+ipFTwbu7OrCAePp7/oAAgMFyrCjAB4D/gAB/gIAr7avAPEWIAAFBQb7AePq8foEBgcFv6GTAALm2wAqIioAk6SRAAomOgD+Bw37AePl6cHt6ug+t8G9+jAG/Qb48/MAZ3eC+lZeWAYCCw7DAfO3pCnP2NXFtfwOETIOCgAK39MAnbm4AAUXJu8oJSg7AcugkgAGAf4puO76mf3//zgf7uQAvdDSx560wWhEQkPXSn19+ocObLwAAAAASUVORK5CYII="});

/***/ }),

/***/ 4841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./Components/Footer.js + 3 modules
var Footer = __webpack_require__(9053);
// EXTERNAL MODULE: ./Components/navbar.js + 2 modules
var navbar = __webpack_require__(652);
// EXTERNAL MODULE: ./db.json
var db = __webpack_require__(6076);
// EXTERNAL MODULE: ./styles/Post.module.scss
var Post_module = __webpack_require__(5970);
var Post_module_default = /*#__PURE__*/__webpack_require__.n(Post_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./public/photo.png
var photo = __webpack_require__(75);
;// CONCATENATED MODULE: ./public/post/Postimg.png
/* harmony default export */ const Postimg = ({"src":"/_next/static/media/Postimg.ddbab0aa.png","height":748,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AOXn0tPbqMDHqX5zbYR4a5ORjtDYtuLlygDc4cDb4bi6xJR/c3WBfH6MhYa+xo/a354Anpl1zcCov8Kjhn2In4h5koWWu66Y5OG+AIRdUZV1bpiPkYOBj6GQjpyUopeBgZOIhQC2qaO1q6awrKuVkJKTkZeelpd8c2vQyscTJUuY/ERtrAAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./Components/Blog.js + 1 modules
var Blog = __webpack_require__(5602);
;// CONCATENATED MODULE: ./pages/posts/[id].js












const Post = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar/* Navbar */.w, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Post_module_default()).postsall,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Post_module_default()).postscontainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Post_module_default()).headerauthor,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: props.post.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Post_module_default()).photo,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Post_module_default()).photoimg,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    src: photo/* default */.Z,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Post_module_default()).photoname,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            style: {
                                                                fontWeight: "600"
                                                            },
                                                            children: [
                                                                props.post.author,
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                })
                                                            ]
                                                        }),
                                                        props.post.data
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: Postimg,
                                alt: ""
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (Post_module_default()).text,
                                children: props.post.content
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Post_module_default()).blog,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Blog/* Blog */.l, {
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* Footer */.$, {
            })
        ]
    }));
};
Post.getInitialProps = ({ query  })=>{
    return {
        post: db[query.id]
    };
};
/* harmony default export */ const _id_ = (Post);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,675,885,76,602], () => (__webpack_exec__(4841)));
module.exports = __webpack_exports__;

})();