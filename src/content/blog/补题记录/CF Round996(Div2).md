---
title: 'CF Round996(Div2)补题'
publishDate: '2025-01-14'
updatedDate: '2025-01-14'
description: 'CF Round996(Div2)补题'
tags:
  - 算法
  - Codeforces
language: '中文'
---

# B.Crafting

## 思路
对于需要增加的材料，最多只能有一个，不能有两个及以上，因为如果有两个及以上的话，所有需要增加材料的和是不变的，不可能最终每个材料增加满足b(i)
对于有一个需要增加的材料：依次枚举验证其他的材料减少完之后是否会小于b(i)即可

# C.The Trail
## 题目大意
一个$n*m$ 的格子中有一条路径从(1,1)到(n,m)，其路径上的格子中的数未知，其他格子中都给定有数字，题目要求所有的行、列数字之和均相等，求路径上未知的数字
## 思路
设$a_{ij}$为第i行第j列的数字，$rowsum=columnsum$,$n*rowsum=m*columnsum$
有两种情况
- $n \neq m$ 时：此时$rowsum=columnsum=0$ 
- $n=m$ 时：此时$rowsum=columnsum=任意值$ 
为了方便讨论，直接令所有情况全为0
**注意到路径仅能往下或者往右走，那么总有某行或者某列只有路径上的一个点未知**
可以用这个性质递推
- 当D即向下走时，所在行只有路径上的点未知
- 当R即向右走时，所在列只有路径上的点未知
## 代码
```cpp
void solve(){
	int n,m;
	cin>>n>>m;
	string s;
	cin>>s;
	vector<vector<long long>> a;
	for(int i = 0;i < n;i++){//输入
		a.push_back(vector<long long>(m));
		for(int j = 0;j<m;j++){
			cin>>a[i][j];
		}
	}
	//模拟路径
	int x = 0,y = 0;//当前的坐标位置
	for(char c : s){
		if(c=='D'){
			long long su = 0;
			for(int i = 0;i<m;i++){
				su += a[x][i];
			}
			a[x][y] = -su;//赋相反值
			++x;
		}
		else{
			long long su = 0;
			for(int i = 0;i<n;i++){
				su += a[i][y];
			}
			a[x][y] = -su;//赋相反值
			++y;
		}
	}
	long long su = 0;
	for(int i = 0;i< m;i++){
		su += a[n-1][i];//终点
	}
	a[n-1][m-1] = -su;//终点处赋值
	for(int i = 0;i< n;i++){
		for(int j = 0;j<m;j++){
			cout<<a[i][j]<<" ";
			
		}
		cout<<endl;
	}
}
```

# D.Scarecrow
## 题目大意
在一维数轴上有一些稻草人(>0)，乌鸦初始在x=0处，乌鸦会一直检测左侧是否有稻草人，如果左侧稻草人距离自己小于k（左侧最近稻草人的坐标为y），那么它立马会向右移动到y+k个，稻草人每秒移动1个单位长度，左右或者停止都可以。问乌鸦要到达l至少需要的时间的两倍。
## 思路
乌鸦可以被距离k的稻草人推着走，也可以被小于k的稻草人跳跃着走。易得跳跃时花费的时间更少，所以要最大化跳跃次数。
- case1:只有左侧有稻草人时，只与左侧最近的稻草人有关，被左侧的稻草人推着走
- case2:只有右侧有稻草人时，需要右侧最近的稻草人移动到乌鸦处，让乌鸦开始跳跃起来
- case3:左右都有稻草人时，左右的稻草人应该同时向乌鸦处运动，左侧离乌鸦最近的稻草人一定距离k（刚刚跳跃过来），**左侧稻草人推着乌鸦右移，右侧稻草人左移接近乌鸦，到达乌鸦处实现下一次跳跃**
## 代码
```cpp
void solve(){
	 int n;
	 int k,l;
	 cin>>n>>k>>l;
	 k *= 2;
	 l *= 2;

	 vector<int> a(n);
	 for(int i = 0;i<n;i++ ) cin>>a[i];//输入
	 for(int i = 0;i<n;i++ ) a[i]*=2;

	int ans = a[0];//初始a[0]移到原点时间
	int x = k;//x是当前乌鸦的位置
	for(int i = 1;i< n;i++){//开始枚举第二到第n个的稻草人
		if(a[i]>x){//如果在乌鸦右侧
			a[i] = max(x,a[i]-ans);//稻草人当前位置，最左时停在乌鸦当前处
			ans += (a[i]-x)/2;//左侧乌鸦会一直推着走，相当于相向而行
			x = (x + a[i])/2 + k;//最终走到乌鸦出发点x和下一个稻草人处中点进行跳跃
		}
		else{//下一个稻草人在左侧
			a[i] = min(x,a[i]+ans);//a[i]朝稻草人动
			x = a[i] + k;//下一个稻草人一定会在上一个稻草人的右方，一定和稻草人的间距小于k
		}
	}

	if(x < l){//若通过跳跃无法到达l处，则只能用稻草人推着乌鸦走
		ans += l - x;
	}
	cout<<ans<<endl;
}
```