(this.webpackJsonptinder_ant_react=this.webpackJsonptinder_ant_react||[]).push([[0],{54:function(e,t,a){e.exports=a(69)},59:function(e,t,a){},60:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(25),i=a.n(n),o=(a(59),a(14)),p=a(6),m=a(15),c=a(16),l=a(17),h=(a(60),a(4)),u=a.n(h);var g={background:"#996666",color:"#fff",textAlign:"center",padding:"10px"},d=function(){return r.a.createElement("header",{style:g},r.a.createElement("h1",null,"Tinder - Amir Nadav Tamir"))},b=a(46),x=a.n(b),f=a(47),v=a.n(f),j=a(90),y=a(94),E=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(j.a,null,r.a.createElement(y.a,{onClick:function(){return e.props.nextUser()},variant:"contained",color:"primary"},r.a.createElement(x.a,null))," "," "," ",r.a.createElement(y.a,{onClick:function(){return e.props.nextUser()},variant:"contained",color:"primary"},r.a.createElement(v.a,null)))}}]),t}(s.Component),O=a(52),w=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O.a,{style:_,src:this.props.usersList[this.props.userIndex].image,fluid:!0}),r.a.createElement("p",null,this.props.usersList[this.props.userIndex].name),r.a.createElement("p",null,this.props.usersList[this.props.userIndex].age),r.a.createElement("p",null,this.props.usersList[this.props.userIndex].location))}}]),t}(s.Component),_={maxWidth:"50%"},k=(a(37),a(95),a(92)),T=(a(93),Object(k.a)({root:{width:300}}),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{onClick:this.props.filter_tinder(this.props.usersList,this.props.Min_Age,this.props.Max_Age),variant:"contained",color:"primary"},"Submit "))}}]),t}(s.Component)),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={gender:null},a}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"gender"},r.a.createElement("select",null,r.a.createElement("option",null,"Select gender"),r.a.createElement("option",{value:"male"},"Male"),r.a.createElement("option",{value:"female"},"Female")))}}]),t}(s.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"submit_btn"})}}]),t}(s.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(w,{userIndex:this.state.userIndex,usersList:this.state.usersList}),r.a.createElement(E,{userIndex:this.props.userIndex,nextUser:this.props.nextUser}))}}]),t}(s.Component),C=a(22),U=a(27),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).setGender=function(e){a.setState({user_gender:e})},a.nextUser=function(){alert(a.state.userIndex),a.setState({userIndex:a.state.userIndex+1}),alert(a.state.userIndex)},a.filter_tinder=function(e,t,s,r){for(var n=0;n<20;n++)e[a.state.userIndex].age>=t&&a.props.usersList[a.state.userIndex].age<=s&&(a.filterArr[0]=a.props.usersList[n])},a.state={users:[{id:u.a.v4(),name:"David Matos",gender:"male",age:30,height:174,location:"Eilat",image:"https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg",premium:!1},{id:u.a.v4(),name:"Amir Buzaglo",gender:"male",age:24,height:181,location:"Tel-Aviv",image:"https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["Bar","Party"]},{id:u.a.v4(),name:"Nadav Katan",gender:"male",age:28,height:178,location:"Netanya",image:"https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["TV","Dance"]},{id:u.a.v4(),name:"Leo Kaplan",gender:"male",age:21,height:181,location:"Ashdod",image:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["Friends","TV"]},{id:u.a.v4(),name:"Cristiano Aronade",gender:"male",age:30,height:188,location:"Jerusalem",image:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!1},{id:u.a.v4(),name:"Zinadine Zakzak",gender:"male",age:30,height:179,location:"Kfar-Saba",image:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!1},{id:u.a.v4(),name:"Eitan Tayeb",gender:"male",age:47,height:176,location:"Petah Tikva",image:"https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["Bar","Friends"]},{id:u.a.v4(),name:"Xavi Shifta",gender:"male",age:38,height:170,location:"Tel-Aviv",image:"https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!1},{id:u.a.v4(),name:"Almog Maniac",gender:"male",age:21,height:180,location:"Eilat",image:"https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["Bar","Party"]},{id:u.a.v4(),name:"Yossi Cohen",gender:"male",age:30,height:170,location:"Netanya",image:"https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!1},{id:u.a.v4(),name:"Sapir Matok",gender:"female",age:27,height:163,location:"Netanya",image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["Friends","Party"]},{id:u.a.v4(),name:"Noam Klil",gender:"female",age:22,height:167,location:"Kfar-Saba",image:"https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["Bar","TV"]},{id:u.a.v4(),name:"Odelia Levi",gender:"female",age:24,height:170,location:"Ashdod",image:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["TV","Party"]},{id:u.a.v4(),name:"Nicole Lomashu",gender:"female",age:40,height:171,location:"Eilat",image:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!1},{id:u.a.v4(),name:"Nati Hazan",gender:"female",age:32,height:170,location:"Tel-Aviv",image:"https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["Bar","Dance"]},{id:u.a.v4(),name:"Roni Til",gender:"female",age:25,height:169,location:"Jerusalem",image:"https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["TV","Friends"]},{id:u.a.v4(),name:"Gili Hatul",gender:"female",age:30,height:170,location:"Jerusalem",image:"https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!1},{id:u.a.v4(),name:"Viki Lover",gender:"female",age:22,height:165,location:"Eilat",image:"https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500s",premium:!1},{id:u.a.v4(),name:"Noga Knafo",gender:"female",age:28,height:171,location:"Tel-Aviv",image:"https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!1},{id:u.a.v4(),name:"Shira Yafa",gender:"female",age:35,height:173,location:"Petah Tikva",image:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",premium:!0,hobbies:["TV","Bar"]}],seacrchAge:"",userIndex:1},a}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U.a,null,r.a.createElement(C.a,{exact:!0,path:"/"},r.a.createElement(I,null),r.a.createElement(T,{filter_tinder:this.filter_tinder,usersList:this.state.users,user_gender:this.user_gender,setGender:this.setGender}),r.a.createElement(A,{goToUser:this.goToUser}),r.a.createElement(L,{filter_tinder:this.filter_tinder,usersList:this.state.users,user_gender:this.user_gender,setGender:this.setGender})),r.a.createElement(C.a,{exact:!0,path:"/user"},r.a.createElement(L,{userIndex:this.userIndex,usersList:this.users,filterAge:this.filterUsers,nextUser:this.nextUser,goToUser:this.goToUser}))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.56e97dff.chunk.js.map