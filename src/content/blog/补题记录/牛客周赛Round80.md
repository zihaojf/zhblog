---
title: '牛客周赛Round80补题'
publishDate: '2025-02-11'
updatedDate: '2025-02-11'
description: '牛客周赛Round80补题'
tags:
  - 算法
  - 牛客
language: '中文'
---

# D题[[D-举手赢棋hard_牛客周赛 Round 80](https://ac.nowcoder.com/acm/contest/101196/D)]()

## 题意
字符串s，0表示失利，1表示胜利，任意时刻要满足胜场大于等于负场，有两次机会可以强行获得比赛胜利，恰好两次举手，求方案数
## 代码
```cpp
	int n;
	ll mn = 1e9;
	string s;
	cin>>n>>s;
	s = " "+s;
	ll a[n+1],c0[n+1];
	memset(a,0,sizeof a);
	memset(c0,0,sizeof c0);
	for(int i =1;i<=n;i++)
	{
		a[i] = a[i-1];
		if(s[i]=='1') a[i]++;
		else a[i]--;
		c0[i] = c0[i-1] + (s[i]=='0');
		mn = min(mn,a[i]);
	}
	if(mn<-4)
	{
		cout<<0<<endl;
		return 0;
	}
	int pos1 = -1;
	for(int i =1;i<=n;i++)
	{
		if(a[i]<0)
		{
			pos1 = i;
			break;
		}
	}
	if(pos1==-1)
	{
		cout<<n*(n-1)/2<<endl;
		return 0;
	}
	int pos2 = -1;
	for(int i =pos1;i<=n;i++)
	{
		a[i]+=2;
		if(a[i]<0 && pos2==-1)
		{
			pos2 = i;
		}
	}
	if(pos2==-1)
	{
		ll ans = 0;
		for(int i =1;i<=pos1;i++)
		{
			if(s[i]=='0')
			{
				ans+=(n-i) + i-c0[i];
			}
		}
		cout<<ans<<endl;
		return 0;
	}
	ll ans = 0;
	for(int i = 1;i<=pos1;i++)
	{
		if(s[i]=='0')
		{
			ans+= (c0[pos2]-c0[i]);
		}
	}
	cout<<ans<<endl;
```

## 思路
计算10字串1-0的个数差$a[i]$，以及$c[i]$表示i左侧（包含）的0的个数
1.$min(a[i])<-4$ 即使举手两次也无法合法
2.如果所有的前缀和均大于等于0，可以任意选2个
3.$pos1$ 为第一个$a[i]<0$ 的下标，一定至少要在、$[1,pos1]$ 中间选一个0,$[pos1,n] a[i]$ 加上2,其后所有位置均合法，第二个位置任意选择
4.pos1操作后仍然不合法,pos2为pos1后$a[pos1]<0$ ，$[1,pos1]$ 选1个0，第二个位置也必须要选择一个0并且要选pos2之前的0。第一个0在i处，则第二个0在$[i+1,pos2]$ 区间内

# E题
## 坑点
注意一个黑子可能可以吃掉多个白色连通块，此时ans应该累加而不是取max
能用bfs就用bfs，dfs传参复杂容易出错
## 代码
```cpp
int n;
cin>>n;
for(int i = 1;i<=n;i++)
	for(int j = 1;j<=n;j++)
	{
		cin>>mp[i][j];
	}
	for(int i =1;i<=n;i++)
		for(int j = 1;j<=n;j++)
		{
			if(vis[i][j]) continue;
			if(mp[i][j]=='.'||mp[i][j]=='#') continue;
			queue<pair<ll,ll>> q;
			q.emplace(i,j);
			set<pair<ll,ll>> st;
			int cnt = 0;
			while(q.size())
			{
				auto [x,y] = q.front();
				q.pop();
				if(vis[x][y]) continue;
				vis[x][y] = true;
				cnt++;
				for(int k =0;k<4;k++)
				{
					int xx = x + dx[k],yy = y + dy[k];
					if(xx<=0 || xx>n || yy<=0 || yy>n || mp[xx][yy]=='#')
					{
						continue;
					}
					if(mp[xx][yy]=='.')
					{
						st.emplace(xx,yy);
						continue;
					}
					q.emplace(xx,yy);
				}
			}
			if(st.size()==1)
			{
				auto [x,y] = *st.begin();
				ans[x][y] += cnt;
			}

		}
	ll res = 0;
	for(int i =1;i<=n;i++)
		for(int j = 1;j<=n;j++)
		{
			res = max(res,ans[i][j]);
		}
	cout<<res<<endl;
```

# F题
## 题意
在长为$2n$的数组中两两配对，要求配对绝对值之和为k，求组合方式
## 思路
将数组分为两组，一组和为A，一组和为B，有A+B = $2n(1+2n)/2=n(1+2n)$
又有B-A=k ，联立有$2B=n(1+2n)+k=2n^2+n+k,B=n^2+(n+k)/2$
则n和k一定同奇偶，可以排除一种情况
接下来将k分解为奇数，因为当匹配的一对数是不同奇偶例如1,4时中间长度为偶数，可以两两匹配，间隔为1。
## 代码
```cpp
void solve(){
	int n,k;
	cin>>n>>k;
	if(k<n || k > n * n || (n%2)!=k%2)
	{
		cout<<-1<<endl;
		return ;
	}
	int s = 2 * n -1;
	vector<int> v;
	for(int i = 1;i<=n;i++)//分解奇数
	{
		while(s+(n-i)>k)
			s-=2;
		v.push_back(s);
		k -= s;
		if(s > 2)
		{
			s-=2;
		}
	}
	vector<int> a;
	vector<int> b;
	vector<int> vis(2*n+1);//记录
	int now = 2 * n;
	for(auto &x : v)
	{
		while(vis[now]) now--;
		a.emplace_back(now);
		b.emplace_back(now-x);
		vis[now] = 1;
		vis[now-x] =1;
	}
	for(int i=0;i<n;i++)
	{
		cout<<a[i]<<" "<<b[i]<<endl;
	}

}
```

# G题[[G-不公平对局_牛客周赛 Round 80](https://ac.nowcoder.com/acm/contest/101196/G)]()

## 题目大意
小红和小紫正在对弈。在围棋规则中，每吃掉对方的一枚棋子，就需要将这枚棋子放入棋盖中。然而，棋盖空间不大，她们任何一方吃子数量达到 x 就输了。  
当然，我们不需要考虑具体的对弈局面，模型简化如下，每个回合将会依次执行以下两步：  
- 小红有$p_1$的概率吃掉对方一枚棋子；  
- 小紫有$p_2$的概率吃掉对方一枚棋子。  
谁吃子数量达到 x 就输了。小红执黑先手，她想知道自己最终获胜的概率是多少？你需要将答案对 $10^9+7$取模后输出。
## 思路
概率dp+逆元
$dp[i,j]$表示小红落子i个，小紫落子j个
递推式$dp[i,j]=(p1*p2*dp[i+1][j+1]+p1*(1-p2)*dp[i+1][j]+(1-p1)*p2*dp[i][j+1])/(1-(1-p1)*(1-p2)$
## 代码
```cpp
int x,a1,b1,a2,b2;
	cin>>x>>a1>>b1>>a2>>b2;
	int p1 = a1 * ksm(b1,mod-2)%mod;
	int p2 = a2 * ksm(b2,mod-2)%mod;
	int P1 = p1 * p2 %mod;
	int P2 = p1 * (mod+1-p2)%mod;
	int P3 = (mod+1-p1) * p2 % mod;
	int P4 = (mod+1-p1) * (mod+1-p2)%mod;
	int P5 = (mod+1 -P4) %mod;
	int inv = ksm(P5,mod-2);
	int dp[1010][1010];
	for(int i =0;i<=x-1;i++)
	{
		dp[x][i] = 0;
		dp[i][x] = 1;
	}
	
	for(int i = x-1;i>=0;i--)
		for(int j = x-1;j>=0;j--)
		{
			dp[i][j] = inv * ((P1*dp[i+1][j+1]%mod + P2 * dp[i+1][j]%mod)%mod+P3*dp[i][j+1]%mod)%mod;
            //cout<<dp[i][j]<<endl;
		}
	cout<<(dp[0][0]+mod)%mod<<endl;
```

