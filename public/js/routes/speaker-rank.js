(function(){define(["player","util","underscore"],function(t,e){return function(n,r){return r.when("/speaker-rank",{templateUrl:"partials/speaker-rank.html",controller:["$scope",function(n){var r,o,i;return r=function(){var t,e,r,o,i,s,a,l,u,c;if(o=n.tournament,e=o.rankFromSpeakers,t={},e.all)for(u=o.rounds,i=0,a=u.length;a>i;i++)r=u[i],r.paired&&(t[r.id]=!0);else for(c=o.rounds,s=0,l=c.length;l>s;s++)r=c[s],r.paired&&e[r.id]&&(t[r.id]=!0);return t},o=function(t){var e,o,i,s,a;for(e=[],null==t&&(t=r()),a=n.tournament.rounds,i=0,s=a.length;s>i;i++)o=a[i],t[o.id]&&e.push(o);return e},n.refreshStats=function(r){var i,s,a,l,u,c,d,p,h,f,m,g;for(f=n.tournament,c=n.players=f.players.slice(0),null==r&&(r=o()),t.calculateStats(c,r),h=f.speakerRankSorter.boundComparator(),c.sort(function(t,e){var n,r;return r=t.stats.roundsPlayed<f.minPlayed,n=e.stats.roundsPlayed<f.minPlayed,n===r?h(t.stats,e.stats):n?-1:1}),console.log(c),l=0,a=0,s=0,m=0,g=c.length;g>m;m++)u=c[m],p=e.decimalsOf(u.stats.score,2),d=e.decimalsOf(u.stats.reply,2),i=e.decimalsOf(u.stats.scoreHighLow,2),p>l&&(l=p),d>a&&(a=d),i>s&&(s=i);return n.scoreDec=l,n.replyDec=a,n.highLowDec=s},i=null,e.installScopeUtils(n),n.$watch(function(){return JSON.stringify(i=r())},function(){return n.refreshStats(o(i))})}]})}})}).call(this);