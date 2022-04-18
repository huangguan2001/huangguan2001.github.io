(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{578:function(a,t,s){"use strict";s.r(t);var e=s(11),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("笔记")]),a._v(" "),s("p",[a._v("记录 Tomcat 升级遇到的问题。")]),a._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[a._v("2021-12-30 @村长")])])]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#前言"}},[a._v("前言")])]),s("li",[s("a",{attrs:{href:"#安装"}},[a._v("安装")])]),s("li",[s("a",{attrs:{href:"#配置"}},[a._v("配置")]),s("ul",[s("li",[s("a",{attrs:{href:"#server-xml"}},[a._v("server.xml")])]),s("li",[s("a",{attrs:{href:"#logging-properties"}},[a._v("logging.properties")])])])]),s("li",[s("a",{attrs:{href:"#后台启动"}},[a._v("后台启动")]),s("ul",[s("li",[s("a",{attrs:{href:"#修改setclasspath-bat文件"}},[a._v("修改setclasspath.bat文件")])]),s("li",[s("a",{attrs:{href:"#配置windows服务"}},[a._v("配置Windows服务")])]),s("li",[s("a",{attrs:{href:"#总结"}},[a._v("总结")])])])]),s("li",[s("a",{attrs:{href:"#问题"}},[a._v("问题")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("因为项目的一期验收，漏洞扫描发现 Tocmat 的漏洞比较多，所以目前打算升级 Tomcat 来解决一些自带的漏洞。")]),a._v(" "),s("p",[a._v("Tomcat 是 9.0 版本，已经用了一年半，现在升级到 Tomcat 9.0.56 版本，是目前 9.X 的最新版。")]),a._v(" "),s("p",[a._v("如果本内容步骤遇到了问题，请看最下面的 "),s("a",{attrs:{href:"#%E9%97%AE%E9%A2%98"}},[a._v("问题")]),a._v("，记录了我遇到的问题。")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("安装不细说了，直接下载解压即可使用，值得一提的是，我们需要的 Tomcat 是 64-bit Windows.zip 的，而不是 .zip 的。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E6%8A%A5%E4%BF%AE%E7%B3%BB%E7%BB%9F/20211230153319.png",alt:"image-20211230153317992"}})]),a._v(" "),s("p",[a._v("这两个有什么区别呢，64-bit Windows.zip 有需要的一些 .bat 文件如后台启动，而 .zip 没有。")]),a._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("p",[a._v("我们需要进行一些项目需要的配置，首先进入 Tomcat 安装目录下的 conf 目录，这个目录就是 Tomcat 全局的的配置目录。")]),a._v(" "),s("h3",{attrs:{id:"server-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-xml"}},[a._v("#")]),a._v(" server.xml")]),a._v(" "),s("p",[a._v("打开 server.xml，大概在 69 行，将 8080 端口改为 80。因为项目是直接通过域名访问，80 是默认端口。")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("Connector")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("port")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("80"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("protocol")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("HTTP/1.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("connectionTimeout")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("20000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("redirectPort")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("8443"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("acceptCount")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("1500"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" \n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("maxThreads")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("1600"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("minSpareThreads")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("500"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("maxHttpHeaderSize")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("102400"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E6%8A%A5%E4%BF%AE%E7%B3%BB%E7%BB%9F/20211230153641.png",alt:"image-20211230153641040"}})]),a._v(" "),s("p",[a._v("往下找，大概在 119 行处，添加如下内容：")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("Connector")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("protocol")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("AJP/1.3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("address")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("::1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("port")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("8009"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("redirectPort")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("8443"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" \n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("secretRequired")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E6%8A%A5%E4%BF%AE%E7%B3%BB%E7%BB%9F/20211230153737.png",alt:"image-20211230153736431"}})]),a._v(" "),s("p",[a._v("往下继续，大概在 154 行代码，添加如下内容：（有些 Tomcat 已经自带）")]),a._v(" "),s("div",{staticClass:"language-XML line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("Host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("appBase")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("webapps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("unpackWARs")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("autoDeploy")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E6%8A%A5%E4%BF%AE%E7%B3%BB%E7%BB%9F/20211230154041.png",alt:"image-20211230154040367"}})]),a._v(" "),s("p",[s("code",[a._v("name")]),a._v(" 是 IP 地址。")]),a._v(" "),s("p",[s("code",[a._v("autoDeploy")]),a._v(" 为 true 就是启动 Tomcat 后，将新的 war 包放在 webapps 目录下，就会自动编译出文件夹，"),s("strong",[a._v("自动部署")]),a._v("。")]),a._v(" "),s("p",[s("code",[a._v("appBase")]),a._v(" 是指定监听的目录，一旦这个目录发生变化（添加 WAR 包等），就会自动部署，不需要重新启动 Tomcat。")]),a._v(" "),s("p",[s("code",[a._v("unpackWARs")]),a._v(" 为 true，则 Tomcat 会自动将 WAR 文件解压，否则不解压，直接从 WAR 文件中运行应用程序。")]),a._v(" "),s("h3",{attrs:{id:"logging-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logging-properties"}},[a._v("#")]),a._v(" logging.properties")]),a._v(" "),s("p",[a._v("这个文件修改日志文件的生成路径等信息。")]),a._v(" "),s("p",[a._v("大概在 25 行，覆盖如下内容：")]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("1catalina.org.apache.juli.AsyncFileHandler.level")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("FINE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("1catalina.org.apache.juli.AsyncFileHandler.directory")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("E:/logs")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("1catalina.org.apache.juli.AsyncFileHandler.prefix")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("catalina.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("1catalina.org.apache.juli.AsyncFileHandler.maxDays")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("15")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2localhost.org.apache.juli.AsyncFileHandler.level")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("FINE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2localhost.org.apache.juli.AsyncFileHandler.directory")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("E:/logs")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2localhost.org.apache.juli.AsyncFileHandler.prefix")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("localhost.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("2localhost.org.apache.juli.AsyncFileHandler.maxDays")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("15")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("3manager.org.apache.juli.AsyncFileHandler.level")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("FINE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("3manager.org.apache.juli.AsyncFileHandler.directory")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("E:/logs")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("3manager.org.apache.juli.AsyncFileHandler.prefix")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("manager.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("3manager.org.apache.juli.AsyncFileHandler.maxDays")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("15")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("4host-manager.org.apache.juli.AsyncFileHandler.level")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("FINE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("4host-manager.org.apache.juli.AsyncFileHandler.directory")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("E:/logs")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("4host-manager.org.apache.juli.AsyncFileHandler.prefix")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("host-manager.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("4host-manager.org.apache.juli.AsyncFileHandler.maxDays")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("15")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("java.util.logging.ConsoleHandler.level")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("FINE")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("java.util.logging.ConsoleHandler.formatter")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("org.apache.juli.OneLineFormatter")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br")])]),s("p",[a._v("日志放在 E:/logs 目录下，日志保存 15 天后被清除，以及日志语言格式根据服务器环境一样。避免乱码。")]),a._v(" "),s("h2",{attrs:{id:"后台启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台启动"}},[a._v("#")]),a._v(" 后台启动")]),a._v(" "),s("p",[a._v("前台启动，只需要启动 bin 目录下的 startup.bat 即可，但是这样会出现一个窗口，不小心关闭了就会停止运行，所以我们需要设置后台启动。")]),a._v(" "),s("p",[a._v("后台启动有两种方式：")]),a._v(" "),s("ul",[s("li",[a._v("修改 setclasspath.bat 文件")]),a._v(" "),s("li",[a._v("配置 Windows 服务")])]),a._v(" "),s("p",[a._v("第一种方式其实是隐藏了 startup.bat 的窗口，拥有 startup.bat 窗口的功能，即触发上面 server.xml 配置的 Host，实现自动编译，自动部署。")]),a._v(" "),s("p",[a._v("第二种能设置开机自启，完全处于后台启动，缺点是不能触发上面 server.xml 配置的 Host，无法实现自动编译，自动部署。")]),a._v(" "),s("p",[a._v("我试过了两种，后来使用了第一种方式，因为我目前还要开发新功能，每次开发一个功能要部署一次，所以为了方便，让其自动编译，自动部署。第二种适用于项目已经完全开发，不需要频繁部署新的 WAR 包。")]),a._v(" "),s("h3",{attrs:{id:"修改setclasspath-bat文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改setclasspath-bat文件"}},[a._v("#")]),a._v(" 修改setclasspath.bat文件")]),a._v(" "),s("p",[a._v("非常简单，进入 Tomcat 安装目录下的 bin 目录，右键以记事本打开（不能双击），在 79 行左右，将 "),s("code",[a._v('set _RUNJAVA="%JRE_HOME%\\bin\\java.exe"')]),a._v(" 改为 "),s("code",[a._v('set _RUNJAVA="%JRE_HOME%\\bin\\javaw.exe"')]),a._v("，利用 jdk 的另一种启动方式 javaw.exe 代替 java.exe，实现自动编译，自动部署。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E6%8A%A5%E4%BF%AE%E7%B3%BB%E7%BB%9F/20211230155928.png",alt:"image-20211230155926719"}})]),a._v(" "),s("p",[a._v("rem 是注释的意思，把原来的注释掉，或者删除。")]),a._v(" "),s("p",[a._v("然后双击启动同目录下的 startup.bat 文件，此时你会发现窗口一闪而过，此时它会进入后台运行，等待半分钟左右，就可以看到效果了。")]),a._v(" "),s("p",[a._v("如果没有效果，那么就是 Tomcat 无法找到 jdk，需要进行环境变量配置。")]),a._v(" "),s("p",[a._v("如果想停止运行，就双击启动 shutdown.bat 文件。")]),a._v(" "),s("h3",{attrs:{id:"配置windows服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置windows服务"}},[a._v("#")]),a._v(" 配置Windows服务")]),a._v(" "),s("p",[a._v("打开 CMD ，进入 Tomcat 安装目录的 bin 目录下，执行如下命令：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("service.bat "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("就会安装 Tomcat 服务，然后进入 Windows 的服务，看到如下内容代表生成服务成功：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E6%8A%A5%E4%BF%AE%E7%B3%BB%E7%BB%9F/20211230160122.png",alt:"image-20211230160119117"}})]),a._v(" "),s("p",[a._v("右键点击属性，然后修改启动类型为自动，这样就会 "),s("strong",[a._v("开机自启")]),a._v("，然后启动该服务即可，此时 Tomcat 就会内部悄悄启动，只需要静等待半分钟，就可以了，不需要去运行 startup.bat 文件。")]),a._v(" "),s("p",[a._v("附带删除 Tomcat 服务命令，进入 bin 目录，执行如下命令即可删除 Tomcat 服务：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("service.bat remove\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("修改 setclasspath.bat 文件其实是启动 startup.bat 时，隐藏窗口，适合不断部署新 WAR 包的环境。")]),a._v(" "),s("p",[a._v("配置 Windows 服务是融入 Windows 服务里，交给 Windows 来启动，适合开发完项目，不频繁部署 WAR 包的环境。")]),a._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("java.security.InvalidKeyException: Illegal key size")])])]),a._v(" "),s("p",[a._v("这是无法访问手机端的原因。")]),a._v(" "),s("p",[a._v("如果密钥大于 128, 会抛出 "),s("code",[a._v("java.security.InvalidKeyException: Illegal key size")]),a._v(" 异常. 因为密钥长度是受限制的，这是美国对软件出口的一种控制，只允许密钥低于 128 才能运行。它是检测两个 jar 包来进行控制。")]),a._v(" "),s("p",[a._v("如果你的项目用到密钥大于 128，则需要去下载不受限制的密钥 jar 包。")]),a._v(" "),s("p",[a._v("jdk 5: "),s("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-java-plat-419418.html#jce_policy-1.5.0-oth-JPR",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-java-plat-419418.html#jce_policy-1.5.0-oth-JPR"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("jdk6: "),s("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce-6-download-429243.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.oracle.com/technetwork/java/javase/downloads/jce-6-download-429243.html"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("JDK7的下载地址: "),s("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("JDK8的下载地址: "),s("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("strong",[a._v("需要登录 Oracle 用户，没有请邮箱注册。")])]),a._v(" "),s("p",[a._v("下载后解压，可以看到 local_policy.jar 和 US_export_policy.jar 以及 readme.txt。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E6%8A%A5%E4%BF%AE%E7%B3%BB%E7%BB%9F/20211230161627.png",alt:"image-20211230161626455"}})]),a._v(" "),s("p",[a._v("如果安装了 JRE，将两个 jar 文件放到 %JRE_HOME%\\lib\\security 目录下覆盖原来的文件。")]),a._v(" "),s("p",[a._v("如果安装了 JDK，还要将两个 jar 文件也放到 %JDK_HOME%\\jre\\lib\\security 目录下覆盖原来文件。")]),a._v(" "),s("p",[a._v("如果两个都安装了，则两个都要覆盖。")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("%JDK_HOME%")]),a._v(" 是 jdk 的根目录。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("%JRE_HOME%")]),a._v(" 是 jre 的根目录，一般在 jdk 的 bin 目录下。")])])]),a._v(" "),s("p",[a._v("覆盖后，重新启动 Tomcat 就可以了。")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("配置 JDK 环境变量")])])]),a._v(" "),s("p",[a._v("前台启动时，双击打开 startup.bat 后，CMD 窗口一闪而过，就是因为没有配置 JDK 环境变量，JDK 的环境变量名字必须叫做 "),s("code",[a._v("JAVA_HOME")]),a._v("。")])])}),[],!1,null,null,null);t.default=n.exports}}]);