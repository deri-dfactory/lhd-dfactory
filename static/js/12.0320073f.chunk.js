(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[12],{597:function(e,t,n){},603:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(4);var i=n(23),o=n(590),r=n.n(o),s=n(47);function a(e){var t=e.lite,n=Object(i.g)(),o=r()("check-lite-pro",{lite:t,pro:!t}),a=function(e){n.push(e)};return Object(s.jsxs)("div",{className:o,children:[Object(s.jsx)("div",{className:"lite",onClick:function(){return a("/lite")},children:"LITE"}),Object(s.jsx)("div",{className:"pro",onClick:function(){return a("/pro")},children:" PRO"})]})}},640:function(e,t,n){},654:function(e,t,n){"use strict";n.r(t);var i=n(17),o=n(4),r=n(0),s=n.n(r),a=n(2),c=n(53),l=n(591),d=function(){return(d=Object.assign||function(e){for(var t,n=arguments,i=1,o=arguments.length;i<o;i++)for(var r in t=n[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function u(e,t){var n=d({},e);for(var i in t)"object"!=typeof e[i]||null===e[i]||Array.isArray(e[i])?void 0!==t[i]&&(n[i]=t[i]):n[i]=u(e[i],t[i]);return n}var h={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},p={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};var b=function(){function e(e){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!e.datafeed)throw new Error("Datafeed is not defined");if(this._options=u(p,e),e.preset){var t=h[e.preset];t?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(t.disabled_features):this._options.disabled_features=t.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(t.enabled_features):this._options.enabled_features=t.enabled_features):console.warn("Unknown preset: `"+e.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return e.prototype.onChartReady=function(e){this._ready?e.call(this):this._readyHandlers.push(e)},e.prototype.headerReady=function(){var e=this;return this._innerWindowLoaded.then((function(){return e._innerWindow().headerReady()}))},e.prototype.onGrayedObjectClicked=function(e){this._innerAPI().onGrayedObjectClicked(e)},e.prototype.onShortcut=function(e,t){this._innerWindow().createShortcutAction(e,t)},e.prototype.subscribe=function(e,t){this._innerAPI().subscribe(e,t)},e.prototype.unsubscribe=function(e,t){this._innerAPI().unsubscribe(e,t)},e.prototype.chart=function(e){return this._innerAPI().chart(e)},e.prototype.getLanguage=function(){return this._options.locale},e.prototype.setSymbol=function(e,t,n){this._innerAPI().changeSymbol(e,t,n)},e.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},e.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},e.prototype.selectLineTool=function(e){this._innerAPI().selectLineTool(e)},e.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},e.prototype.save=function(e){this._innerAPI().saveChart(e)},e.prototype.load=function(e,t){this._innerAPI().loadChart({json:e,extendedData:t})},e.prototype.getSavedCharts=function(e){this._innerAPI().getSavedCharts(e)},e.prototype.loadChartFromServer=function(e){this._innerAPI().loadChartFromServer(e)},e.prototype.saveChartToServer=function(e,t,n){this._innerAPI().saveChartToServer(e,t,n)},e.prototype.removeChartFromServer=function(e,t){this._innerAPI().removeChartFromServer(e,t)},e.prototype.onContextMenu=function(e){this._innerAPI().onContextMenu(e)},e.prototype.createButton=function(e){return this._innerWindow().createButton(e)},e.prototype.showNoticeDialog=function(e){this._innerAPI().showNoticeDialog(e)},e.prototype.showConfirmDialog=function(e){this._innerAPI().showConfirmDialog(e)},e.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},e.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},e.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},e.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},e.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},e.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},e.prototype.addCustomCSSFile=function(e){this._innerWindow().addCustomCSSFile(e)},e.prototype.applyOverrides=function(e){this._options=u(this._options,{overrides:e}),this._innerWindow().applyOverrides(e)},e.prototype.applyStudiesOverrides=function(e){this._innerWindow().applyStudiesOverrides(e)},e.prototype.watchList=function(){return this._innerAPI().watchlist()},e.prototype.activeChart=function(){return this._innerAPI().activeChart()},e.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},e.prototype.layout=function(){return this._innerAPI().layout()},e.prototype.setLayout=function(e){this._innerAPI().setLayout(e)},e.prototype.layoutName=function(){return this._innerAPI().layoutName()},e.prototype.changeTheme=function(e,t){this._innerWindow().changeTheme(e,t)},e.prototype.getTheme=function(){return this._innerWindow().getTheme()},e.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},e.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},e.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},e.prototype.drawOnAllCharts=function(e){this._innerAPI().drawOnAllCharts(e)},e.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},e.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},e.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},e.prototype.setIntervalLinkingEnabled=function(e){this._innerAPI().setIntervalLinkingEnabled(e)},e.prototype.setTimeFrame=function(e){this._innerAPI().setTimeFrame(e)},e.prototype.symbolSync=function(){return this._innerAPI().symbolSync()},e.prototype.intervalSync=function(){return this._innerAPI().intervalSync()},e.prototype.crosshairSync=function(){return this._innerAPI().crosshairSync()},e.prototype.timeSync=function(){return this._innerAPI().timeSync()},e.prototype.getAllFeatures=function(){return this._innerWindow().getAllFeatures()},e.prototype.clearUndoHistory=function(){return this._innerAPI().clearUndoHistory()},e.prototype.undo=function(){return this._innerAPI().undo()},e.prototype.redo=function(){return this._innerAPI().redo()},e.prototype.startFullscreen=function(){this._innerAPI().startFullscreen()},e.prototype.exitFullscreen=function(){this._innerAPI().exitFullscreen()},e.prototype.takeClientScreenshot=function(e){return this._innerAPI().takeClientScreenshot(e)},e.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},e.prototype._innerWindow=function(){return this._iFrame.contentWindow},e.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},e.prototype._create=function(){var e=this,t=this._render(),n=document.getElementById(this._options.container_id);if(null===n)throw new Error("There is no such element - #"+this._options.container_id);n.innerHTML=t,this._iFrame=n.querySelector("#"+this._id);var i=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(e){i.addEventListener("load",(function t(){i.removeEventListener("load",t,!1),e()}),!1)})),this._innerWindowLoaded.then((function(){e._innerWindow().widgetReady((function(){e._ready=!0;for(var t=0,n=e._readyHandlers;t<n.length;t++){var i=n[t];try{i.call(e)}catch(o){console.error(o)}}e._innerWindow().initializationFinished()}))}))},e.prototype._render=function(){var e=window;if(e[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)e[this._id].chartContent={json:this._options.saved_data},this._options.saved_data_meta_info&&(e[this._id].chartContentExtendedData=this._options.saved_data_meta_info);else if(!this._options.load_last_chart&&!this._options.symbol)throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");var t=(this._options.library_path||"")+(encodeURIComponent(this._options.locale)+"-tv-chart.b555c6a4.html#symbol=")+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.compare_symbols?"&compareSymbols="+encodeURIComponent(JSON.stringify(this._options.compare_symbols)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+t+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},e}();window.TradingView=window.TradingView||{},window.TradingView.version=function(){return"CL v18.043 (internal id b555c6a4 @ 2021-02-18T09:41:15.150Z)"};var m=n(114),j=n(151),_=n.n(j),f={},v=function(e,t,n,i,o){var r,s=e.name;r="prod"==c.DeriEnv.get()?"COIN"==s?"https://oracle3.deri.finance/pricekline/":"https://oracle.deri.finance/pricekline/":"https://oracle2.deri.finance/pricekline/";var a={symbol:s,bars:200};switch(!0){case t.indexOf("D")>0:var l=t.substr(0,1);a.period=24*l*60*60;break;case t.indexOf("W")>0:var d=t.substr(0,1);a.period=24*d*60*60*7;break;case t.indexOf("M")>0:var u=t.substr(0,1);a.period=24*u*60*60*30;break;default:a.period=60*t}return _.a.get(r,{params:Object(m.a)({},a)}).then((function(t){if(t.data.data.length){var n=t.data.data.map((function(e){return{time:String(e.ts).length<13?1e3*e.ts:e.ts,low:Number(e.l),high:Number(e.h),open:Number(e.o),close:Number(e.c),volume:Number(e.v)}}));if(o){var i=n[n.length-1];f[e.name]={lastBar:i}}return n}return[]}))},y={supported_resolutions:["1","5","15","30","60","240","1D","5D","1W","1M"]},g={onReady:function(e){setTimeout((function(){return e(y)}),0)},bars:{},searchSymbols:function(e,t,n,i){},resolveSymbol:function(e,t,n){var i={name:e,pricescale:100,ticker:e,description:"",minmov:1,type:"crypto",has_intraday:!0,intraday_multipliers:["1","2","5","15","30","60","240","1D","7D","1W","1M"],has_weekly_and_monthly:!0,data_status:"streaming",has_no_volume:!0,pro_name:e,has_daily:!0,regular_session:"24x7"};setTimeout((function(){t(i)}),0)},getBars:function(e,t,n,i,o,r,s){if(n>0&&i>0){var a=localStorage.getItem("localResolutions")||t;v(e,a,n,i,s).then((function(e){var t=e.length;t?1e3*i>e[t-1].time?o(e,{noData:!1}):o([],{noData:!0}):o(e,{noData:!0})})).catch((function(e){r(e)}))}},subscribeBars:function(e,t,n,i,o){},unsubscribeBars:function(e){},calculateHistoryDepth:function(e,t,n){},getMarks:function(e,t,n,i,o){},getTimeScaleMarks:function(e,t,n,i,o){},getServerTime:function(e){}},O=n(590),w=n.n(O),I=n(47),x="tv_chart_container";function A(e){var t=e.spec,n=void 0===t?{}:t,r=Object(o.useState)(!0),s=Object(i.a)(r,2),a=s[0],c=s[1],l=Object(o.useState)("thirty"),d=Object(i.a)(l,2),u=d[0],h=d[1],p=Object(o.useState)(null),m=Object(i.a)(p,2),j=m[0],_=m[1],f=w()("btn",u),v=function(e,t){c(!0),h(t),j.chart().refreshMarks(),j.activeChart().setResolution(e,(function(){c(!1)}))};return Object(o.useEffect)((function(){return n.symbol&&_(function(){var e={symbol:n.symbol,datafeed:g,interval:localStorage.getItem("localResolutions")||"1D",container_id:x,library_path:"".concat("https://lhd-defactory.github.io/lhd-dfactory","/charting_library/"),locale:"en",disabled_features:["header_widget","display_market_status","timeframes_toolbar","left_toolbar","legend_context_menu","adptive_logo","use_localstorage_for_settings","edit_buttons_in_legend","control_bar","move_logo_to_main_pane"],enabled_features:["show_logo_on_all_charts"],charts_storage_url:"https://saveload.tradingview.com",charts_storage_api_version:"1.14",client_id:"tradingview.com",user_id:"public_user_id",fullscreen:!1,autosize:!0,overrides:{"paneProperties.background":"#212327","paneProperties.vertGridProperties.color":"#212327","paneProperties.horzGridProperties.color":"#212327","symbolWatermarkProperties.transparency":90,"scalesProperties.textColor":"#AAA","mainSeriesProperties.candleStyle.wickUpColor":"#76af8e","mainSeriesProperties.candleStyle.wickDownColor":"#ee5766"},timezone:"Asia/Beijing"},t=new b(e);return t.onChartReady((function(){t.activeChart().setResolution("30",(function(){c(!1)}))})),t}()),function(){null!==j&&j.remove()}}),[n.symbol]),Object(I.jsxs)("div",{id:"tradingview",children:[Object(I.jsxs)("div",{className:f,children:[Object(I.jsx)("span",{className:"tab-btn one",onClick:function(){return v("1","one")},children:"1min"}),Object(I.jsx)("span",{className:"tab-btn five",onClick:function(){return v("5","five")},children:"5min"}),Object(I.jsx)("span",{className:"tab-btn fifteen",onClick:function(){return v("15","fifteen")},children:"15min"}),Object(I.jsx)("span",{className:"tab-btn thirty",onClick:function(){return v("30","thirty")},children:"30min"}),Object(I.jsx)("span",{className:"tab-btn sixty",onClick:function(){return v("60","sixty")},children:"1hour"}),Object(I.jsx)("span",{className:"tab-btn one-day",onClick:function(){return v("1D","one-day")},children:"1day"}),Object(I.jsx)("span",{className:"tab-btn one-week",onClick:function(){return v("1W","one-week")},children:"1week"})]}),Object(I.jsx)("div",{className:"loading",style:{display:a?"block":"none"},children:Object(I.jsx)("div",{className:"spinner-border",role:"status",children:Object(I.jsx)("span",{className:"sr-only"})})}),Object(I.jsx)("div",{id:x})]})}var N=n(592);function C(e){var t=e.wallet,n=void 0===t?{}:t,r=e.spec,l=void 0===r?{}:r,d=e.indexPrice,u=Object(o.useState)({fundingRate0:"-",tradersNetVolume:"-"}),h=Object(i.a)(u,2),p=h[0],b=h[1],m=Object(o.useState)("rise"),j=Object(i.a)(m,2),_=j[0],f=j[1],v=Object(o.useRef)(),y=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConnected()){e.next=5;break}return e.next=3,Object(c.getFundingRate)(n.detail.chainId,l.pool);case 3:t=e.sent,b(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return v.current&&(v.current>d.index?f("fall"):f("rise")),v.current=d.index,function(){}}),[d.index]),Object(o.useEffect)((function(){return y(),function(){}}),[n.detail.account,l,d.index]),Object(I.jsxs)("div",{id:"trading-view",children:[Object(I.jsxs)("div",{className:"right-top",children:[Object(I.jsxs)("div",{className:"symbol-basetoken-text",children:[l.symbol||"BTCUSD"," / ",l.bTokenSymbol||"BUSD"," (10X)"]}),Object(I.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(I.jsx)("div",{className:"trade-dashboard-title",children:"Index Price"}),Object(I.jsx)("div",{className:_,children:Object(I.jsx)(N.a,{value:d.index})})]}),Object(I.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(I.jsxs)("div",{className:"trade-dashboard-title",children:[Object(I.jsx)("span",{children:"Funding Rate Annual"}),"  "]}),Object(I.jsx)("div",{className:"trade-dashboard-value",children:Object(I.jsx)("span",{className:"funding-per",children:Object(I.jsx)(N.a,{value:p.fundingRate0,decimalScale:4,suffix:"%"})})})]}),Object(I.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(I.jsx)("div",{className:"trade-dashboard-title",children:"Total Net Position"}),Object(I.jsx)("div",{className:"trade-dashboard-value",children:Object(I.jsx)(N.a,{value:p.tradersNetVolume})})]}),Object(I.jsxs)("div",{className:"trade-dashboard-item latest-price",children:[Object(I.jsx)("div",{className:"trade-dashboard-title",children:"Pool Total liquidity"}),Object(I.jsxs)("div",{className:"trade-dashboard-value",children:[" ",Object(I.jsx)(N.a,{allowLeadingZeros:!0,value:p.liquidity,decimalScale:2})," ",l.bTokenSymbol]})]})]}),Object(I.jsx)("div",{className:"tradingview",children:Object(I.jsx)(A,{spec:l})})]})}var S=n(50),M=n(594),D=n(600),P=n(611),k=(n(601),n(157)),R=n(159),T=Object(M.a)(D.a),U=Object(M.a)(P.a);var L=Object(R.b)("position")(Object(R.c)((function(e){var t=e.wallet,n=void 0===t?{}:t,r=e.spec,l=void 0===r?{}:r,d=e.position,u=Object(o.useState)("LONG"),h=Object(i.a)(u,2),p=h[0],b=h[1],m=Object(o.useState)(!1),j=Object(i.a)(m,2),_=j[0],f=j[1],v=Object(o.useState)(!1),y=Object(i.a)(v,2),g=y[0],O=y[1],w=Object(o.useState)(!1),x=Object(i.a)(w,2),A=x[0],C=x[1],M=Object(o.useState)(""),D=Object(i.a)(M,2),P=D[0],R=D[1],L=function(){E()},Z=L,E=function(){W(),G(),n.loadWalletBalance(n.detail.chainId,n.detail.account)};function W(){return z.apply(this,arguments)}function z(){return(z=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.isConnected()&&l.pool&&d.load(n,l);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConnected()||!l.pool){e.next=5;break}return e.next=3,Object(c.getWalletBalance)(n.detail.chainId,l.pool,n.detail.account);case 3:(t=e.sent)&&R(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,Object(c.closePosition)(n.detail.chainId,l.pool,n.detail.account).finally((function(){return f(!1)}));case 3:(t=e.sent).success?E():"string"===typeof t.error?alert(t.error||"Liquidation failed"):"object"===Object(S.a)(t.error)?alert(t.error.errorMessage||"Liquidation failed"):alert("Liquidation failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return W(),G(),function(){}}),[n.detail.account,l.pool]),Object(o.useEffect)((function(){if(d.info.volume&&d.info.margin&&d.info.unrealizedPnl){var e=+d.info.volume>0?"LONG":Object(k.b)(d.info.volume,0)?"--":"SHORT";b(e)}return function(){}}),[d.info.volume,d.info.margin,d.info.unrealizedPnl]),Object(I.jsxs)("div",{className:"position-box",children:[Object(I.jsxs)("div",{className:"p-box theader",children:[Object(I.jsx)("div",{children:"Position"}),Object(I.jsx)("div",{children:"Average Entry Price"}),Object(I.jsx)("div",{children:"Direction"}),Object(I.jsxs)("div",{children:["Balance in Contract",Object(I.jsx)("br",{}),"(Dynamic Balance)"]}),Object(I.jsx)("div",{children:"Margin"}),Object(I.jsx)("div",{children:"Unrealized PnL"}),Object(I.jsx)("div",{children:"Liquidation Price"})]}),Object(I.jsxs)("div",{className:"p-box tbody",children:[Object(I.jsxs)("div",{children:[d.info.volume,Object(I.jsxs)("span",{className:"close-position",children:[!_&&Object(I.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNC0wMlQxNTozODoxMyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDQtMDZUMjA6MDU6MTIrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlkYTVmMGQtZjBkZC0xYTRiLTlhNWUtZTBlNDMwZTI5OGI3IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OGU2NWEzMTAtM2M4YS1jMDQ3LWIyMDAtZjZhYTZkMDlkNWRlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDUwZmRhMGUtNTUyNC0wNjQxLTg1ZmYtYWUyNjAyODUxMzgzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNTBmZGEwZS01NTI0LTA2NDEtODVmZi1hZTI2MDI4NTEzODMiIHN0RXZ0OndoZW49IjIwMjEtMDQtMDJUMTU6Mzg6MTMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5ZGE1ZjBkLWYwZGQtMWE0Yi05YTVlLWUwZTQzMGUyOThiNyIgc3RFdnQ6d2hlbj0iMjAyMS0wNC0wNlQyMDowNToxMiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SuXJrAAACqElEQVRYhb3XTWjTYBgH8P+bJq+0TrbatZui4EG3irCNQXVM0CqeBA+CwvAk6EVEQfy4eRFPfiGK4EUGeqgX8aSC4vAiBYnSdkNHFUFh6qGvbWFKmzSJF1Mzl3RvPpr/8X2ekB8P7wMJkWUZudx3cWpqnVJk9MZYv3IOIedTXXzb1PB129rWQQCIIJsVj2Y3qQZABmLaZJHRNYMx7XmYoM29rfFUVE/PMWk4FdMfEVmWDWuTbgAlRq+HMTETZD2bZdJ9ocSke1aVQICRhHK2UKHXwgYpOjEaeuSVMJJQj8+GDLMDNTRiFNmqY5lkY1oAgDBhziB6JJNsTAOAYBbCgHUC7Ug1H7bfa23oJowXtAzVLdjHuviGF2SLChpWron5Lb2tDC/IERUUrFwT80N9rQk3oI4oE1Zi9K4XmFfQiigAGE0oJ4qM3nYD8wPiQgHAWEI5zQvzC+JG8cKCAAEAkWWZtxcAUGD01mhCOUUsZ7oBLPyKfNvYo633CwJcTMqM08SCAnlCOcGCAnlGmbCFRfGHXe1zXXzmFeQLVa6J+Q09rUG72nBc3f+uQi+FirLbMmsiBBhNKBe9wlyjHNZe/1CVXlrvmB+YK5QTqFQRD22Nq/v+v/xeYdyoTqDtA+pjwH4rvcC4UDwgM0HAVkS5AQUF64jyAgoC5ogq16TXXkF+Ybao+ao0M9SnTvoBLYFVpJu6RbYSbBlqvirNpOPqniBAbVi/eqbE6FVe2BJUN0D/YMoFXlgb1U2QW5gQFsgNLLLr8MnQQGYGY9qLIqOrU1FtJ/n7CSsQIBXVdhcrFALI0gd+t7oLMmM3McMADBBNSPepe99XpSdtEJMOdBtkB1N1ggKj58eTzcvtH4e5n9KDRZXkJgaUp2GArClU6BVVF75kUo07APAH3WicsIPb8YcAAAAASUVORK5CYII=",onClick:F}),Object(I.jsx)("span",{className:"spinner spinner-border spinner-border-sm",style:{display:_?"block":"none",marginLeft:"8px"}})]})]}),Object(I.jsx)("div",{children:Object(I.jsx)(N.a,{value:d.info.averageEntryPrice,decimalScale:2})}),Object(I.jsx)("div",{className:p,children:p}),Object(I.jsxs)("div",{children:[Object(I.jsx)(N.a,{value:+d.info.margin+ +d.info.unrealizedPnl,decimalScale:2}),Object(I.jsx)("span",{className:"open-add",onClick:function(){return O(!0)},children:Object(I.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",children:Object(I.jsx)("path",{id:"login",d:"M13,9,7,4V7H0v4H7v3Zm3,7H8v2h8a2.006,2.006,0,0,0,2-2V2a2.006,2.006,0,0,0-2-2H8V2h8Z",transform:"translate(18) rotate(90)",fill:"#3ebf38"})})}),Object(I.jsx)("span",{className:"open-remove",onClick:function(){return C(!0)},children:Object(I.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",children:Object(I.jsx)("path",{id:"log-out","data-name":"log out",d:"M18,9,12,4V7H5v4h7v3ZM2,2h8V0H2A2.006,2.006,0,0,0,0,2V16a2.006,2.006,0,0,0,2,2h8V16H2Z",transform:"translate(0 18) rotate(-90)",fill:"#e35061"})})})]}),Object(I.jsx)("div",{children:Object(I.jsx)(N.a,{value:d.info.marginHeld,decimalScale:2})}),Object(I.jsx)("div",{children:Object(I.jsx)(N.a,{value:d.info.unrealizedPnl,decimalScale:8})}),Object(I.jsx)("div",{children:Object(I.jsx)(N.a,{value:d.info.liquidationPrice,decimalScale:2})})]}),Object(I.jsx)("div",{className:"p-box tbody"}),Object(I.jsx)(T,{wallet:n,modalIsOpen:g,onClose:function(){return O(!1)},spec:l,afterDeposit:Z,balance:P}),Object(I.jsx)(U,{wallet:n,modalIsOpen:A,onClose:function(){return C(!1)},spec:l,afterWithdraw:L,position:d})]})}))),Z=n(612),E=n.n(Z),W=n(100),z=n(613),G=W[c.DeriEnv.get()].chainInfo;function F(e){var t=e.wallet,n=e.spec,r=Object(o.useState)([]),d=Object(i.a)(r,2),u=d[0],h=d[1];return Object(o.useEffect)((function(){return function(){var e=Object(a.a)(s.a.mark((function e(){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()||!n.pool){e.next=5;break}return e.next=3,Object(c.getTradeHistory)(t.detail.chainId,n.pool,t.detail.account);case 3:i=e.sent,h(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[t.detail.account,n]),Object(I.jsxs)("div",{className:"history-box",children:[Object(I.jsxs)("div",{className:"p-box theader",children:[Object(I.jsx)("div",{className:"td",children:"Time"}),Object(I.jsx)("div",{children:"Direction"}),Object(I.jsx)("div",{children:"Base Token"}),Object(I.jsx)("div",{children:"Price"}),Object(I.jsx)("div",{children:"Volume"}),Object(I.jsx)("div",{children:"Notional"}),Object(I.jsx)("div",{children:"Transaction Fee"})]}),u.map((function(e,n){return Object(I.jsxs)("div",{className:"p-box tbody",children:[Object(I.jsx)("div",{className:"td",children:E.a.asString("yyyy-MM-dd hh:mm:ss",new Date(parseInt(e.time)))}),Object(I.jsxs)("div",{className:e.direction,children:["LONG"===e.direction?"".concat(e.direction," / BUY"):"".concat(e.direction," / SELL"),Object(I.jsx)(B,{wallet:t,his:e})]}),Object(I.jsx)("div",{children:e.baseToken}),Object(I.jsx)("div",{children:Object(I.jsx)(l.a,{value:e.price,displayType:"text",decimalScale:2})}),Object(I.jsx)("div",{children:e.volume}),Object(I.jsx)("div",{children:e.notional}),Object(I.jsx)("div",{children:e.transactionFee})]},n)}))]})}function B(e){var t=e.wallet,n=e.his,r=Object(o.useState)(!1),s=Object(i.a)(r,2),a=s[0],c=s[1],l=function(){c(!0)},d=function(){c(!1)},u=w()("view",{hover:a});return Object(I.jsxs)("span",{className:u,onMouseOut:d,children:[Object(I.jsx)("span",{className:"view-space",onMouseOver:l,children:Object(I.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"".concat(G[t.detail.chainId].viewUrl,"tx/").concat(n.transactionHash),children:["View at ",G[t.detail.chainId].viewUrl]})}),Object(I.jsx)("span",{className:"right-arrow",onMouseOver:l,children:Object(I.jsx)("img",{alt:"",src:z.a})}),Object(I.jsx)("span",{className:"view-arrow",onMouseOver:l,onMouseOut:d,children:Object(I.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(G[t.detail.chainId].viewUrl,"tx/").concat(n.transactionHash),children:Object(I.jsx)("img",{rel:"noreferrer",alt:"",src:"data:image/svg+xml;base64,DQo8c3ZnIGZpbGw9Im5vbmUiIGhlaWdodD0iMTAiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNOC42NzYuNjQyYS42NS42NSAwIDAwLS4wNzIuMDA2SDQuNzkzYS42NS42NSAwIDAwLS41Ny45NzUuNjUuNjUgMCAwMC41Ny4zMjJINy4xMkwuNDM4IDguNjE0YS42NDcuNjQ3IDAgMDAuMjg2IDEuMDk2LjY1LjY1IDAgMDAuNjMyLS4xNzlMOC4wNCAyLjg2MXYyLjMyNGEuNjQ4LjY0OCAwIDAwLjk3Ny41Ny42NDguNjQ4IDAgMDAuMzIyLS41N1YxLjM4YS42NDcuNjQ3IDAgMDAtLjY2Mi0uNzM3eiIgZmlsbD0iI0FBQUFBQSIvPg0KPC9zdmc+DQoNCg=="})})})]})}function Y(e){var t=e.wallet,n=e.spec,r=Object(o.useState)("position"),s=Object(i.a)(r,2),a=s[0],c=s[1],l=function(e){c(e)},d=w()("position-info",a);return Object(I.jsxs)("div",{className:d,children:[Object(I.jsxs)("div",{className:"position-header",children:[Object(I.jsxs)("div",{className:"position-title",children:[Object(I.jsx)("span",{className:"position-info-title",children:"POSITION INFO"}),Object(I.jsx)("span",{className:"history-info-title",children:"TRADE HISTORY"})]}),Object(I.jsxs)("div",{className:"check-position-history ",children:[Object(I.jsx)("div",{className:"btn-position",onClick:function(){return l("position")},children:"CURRENT POSITION"}),Object(I.jsx)("div",{className:"btn-history",onClick:function(){return l("history")},children:"TRADE HISTORY"})]})]}),Object(I.jsxs)("div",{className:"pos-his-info ",children:[Object(I.jsx)(L,{wallet:t,spec:n}),Object(I.jsx)(F,{wallet:t,spec:n})]})]})}var H=n(602),Q=n(607),J=n(603);n(597),n(640);t.default=Object(R.b)("wallet","indexPrice")(Object(R.c)((function(e){var t=e.wallet,n=e.indexPrice,r=Object(o.useState)({}),s=Object(i.a)(r,2),a=s[0],c=s[1],l=Object(H.a)(t);return Object(o.useEffect)((function(){return a.symbol&&n.start(a.symbol),function(){}}),[a.symbol]),Object(o.useEffect)((function(){if(document.querySelector(".desktop").style.minWidth="1920px",l.length>0&&t.detail.chainId){var e=l.filter((function(e){return Object(k.b)(e.chainId,t.detail.chainId)}));e.length>0&&(c(e[0]),n.start(e[0].symbol))}return function(){}}),[t.detail.account,l]),Object(o.useEffect)((function(){return function(){}}),[n.index]),Object(I.jsxs)("div",{className:"trade-body",children:[Object(I.jsx)(J.a,{}),Object(I.jsxs)("div",{className:"trade-pro",children:[Object(I.jsx)("div",{className:"left",children:Object(I.jsx)(Q.a,{wallet:t,isPro:!0,specChange:function(e){n.pause(),c(e)}})}),Object(I.jsxs)("div",{className:"right",children:[Object(I.jsx)(C,{wallet:t,spec:a,indexPrice:n}),Object(I.jsx)(Y,{wallet:t,spec:a})]})]})]})})))}}]);
//# sourceMappingURL=12.0320073f.chunk.js.map