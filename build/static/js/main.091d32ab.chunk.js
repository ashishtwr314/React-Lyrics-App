(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/lg.equalizer-bars-loader.cb17b80a.gif"},19:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),l=(a(25),a(2)),o=a(3),i=a(5),m=a(4),u=a(6),h=a(36),p=a(38),b=a(37),d=(a(27),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"logo text-center"}," Lyrics Finder "))}}]),t}(n.Component)),f=a(18),g=c.a.createContext(),k=function(e,t){switch(t.type){case"SEARCH_TRACKS":return Object(f.a)({},e,{tracks:t.payload,heading:"Search Results"});default:return e}},y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=".concat("e60477a5ef35455e8515a9468aec9b63")).then(function(e){return e.json()}).then(function(e){a.setState({tracks:e.message.body.track_list})}).catch(function(e){console.error(e)})},a.state={tracks:[],heading:"Top 10 tracks",dispatch:function(e){return a.setState(function(t){return k(t,e)})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),E=g.Consumer,j=a(15),O=a.n(j),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"center"},c.a.createElement("img",{src:O.a,alt:"Loading"}))}}]),t}(n.Component),v=a(35),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"tracks-card"},c.a.createElement("h4",null,this.props.track.track_name),c.a.createElement("p",null,this.props.track.artist_name),c.a.createElement(v.a,{to:"/lyrics/".concat(this.props.track.track_id),className:"btn btn-block btn-primary"},"View Lyrics")))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(E,null,function(e){return void 0===e.tracks||0===e.tracks.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(_,null)):c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"heading text-center"},e.heading),c.a.createElement("div",{className:"row"},e.tracks.map(function(e){return c.a.createElement(w,{key:e.track.track_id,track:e.track})})))})}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onClick=function(e,t){t.preventDefault(),fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=".concat(a.state.song,"&q_lyrics=").concat(a.state.song,"&page_size=10&page=1&s_track_rating=desc&apikey=").concat("e60477a5ef35455e8515a9468aec9b63")).then(function(e){return e.json()}).then(function(t){e({type:"SEARCH_TRACKS",payload:t.message.body.track_list})}).catch(function(e){console.error(e)})},a.onChange=function(e){a.setState({song:e.target.value})},a.state={song:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(E,null,function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card text-center"},c.a.createElement("h2",{className:"text-center"},"Search For a Song"),c.a.createElement("form",{className:"text-center"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:e.onChange,value:e.state.song,type:"text",className:"form-control",name:"song",placeholder:"Enter a song name"}),c.a.createElement("button",{onClick:e.onClick.bind(e,t.dispatch),className:"btn btn-primary",type:"submit"},"Get lyrics")))))})}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(C,null),c.a.createElement(N,null))}}]),t}(n.Component),S=a(16),F=a.n(S),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(a.props.match.params.id,"&apikey=").concat("e60477a5ef35455e8515a9468aec9b63")).then(function(e){return e.json()}).then(function(e){return a.setState({lyrics:e.message.body.lyrics.lyrics_body}),fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=".concat(a.props.match.params.id,"&apikey=").concat("e60477a5ef35455e8515a9468aec9b63"))}).then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({track_name:e.message.body.track.track_name,artist_name:e.message.body.track.artist_name,genre:e.message.body.track.primary_genres.music_genre_list[0].music_genre.music_genre_name_extended,rel_date:e.message.body.track.first_release_date})}).catch(function(e){console.error(e)})},a.state={lyrics:"",track_name:"",artist_name:"",genre:"No Genre Specified",album_art:"https://i.ya-webdesign.com/images/cd-album-cover-png-6.png",rel_date:"Released info not available"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return""===this.state.lyrics?c.a.createElement(_,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-sm-6 col-md-6 "},c.a.createElement("h3",{className:"track"},this.state.track_name),c.a.createElement("h4",{className:"artist"},c.a.createElement("small",null,this.state.artist_name)),c.a.createElement("p",{className:"lyrics"},this.state.lyrics)),c.a.createElement("div",{className:"col-lg-6 col-sm-6 col-md-6 "},c.a.createElement("img",{width:"120px",src:this.state.album_art,alt:"AlbumArt",className:"album-art"}),c.a.createElement("h3",null,this.state.genre),c.a.createElement("br",null),c.a.createElement("h3",null,c.a.createElement(F.a,{format:"DD/MM/YYYY"},this.state.rel_date)))))}}]),t}(n.Component),R=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(y,null,c.a.createElement(h.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement("div",{className:"container"},c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement(b.a,{exact:!0,path:"/",component:x}),c.a.createElement(b.a,{exact:!0,path:"/lyrics/:id",component:A})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.091d32ab.chunk.js.map