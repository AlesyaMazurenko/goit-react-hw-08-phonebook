"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[44],{2044:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var t=r(2791),a=r(9439),i=r(5984),o=r(9434),s=r(5036),l=function(e){return e.contacts.items},u=function(e){return e.contacts.isLoading},c=function(e){return e.contacts.error},d=function(e){var n=e.contacts,r=e.filter;if(!r)return n.items;var t=r.toLowerCase();return n.items.filter((function(e){var n=e.name,r=e.number;return n.toLowerCase().includes(t)||r.includes(t)}))},m=r(2536),h=r(6146),x=r(4585),p=r(7886),f=r(3306),b=r(184),v=function(){var e=(0,t.useState)(""),n=(0,a.Z)(e,2),r=n[0],u=n[1],c=(0,t.useState)(""),d=(0,a.Z)(c,2),v=d[0],g=d[1],j=(0,o.v9)(l),w=(0,o.I0)(),C=(0,m.p)(),y=(0,i.x0)(),k=(0,i.x0)(),I=function(e){var n=e.currentTarget,r=n.name,t=n.value;switch(r){case"name":return u(t);case"number":return g(t);default:return}},z=function(){u(""),g("")};return(0,b.jsx)(h.g,{borderColor:"gray.100",borderWidth:"2px",padding:"4",borderRadius:"lg",width:"100%",maxW:{base:"90vw",sm:"80vw",lg:"50vw",xl:"40vw"},alignItems:"center",children:(0,b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),function(e){var n=e.name,r=e.number;return j.find((function(e){return e.name===n||e.number===r}))}({name:r,number:v}))C({title:"Contact with name ".concat(r," or number ").concat(v," is already in list"),status:"error",duration:5e3,position:"top",isClosable:!0});else{var n=(0,s.uK)({name:r,number:v});w(n),z()}},className:"form1",children:[(0,b.jsx)(x.l,{htmlFor:y,color:"blue.500",ml:"18",children:"Name"}),(0,b.jsx)(p.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:"input_field",value:r,onChange:I,id:y}),(0,b.jsx)(x.l,{htmlFor:k,color:"blue.500",ml:"18",children:"Number"}),(0,b.jsx)(p.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:"input_field",value:v,onChange:I,id:k}),(0,b.jsx)(f.z,{type:"submit",colorScheme:"blue",px:"16",ml:"18",mr:"auto",children:"Add contact"})]})})},g=function(e){return e.filter},j=r(5653),w=r(2893),C=function(){var e=(0,o.v9)(g),n=(0,o.I0)(),r=(0,i.x0)();return(0,b.jsx)(w.U,{children:(0,b.jsx)(p.I,{type:"text",name:"filter",value:e,id:r,onChange:function(e){var r=e.target.value;n((0,j.T)(r))},placeholder:"Search"})})},y=r(8593),k=function(){return(0,b.jsx)("div",{className:"loader-container",children:(0,b.jsx)(y.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"32",visible:!0})})},I=r(2406),z=r(4464),N=r(6096),W=r(1279),A=r(9135),S=function(){var e=(0,o.v9)(d),n=(0,o.I0)(),r=e.map((function(e){var r=e.name,t=e.number,a=e.id;return(0,b.jsxs)(w.U,{children:[(0,b.jsxs)(I.x,{children:[r,": ",t]}),(0,b.jsx)(z.L,{}),(0,b.jsx)(N.h,{icon:(0,b.jsx)(A.Xm5,{}),onClick:function(){return function(e){var r=(0,s.GK)(e);n(r)}(a)},isRound:"true"})]},a)}));return(0,b.jsx)(h.g,{divider:(0,b.jsx)(W.c,{}),borderColor:"gray.100",borderWidth:"2px",padding:"4",borderRadius:"lg",width:"100%",maxW:{base:"90vw",sm:"80vw",lg:"50vw",xl:"40vw"},alignItems:"stretch",children:r})},_=r(5946),F=r(5515),Z=function(){var e=(0,o.v9)(d),n=(0,o.v9)(u),r=(0,o.v9)(c),a=(0,o.I0)();return(0,t.useEffect)((function(){a((0,s.yF)())}),[a]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.g,{children:(0,b.jsx)(_.X,{mb:"8",fontWeight:"extrabold",size:"2xl",bgGradient:"linear(to-r, blue.500, purple.300, purple.500)",bgClip:"text",children:"Phonebook"})}),(0,b.jsx)(h.g,{children:(0,b.jsx)(v,{})}),(0,b.jsxs)(h.g,{children:[(0,b.jsx)(_.X,{mt:"20",mb:"8",fontWeight:"extrabold",size:"2xl",bgGradient:"linear(to-r, blue.500, purple.300, purple.500)",bgClip:"text",children:" Contacts"}),0===(null===e||void 0===e?void 0:e.length)&&(0,b.jsx)(F.C,{p:"3",borderRadius:"lg",variant:"outline",children:"The list is empty. Try to add contact"}),(0,b.jsx)(C,{}),(null===e||void 0===e?void 0:e.length)>0&&(0,b.jsx)(S,{}),n&&!r&&(0,b.jsx)(k,{}),r&&(0,b.jsx)("p",{children:"Oooops... Something went wrong"})]})]})}}}]);
//# sourceMappingURL=44.91f3c202.chunk.js.map