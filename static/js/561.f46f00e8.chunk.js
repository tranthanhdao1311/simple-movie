(self.webpackChunkreact_simple_movie=self.webpackChunkreact_simple_movie||[]).push([[561],{9642:function(e,t,a){"use strict";a.d(t,{d:function(){return E},Z:function(){return v}});a(2791);var r=a(9448),i=a.n(r),n=a(4483),s=a(6850),o={noImg:a(6043)},c=a(7689),l=a(4928),A=a(7470),m=a(9287),u=a(184),d=i().bind({title:"MovieCard_title__ck7dq","movie-item":"MovieCard_movie-item__tS7Br","box-img":"MovieCard_box-img__FEYew",img:"MovieCard_img__GQK-l","name-movie":"MovieCard_name-movie__xn+EL",box:"MovieCard_box__sVJSh","icon-star":"MovieCard_icon-star__TnVsc","info-movie":"MovieCard_info-movie__XuK0l","bg-color":"MovieCard_bg-color__6IHTp","w-h":"MovieCard_w-h__3dfO6"});var v=(0,A.withErrorBoundary)((function(e){var t=e.data,a=t.backdrop_path,r=t.original_title,i=t.release_date,A=t.vote_average,m=t.id,v=(0,c.s0)();return(0,u.jsxs)("div",{className:d("movie-item"),children:[(0,u.jsx)("div",{className:d("box-img"),children:(0,u.jsx)("img",{className:d("img"),src:null===a?o.noImg:"https://image.tmdb.org/t/p/w500/".concat(a),alt:""})}),(0,u.jsxs)("div",{className:d("info-movie"),children:[(0,u.jsx)("p",{className:d("name-movie"),children:r}),(0,u.jsxs)("div",{className:d("box"),children:[(0,u.jsx)("p",{className:d("release year"),children:new Date(i).getFullYear()}),(0,u.jsxs)("p",{className:d("rating"),children:[A,(0,u.jsx)(n.G,{className:d("icon-star"),icon:s.Tab})]})]})]}),(0,u.jsx)(l.Z,{className:d("bg-color","w-h"),onClick:function(){return v("/movies/".concat(m))},children:"Watch Now"})]})}),{FallbackComponent:function(){return(0,u.jsx)("div",{children:"Something went wrong with this component"})}}),E=function(){return(0,u.jsxs)("div",{className:d("movie-item"),children:[(0,u.jsx)("div",{className:d("box-img"),children:(0,u.jsx)(m.Z,{width:"100%",height:"100%",radius:"8px"})}),(0,u.jsxs)("div",{className:d("info-movie"),children:[(0,u.jsxs)("span",{className:d("name-movie"),children:[" ",(0,u.jsx)(m.Z,{width:"100%",radius:"8px"})]}),(0,u.jsxs)("div",{className:d("box"),children:[(0,u.jsx)("span",{className:d("release year"),children:(0,u.jsx)(m.Z,{width:"80px",height:"20px",radius:"8px"})}),(0,u.jsx)("span",{className:d("rating"),children:(0,u.jsx)(m.Z,{width:"35px",height:"20px",radius:"8px"})})]})]}),(0,u.jsx)(m.Z,{width:"100%",height:"50px",radius:"8px"})]})}},7658:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(9439),i=a(1632),n=a(4483),s=a(2791),o=a(9448),c=a.n(o),l=a(184),A=c().bind({"scoll-top":"ScrollToTop_scoll-top__SDwn2"}),m=function(){var e=(0,s.useState)(!1),t=(0,r.Z)(e,2),a=t[0],o=t[1];window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?o(!0):e<=300&&o(!1)}));return(0,l.jsx)("div",{className:A("scoll-top"),onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:a?"block":"none"},children:(0,l.jsx)(n.G,{icon:i.onQ})})}},4561:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});a(2791);var r=a(9448),i=a.n(r),n=a(9942),s=a(3197),o=a(7689),c=a(4225),l=a(9642),A=a(7658),m=a(184),u=i().bind({container:"MovieDetailsPage_container__IP-iN","background-img":"MovieDetailsPage_background-img__I8dKA",overlay:"MovieDetailsPage_overlay__YW1Vt","box-img":"MovieDetailsPage_box-img__SAXSa",img:"MovieDetailsPage_img__OwYDC","name-movie":"MovieDetailsPage_name-movie__stFjc","box-cate":"MovieDetailsPage_box-cate__dXNOd","category-movie":"MovieDetailsPage_category-movie__U3LLX",description:"MovieDetailsPage_description__frC-7","title-cast":"MovieDetailsPage_title-cast__4jzE6","box-cast":"MovieDetailsPage_box-cast__GeR69","cast-item":"MovieDetailsPage_cast-item__nqh8t","name-cast":"MovieDetailsPage_name-cast__UGDiw","box-movie":"MovieDetailsPage_box-movie__dJ1q5","movie-video":"MovieDetailsPage_movie-video__0mnY6","name-video":"MovieDetailsPage_name-video__pZePB","movie-item":"MovieDetailsPage_movie-item__bak1v","title-similar":"MovieDetailsPage_title-similar__1tBW3","movie-list":"MovieDetailsPage_movie-list__GVLIZ"});function d(e){var t=e.type,a=(0,o.UO)().MovieId,r=(0,n.ZP)(s.cy.getMovieMeta(a,t),s._i).data;if(!r)return null;var i=r.cast,A=r.results;return"credits"===t?!i||i.length<=0?null:(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{className:u("title-cast"),children:"Cast"}),(0,m.jsx)("div",{className:u("box-cast"),children:i.slice(0,4).map((function(e){return(0,m.jsxs)("div",{className:u("cast-item"),children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e&&e.profile_path),alt:""}),(0,m.jsx)("h2",{className:u("name-cast"),children:e.name})]},e.id)}))})]}):"videos"===t?!A||A.length<=0?null:(0,m.jsx)("div",{className:u("box-movie"),children:A.slice(0,3).map((function(e){return(0,m.jsxs)("div",{className:u("movie-item"),children:[(0,m.jsx)("div",{className:u("movie-video"),children:(0,m.jsx)("iframe",{width:"885",height:"498",src:"https://www.youtube.com/embed/".concat(e.key),title:e.name,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),(0,m.jsxs)("h3",{className:u("name-video"),children:["Video: ",e.name]})]},e.id)}))}):(0,m.jsxs)("div",{className:u("movie-list"),children:[(0,m.jsx)("h1",{className:u("title-similar"),children:"Similar Movies"}),(0,m.jsx)(c.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:5,children:A.length>0&&A.map((function(e){return(0,m.jsx)(c.o5,{style:{width:"240px"},children:(0,m.jsx)(l.Z,{data:e})},e.id)}))})]})}var v=function(){var e=(0,o.UO)().MovieId,t=(0,n.ZP)(s.cy.getMovieDetails(e),s._i).data;if(!t)return null;var a=t.genres;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:u("container"),children:[(0,m.jsx)("div",{className:u("background-img"),style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(t&&t.backdrop_path,")")}}),(0,m.jsx)("div",{className:u("overlay")}),(0,m.jsx)("div",{className:u("box-img"),children:(0,m.jsx)("img",{className:u("img"),src:"https://image.tmdb.org/t/p/original/".concat(t&&t.poster_path),alt:""})}),(0,m.jsx)("h1",{className:u("name-movie"),children:t.title}),a.length>0&&(0,m.jsx)("div",{className:u("box-cate"),children:a.map((function(e){return(0,m.jsx)("button",{className:u("category-movie"),children:e.name},e.id)}))}),(0,m.jsx)("div",{className:u("description"),children:t.overview}),(0,m.jsx)(d,{type:"credits"}),(0,m.jsx)(d,{type:"videos"}),(0,m.jsx)(d,{type:"similar"})]}),(0,m.jsx)(A.Z,{})]})}},7470:function(e,t,a){!function(e,t){"use strict";function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var r=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var r=a(t);function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)}var s=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=[]),e.length!==t.length||e.some((function(e,a){return!Object.is(e,t[a])}))},o={error:null},c=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state=o,t.resetErrorBoundary=function(){for(var e,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];null==t.props.onReset||(e=t.props).onReset.apply(e,r),t.reset()},t}n(t,e),t.getDerivedStateFromError=function(e){return{error:e}};var a=t.prototype;return a.reset=function(){this.setState(o)},a.componentDidCatch=function(e,t){var a,r;null==(a=(r=this.props).onError)||a.call(r,e,t)},a.componentDidUpdate=function(e,t){var a,r,i=this.state.error,n=this.props.resetKeys;null!==i&&null!==t.error&&s(e.resetKeys,n)&&(null==(a=(r=this.props).onResetKeysChange)||a.call(r,e.resetKeys,n),this.reset())},a.render=function(){var e=this.state.error,t=this.props,a=t.fallbackRender,i=t.FallbackComponent,n=t.fallback;if(null!==e){var s={error:e,resetErrorBoundary:this.resetErrorBoundary};if(r.isValidElement(n))return n;if("function"===typeof a)return a(s);if(i)return r.createElement(i,s);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(r.Component);function l(e,t){var a=function(a){return r.createElement(c,t,r.createElement(e,a))},i=e.displayName||e.name||"Unknown";return a.displayName="withErrorBoundary("+i+")",a}function A(e){var t=r.useState(null),a=t[0],i=t[1];if(null!=e)throw e;if(null!=a)throw a;return i}e.ErrorBoundary=c,e.useErrorHandler=A,e.withErrorBoundary=l,Object.defineProperty(e,"__esModule",{value:!0})}(t,a(2791))},6043:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADeCAYAAABWkm6KAAAAAXNSR0IArs4c6QAAD0JJREFUeF7tnGeoXFUXhnfsBRN7QaOJJcSu2DAoRIJoTPyh/pCgIQl2iQ1rBLtJrFgS0UQ0CSKiooLGGgUlNiwoYom9F7BHjN18vPtjhjNzz8yambtczlyfA/mRe/esfc6z17PPbnMHLVu2bHniggAEQggMQrgQzlQCgUwA4UgECAQSQLhA2FQFAYQjByAQSADhAmFTFQQQjhyAQCABhAuETVUQQDhyAAKBBBAuEDZVQQDhyAEIBBJAuEDYVAUBhCMHIBBIAOECYVMVBBCOHIBAIAGEC4RNVRBAOHIAAoEEEC4QNlVBAOHIAQgEEkC4QNhUBQGEIwcgEEgA4QJhUxUEEI4cgEAgAYQLhE1VEEA4cgACgQQQLhA2VUEA4cgBCAQSQLhA2FQFAYQjByAQSADhAmFTFQQQjhyAQCABhAuETVUQQDhyAAKBBBAuEDZVQQDhyAEIBBJAuEDYVAUBhCMHIBBIAOECYVMVBBCOHIBAIAGEC4RNVRBAOHIAAoEEEC4QNlVBAOHIAQgEEkC4QNhUBQGEIwcgEEgA4QJhUxUEEI4cgEAgAYQLhE1VEEA4cgACgQQQLhA2VUEA4cgBCAQSQLhA2FQFAYQjByAQSADhAmFTFQQQjhyAQCABhAuETVUQQDhyAAKBBBAuEDZVQQDhyAEIBBJAuEDYVAUBhCMHIBBIAOECYVMVBBCOHIBAIAGEC4RNVRBAOHIAAoEEEC4QNlVBAOHIAQgEEkC4QNhUBQGEIwcgEEgA4QJhUxUEEI4cgEAgAYQLhE1VEEA4cgACgQQQLhA2VUEA4cgBCAQSQLhA2FQFAYQjByAQSADhAmFTFQQQjhyAQCABhAuETVUQQDhyAAKBBBAuEDZVQQDhyAEIBBJAuEDYVAUBhCMHIBBIAOECYVMVBBCOHIBAIAGEC4RNVRBAOHIAAoEEEC4QNlVBAOHIAQgEEkC4QNhUBQGEIwcgEEgA4QJhUxUEEI4cgEAgAYQLhE1VEOgK4X788cd01llnpTfffLNPi5x99tlp3LhxadCgQX1+9+CDD6bLLrus5uezZs1Ku+yyy7/asmX31eyGzjnnnPyMXAOfQNcLN3z48DRz5sy06aabItzAz8cB/4RdL5xaYOLEiemoo45KK664Yk2D8IYb8Pk54B6wJ4Rba6210pVXXpm23357hBtwKfjfeqCeEE5NMmbMmKT53Oqrr15toW59wxVT6OOPP05nnHFG+uqrr6o/3njjjdNVV12Vtthii/9WtvG0qWeEW2mlldL555+f9ttvv46FW758efryyy/To48+mp5//vn03nvvpd9//z3HU/LvvvvuOf6OO+6YVlhhBZf06ES4V199NZ100kk19R9xxBHp+OOPz+Lef//96fHHH8/Psu666+YFl0MOOSRtsMEG1c/8/PPPSR3SQw89lN5///2kUcIee+yRFGebbbYpXYT64IMPkup+66230kcffZQ+//zz9NNPP1VjbrLJJmnYsGE5zr777ps22mij0jjFG6+/X7XjyJEjcweqODNmzKhZLNt///3zAtpqq61Wyv+7777Lbffkk0+mt99+O+n/unRvI0aMyCzUjiuvvLJL+3kH6Vrhttpqq/Tnn38mJWzlElAtoGy44Yb5R+284ZSAt9xyS7rvvvty3GbXzjvvnE4//fSkBZv+Xl7CHXbYYTnZtQpb6SSK9zZ06NA0ffr03HE888wz+Q1aScZiOYl3ySWXpN12263Po910003p9ttvb+mRJc6ECRPSpEmT0qqrrtrnM3/99Ve655570pw5c0rvVx+QVGqLYns0Eu6PP/7I8W6++eaG8So3ofaTtJtvvnlLzxJZqGuFE3j1VJq7FRvkuOOOy720tglaFe7bb7/NPekLL7zQMttKAvdXOi/hWrlxvZkl5cMPP9y0U9EbRh3X+uuvXxO2HeEqHyy2R+Vnku22227LHVy7V5lwv/zyS7r++uvTwoULWw5X3zm3/MF/uGBXC3fKKaek6667Li1atKiKQUly+eWX5+FDK8Kp8efNm5cWLFhQg/LAAw9MShbFU4Nq6DV79uyaRN1zzz3TBRdckAYPHtxxM0QK185N6i03evTomo/MnTs3vfHGG+mAAw7Ind16662XV4bF8Isvvkh33XVXTvpiB1gmr2KceeaZNcNRvRGPPPLIPPTVMFhvLA0J1RF++umn1fuoF07TgHvvvTdde+211TJ6S5944ol5WKo5faP2O/zww9MJJ5zQZ3W7HU7eZbtaOA0LNP+ob7yDDjoonXbaaemJJ54wN771eS1afPPNN1V2GnJcfPHFueGLvfINN9yQ7r777hrGF154YW7YTi8v4TbbbLOcPHvttVdaZZVV8vxNbynNuYqXyk2ZMiXPsZSMem4l61NPPVVTTkPBo48+uq3HkiRXX3117ugq1xprrJGuueaatN122+UfqYz+/8ADD9TEnjx5ctK/4tZO2YGHeuE0j1T7F6U89dRT06GHHlozfyy7N81V1TkX57ZtPfA/ULjrhdPkV0MTDVEql3pL9Yyao1gnTcregscee2ze26u/Xn755aTGLF4HH3xwlrvTSbiXcJVFk+K9qcNRh1C8yso999xzeU5jlWslv6xRxddff51Xk999991quEarsq0Ip8WR8847rxprnXXWydJLpvpLkl9xxRU1eaIR0k477dTKo4WU6XrhNLFWLzdt2rT04YcfVqFo0q8jXPXzhOLRLg1HbrzxxnTHHXfUwFSj7L333n0Al8mheZGk7nRY+U8K12w1s/hwr732WtLwvDgULBOz8hm9LT777LP0yiuvZPZatdSi0yeffFI6Nywyl2hacPr++++rt7DPPvtkafQ2LF6tCNfJvLJYR6O2DrGrpJKeEK5sHK9nUQMuW7as5rGKjf/rr7/mHq84B1ThRuctlSR6EyxZsqQaU0MlxRgyZEhHbdQNwpXdQ5lw4qUhtTqo4naA9eBFnmWdQKOVR0u4Ru1n3U/x9912TrUnhBNAyXDRRRclDfuaXQj3//264tWKcJ2s5FbqQLjWu4CeEU6PpLnIueee23TJmyFl+8JpBKE5sva4ipcWYLSqqDmQNpY1onjssceazpvLhpSdvuHKpgTN5nCtp/2/V7KnhGtliFE/XGxn0UTDIS2QFOc63bxo0uocznrDaViubYKnn366monF7ZdielqLJlo91api8cDCDjvskFdU11577bbncGX1ddswsR19e0o4PVjZHk/xgeuFK9sW0IKLtgWKCyHaa+rmbYGyOZeXcGVzqUZzV0s47YnpxEtxG0JvRq0q159useZwatey9ttyyy3TpZdemnQ4oezSm1ELbHpja3jdTWdWe064RhvZZfMJ/azZxvcxxxyT92j05vTc+O7vF1BbFanVctYbrmzkoK2XqVOnpvHjx+ejWxLpxRdfzKu+WsFs1smVbVfoxM7JJ5+cdt1117x/po30O++8s89Gev3ws9GpFQ13tbUzatSovKClmHoOnY/V9oCGvnpLd9sh8Z4TTg1dtk3QSDj9vJMFgf4c7eo14cTokUceyZvE1jnTsjdK/ahi6dKleYGrnaN0lbheR7sUrxu/ldGTwmnIoKRWgtRfjZb8NXy59dZb80l7K6k09NHpFPWinVy9KNxvv/2W9zTr9yzrF1G23nrrfFK/2RtOv9NcTu3TaFVZb1CdhtEeX/GrS80OL+vg+fz581vestBQUnPHRkPPTtq2v5/pSeH00I160WZ/08T6eo6OTekYl84H9ufrOb0onJj+/fff6aWXXspDPQ1XK99K0NnFsWPH5kPjWim2TvdUklIb6HrL6SykxNLeno7T6dCBjmatueaa+VRKcYHF+nqONuAl8eLFi9M777xTsxmv2Dq8rXOg+qfztvV/JaC/wvT3810hXH8fgs/3JoGyLYROznj20tMjXC+11gC6V4029N07fV+ueHXbUSxv5AjnTZR4mUDlqz4aImplUl8a1gFwDVu1iKVhtzbbi1+mLfsWx0DDiXADrUW75HnaPXTc7JvoXfJILreBcC4YCVJPoB3htBqs0yM6Qlb2B38HEl2EG0it2UXPohNBzz77bHr99dfTDz/8ULOaqC0B/b2RbbfdNq8KS7Syv4vSRY/jdisI54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZsAwtmMKAEBNwII54aSQBCwCSCczYgSEHAjgHBuKAkEAZvA/wD3fLqTrbRmsAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=561.f46f00e8.chunk.js.map