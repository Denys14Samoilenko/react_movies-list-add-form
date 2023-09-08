(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var n=i(8),a=i.n(n),c=(i(16),i(11)),s=i(2),r=(i(17),i(1)),l=(i(18),i(19),i(0)),d=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})},m=i(5),b=i(7),j=i(9),u=i.n(j);var h=function(e){var t=e.name,i=e.value,n=e.label,a=void 0===n?t:n,c=e.placeholder,d=void 0===c?"Enter ".concat(a):c,o=e.required,m=void 0!==o&&o,b=e.onChange,j=void 0===b?function(){}:b,h=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),g=Object(s.a)(h,1)[0],p=Object(r.useState)(!1),O=Object(s.a)(p,2),v=O[0],f=O[1],x=v&&m&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:g,children:a}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:g,"data-cy":"movie-".concat(t),className:u()("input",{"is-danger":x}),placeholder:d,value:i,onChange:function(e){return j(e.target.value)},onBlur:function(){return f(!0)}})}),x&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(a," is required")})]})},g=function(e){var t=e.onAdd,i=Object(r.useState)(0),n=Object(s.a)(i,2),a=n[0],c=n[1],d=Object(r.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),o=Object(s.a)(d,2),j=o[0],u=o[1],g=function(e,t){u((function(i){return Object(b.a)(Object(b.a)({},i),{},Object(m.a)({},e,t))}))},p=!j.title||!j.imgUrl||!j.imdbUrl||!j.imdbId;return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),c((function(e){return e+1})),u({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),t({title:j.title,description:j.description,imgUrl:j.imgUrl,imdbUrl:j.imdbUrl,imdbId:j.imdbId})},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(h,{name:"title",label:"Title",value:j.title,onChange:function(e){return g("title",e)},required:!0}),Object(l.jsx)(h,{name:"description",label:"Description",value:j.description,onChange:function(e){return g("description",e)}}),Object(l.jsx)(h,{name:"imgUrl",label:"Image URL",value:j.imgUrl,onChange:function(e){return g("imgUrl",e)},required:!0}),Object(l.jsx)(h,{name:"imdbUrl",label:"Imdb URL",value:j.imdbUrl,onChange:function(e){return g("imdbUrl",e)},required:!0}),Object(l.jsx)(h,{name:"imdbId",label:"Imdb ID",value:j.imdbId,onChange:function(e){return g("imdbId",e)},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:p,children:"Add"})})})]},a)},p=i(10),O=function(){var e=Object(r.useState)(p),t=Object(s.a)(e,2),i=t[0],n=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(g,{onAdd:function(e){n((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};a.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ba6accf2.chunk.js.map