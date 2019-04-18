# msdweb
# 测试地址
http://51coach.com/wwlyweb/#/
http://51coach.com/

### 不规则区域
```
css

body {background-color: #9ACD32;}
.mImg {
	position: absolute;
	-webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	/* background-color: fuchsia; */
	/* clip:rect(0px 50px 50px 0px); */
}

.mImg:hover {
	-webkit-filter: brightness(95%) drop-shadow(18px 0px #0f0);
	filter: brightness(95%) drop-shadow(0px 0px 5px #0f0);
}

.mImg:active {
	-webkit-filter: brightness(95%) drop-shadow(18px 0px #0f0);
	filter: brightness(95%) drop-shadow(0px 0px 5px #0f0);
}

html

<img class="mImg" src="bgzimg.png" />
```
