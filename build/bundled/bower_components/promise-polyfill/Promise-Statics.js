Promise.all=Promise.all||function(){var r=Array.prototype.slice.call(1===arguments.length&&Array.isArray(arguments[0])?arguments[0]:arguments);return new Promise(function(n,e){function t(i,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var f=c.then;if("function"==typeof f)return void f.call(c,function(r){t(i,r)},e)}r[i]=c,0===--o&&n(r)}catch(r){e(r)}}if(0===r.length)return n([]);for(var o=r.length,i=0;i<r.length;i++)t(i,r[i])})},Promise.race=Promise.race||function(r){var n=r;return new Promise(function(r,e){for(var t=0,o=n.length;t<o;t++)n[t].then(r,e)})};