function ModuleMaker(e){if(!(this instanceof ModuleMaker))return new ModuleMaker(e);this.name=e}ModuleMaker.prototype.init=function(){return console.log('Initialized module "'+this.name+'"'),this},define("lib/module-maker",function(e){return function(){var t,n;return t||e.ModuleMaker}}(this)),define("util/random",[],function(){return function(){return Math.floor(Math.random()*10)+1}}),define("module1",["require","exports","module","lib/module-maker","util/random"],function(e,t,n){var r=e("lib/module-maker"),i=e("util/random"),s=new r("module1");for(var o in s.prototype)console.log(o,typeof o,s[o]);s.random=i,n.exports=s}),define("module2",{name:"module2"}),define("app",["require","module1","module2"],function(e){var t=e("module1"),n=e("module2");t.init(),n&&console.log("%s loaded",n.name)});