> 浏览器中通常会把DOM和JavaScript独立实现。
>
> |浏览器|JavaScript引擎|DOM引擎
> | - | :-: | -: | 
> |IE|JScript|Trident|
> |Safari|SquirrelFish|WebCore|
> |Chrome|V8|WebCore|
> |FireFox|JagerMonkey|Gecko|
2009年的微软MIX09会议上，John Hrvatin将DOM和JavaScript比喻为两个孤立的岛屿，它们之间用收费桥梁连接。JavaScript每次访问DOM，都要途径这座桥，并交纳“过路费”。访问DOM的次数越多，费用也就越高。（演讲视频连接：https://channel9.msdn.com/Events/MIX/MIX09/T53F 书中的链接已经失效）
