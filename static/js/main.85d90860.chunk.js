(this["webpackJsonpcursor-form"]=this["webpackJsonpcursor-form"]||[]).push([[0],{28:function(e,a,t){e.exports=t(40)},34:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(23),l=t.n(s),c=(t(33),t(34),t(26)),i=t(12),o=t(10),m=t(14),u=t(15),d=t(17),h=t(16),p=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.isAuth;return n.a.createElement("div",{className:"Layout"},e?n.a.createElement("h1",null,"Hello my friend!!!!"):n.a.createElement("div",{className:"form-container",style:{width:"450px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",border:"1px solid lightgrey",borderRadius:"5px",padding:"30px 20px"}},this.props.children,n.a.createElement("footer",null,n.a.createElement("span",{className:"d-flex justify-content-center mt-4 copyright"},"Copyright \xa9 Your website 2020"))))}}]),t}(n.a.Component),f=t(11),E=t(13),g=t(41),v=t(42),N=t(43),b=t(44),w=t(45),y=function(e,a){return localStorage.setItem(e,JSON.stringify(a))},C=function(e){return JSON.parse(localStorage.getItem(e))},j=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={user:{password:"",email:""},errors:{}},e.onChange=function(a){e.setState({user:Object(E.a)({},e.state.user,Object(f.a)({},a.target.name,a.target.value))})},e.isValid=function(){var a={},t=e.state.user,r=t.password,n=t.email;return/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(n)||(a.email="Ivalid email"),r<4&&(a.password="Must be 4 characters or more"),a},e.onClick=function(a){a.preventDefault();var t=e.state.user,r=t.password,n=t.email,s=e.isValid();if(Object.keys(s).length>0)e.setState({errors:s});else{e.setState({errors:{}});var l=C("user");l.email===n&&l.password===r?e.props.changeIsAuth():alert("Wrong password or email")}},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"text-center mb-4"},"Sign in"),n.a.createElement(g.a,null,n.a.createElement(v.a,null,n.a.createElement(N.a,{type:"email",name:"email",id:"email",placeholder:"Email address*",onChange:this.onChange}),e.email?n.a.createElement("div",{className:"error mt-2"},e.email):null),n.a.createElement(v.a,null,n.a.createElement(N.a,{type:"password",name:"password",id:"password",placeholder:"Password*",onChange:this.onChange}),e.password?n.a.createElement("div",{className:"error"},e.password):null),n.a.createElement(v.a,{check:!0},n.a.createElement(b.a,{check:!0},n.a.createElement(N.a,{type:"checkbox"})," Remember me")),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement(w.a,{className:"my-4 btn",onClick:this.onClick},"SIGN IN")),n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement(i.b,{to:"/"},"Forgot password"),n.a.createElement(i.b,{to:"/sign-up"},"Sign up"))))}}]),t}(r.Component),k=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={user:{firstName:"",lastName:"",password:"",email:"",isChecked:!1},errors:{}},e.onChange=function(a){var t=a.target,r=t.name,n=t.value;e.setState((function(e){return{user:Object(E.a)({},e.user,Object(f.a)({},r,n))}}),(function(){var a=e.isValid();e.setState({errors:Object(E.a)({},e.state.errors,Object(f.a)({},r,a[r]))})}))},e.onChangeIsChecked=function(a){e.setState({user:Object(E.a)({},e.state.user,{isChecked:a.target.checked})})},e.onClick=function(a){a.preventDefault();var t=e.isValid();Object.keys(t).length>0?e.setState({errors:t}):(e.setState({errors:{}}),y("user",Object(E.a)({},e.state.user)),alert("You have successfully registered!"))},e.isValid=function(){var a={},t=e.state.user,r=t.lastName,n=t.firstName,s=t.password,l=t.email;return/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(l)||(a.email="Invalid email"),n.length<3&&(a.firstName="Must be 3 characters or more"),r.length<3&&(a.lastName="Must be 3 characters or more"),/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(s)||(a.password="Wrong password"),a},e.isEmptyValue=function(a){return 0===e.state.user[a].length},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,a=e.user,t=a.firstName,r=a.lastName,s=a.password,l=a.email,c=a.isChecked,o=e.errors;return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"text-center mb-4"},"Sign up"),n.a.createElement(g.a,null,n.a.createElement("div",{className:"d-flex justify-content-around"},n.a.createElement(v.a,{className:"mr-2"},n.a.createElement(N.a,{type:"text",name:"firstName",id:"firstName",placeholder:"First name*",value:t,onChange:this.onChange,className:this.isEmptyValue("firstName")?null:o.firstName?"inValid":"valid"}),o.firstName?n.a.createElement("div",{className:"error"},o.firstName):null),n.a.createElement(v.a,null,n.a.createElement(N.a,{type:"text",name:"lastName",id:"lastName",placeholder:"Last name*",value:r,onChange:this.onChange}),o.lastName?n.a.createElement("div",{className:"error"},o.lastName):null)),n.a.createElement(v.a,null,n.a.createElement(N.a,{type:"email",name:"email",id:"email",placeholder:"Email address*",value:l,onChange:this.onChange}),o.email?n.a.createElement("div",{className:"error mt-2"},o.email):null),n.a.createElement(v.a,null,n.a.createElement(N.a,{type:"password",name:"password",id:"password",placeholder:"Password*",value:s,onChange:this.onChange}),o.password?n.a.createElement("div",{className:"error"},o.password):null),n.a.createElement(v.a,{check:!0},n.a.createElement(b.a,{check:!0,className:"d-flex align-items-center"},n.a.createElement(N.a,{type:"checkbox",checked:c,onChange:this.onChangeIsChecked}),n.a.createElement("span",{className:"text-center mt-2"},"I want to receive inspiration, marketing promotion and updates via email"))),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement(w.a,{className:"my-4 btn",onClick:this.onClick},"SIGN UP")),n.a.createElement("div",{className:"d-flex justify-content-end"},n.a.createElement(i.b,{to:"/"},"SIGN IN"))))}}]),t}(r.Component),O=function(){var e=Object(r.useState)(!1),a=Object(c.a)(e,2),t=a[0],s=a[1];return n.a.createElement(i.a,{basename:"cursor-form"},n.a.createElement(o.c,null,n.a.createElement(p,{isAuth:t},n.a.createElement(o.a,{exact:!0,path:"/"},n.a.createElement(j,{changeIsAuth:function(){s(!t)}})),n.a.createElement(o.a,{exact:!0,path:"/sign-up",component:k}))))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.85d90860.chunk.js.map