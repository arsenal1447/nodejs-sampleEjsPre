study url:[http://www.cnblogs.com/zhongweiv/p/nodejs_express.html](http://www.cnblogs.com/zhongweiv/p/nodejs_express.html)

## 创建一个新项目

	express -e testEjsWebApp

![](https://github.com/zxx1988328/express-testEjsWebApp/blob/master/img/new_project.png)

**cd 项目 执行**

	cd testEjsWebApp
 
	npm install


运行项目 
	
	node app.js

![](https://github.com/zxx1988328/express-testEjsWebApp/blob/master/img/cmd_start.png)

![](https://github.com/zxx1988328/express-testEjsWebApp/blob/master/img/web_start.png)


## 这里重点看看index.ejs

	　　ejs结尾的文件就是模版文件，可以看到在文件中我们用了三种标签方式（这种标签方式有过其它web开发经验的应该很好看懂）
	
	　　1.<%= %>
	
	　　这个标签在接到收到title: '<h1>Express</h1>'时，从显示效果来看，他直接输出HTML标签到页面上，输出的是转义后的变量值
	
	　　2.<%- %> 　　
	
	　　而这个标签，从显示效果上看，他没有直接输出HTML代码到页面上，输出的是没有转义后的变量值
	
	　　3.<% %>
	
	　　而这个标签，从显示上看，他循环了出来参数中的值，标签中是javascript逻辑代码，注意括号的开闭合