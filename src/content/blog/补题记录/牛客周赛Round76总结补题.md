---
title: '牛客周赛Round76总结补题'
publishDate: '2025-01-13'
updatedDate: '2025-01-13'
description: '牛客周赛Round76总结补题'
tags:
  - 算法
  - 牛客
language: '中文'
---

# C 小红的gcd

## 题目描述
小红有一个长度为$n$的数组，她希望数组元素之和越少越好。  
她可以进行**任意次**操作，每次选择数组中的两个元素$a_i$和 $a_j$ ，令 $a_i = a_j = gcd(a_i,a_j)$ 。  所有操作结束后，请你输出**最小**的数组元素之和。
## 思路
找到数组所有元素共有的gcd，对数组元素依次对总gcd取gcd即可，最后就是数组的总和就是$ans=n*gcd$

# D 奇偶调整(题假了)
## 题目描述

UPD：**本题假了**，hack数据如下：  
2 2 1
11 9  
正确答案应该为 13 ，而不是 14 。

小红有一个长度为$n$ 的数组 $a$ ，第 $i$ 个元素为 $a_i$​ 。
小红可以执行两种操作，操作内容如下：  
1.选择一个偶数元素 $a_i$ ，令 $a_i=a_i/2$。  
2.选择一个奇数元素 $a_i$，令 $a_i=a_i⊕1$ 。  
其中，操作 111 最多执行 mmm 次，操作 222 最多执行 kkk 次。小红想最小化数组元素之和，请你输出这个值。  
⊕ 代表按位异或。

## 思路
### 补充
对$a_i$与1取位异或，奇数取完相当于减一，偶数取完加一
### 贪心解答（假了）
```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
	int n;
	cin>>n;
	int m,k;
	cin>>m>>k;
	priority_queue<long long> q;
	for(int i = 1;i<=n;i++){
		int x;
		cin>>x;
		q.push(x);
	}
	long long ans = 0;
	while(!q.empty()){
		auto u = q.top();
		q.pop();
		if(!u)continue;
		if(u&1){
			if(k>=1){
				u--;
				k--;
				q.push(u);
			}
			else{
				ans += u;
			}
		}
		else if(u % 2 == 0){
			if(m){
				u /= 2;
				m--;
				q.push(u);
			}
			else{
				ans += u;
			}
		}
	}
	cout<<ans<<endl;
	return 0;
}
```
关键在**优先队列(priority_queue)，顶部是最大的数**，最开始还在傻傻地写vector,然后每次操作完成之后排序。。。。**注意大小，开Long long**

# E 幂次进近[幂次进近](https://ac.nowcoder.com/acm/contest/99990/E)
## 题目描述
给定 t 次询问，每次询问给出两个正整数 n 和 k 。  
请你找到最小的**正整数** m ，使得 $n-m^k$ 的**绝对值**最小。
## 思路
比赛时得了180(200)，有两个点没有过。注意需要用__int128_（$2^{127}-1 约等于{10}^{38}$），二分法逼近m,使用快速幂求$m^k$ ，$2^{60}≈1.1529×10^{18}$
```cpp
//__int128_读入写入模板
void read(__int128 &x) {
    string s;
    cin >> s;
    x = 0;
    for (char c : s) {
        x = x * 10 + (c - '0');
    }
}

void print(__int128 x) {
    if (x < 0) {
        cout << '-';
        x = -x;
    }
    if (x > 9) print(x / 10);
    cout << (char)(x % 10 + '0');
}
```

```cpp
#include <bits/stdc++.h>
using namespace std;

void read(__int128 &x) {
    string s;
    cin >> s;
    x = 0;
    for (char c : s) {
        x = x * 10 + (c - '0');
    }
}

void print(__int128 x) {
    if (x < 0) {
        cout << '-';
        x = -x;
    }
    if (x > 9) print(x / 10);
    cout << (char)(x % 10 + '0');
}

__int128_t calc(__int128_t m,__int128_t k){
	__int128_t ans = 1;
	while(k > 0){
		if(k & 1){
			ans *= m;
		}
		m *= m;
		k>>=1;
	}
	return ans;
}

__int128_t solve(__int128_t n,__int128_t k){
	if(k==1) return n;
	if(k>60) return 1;
	__int128_t r = pow(n,1.0/k)+1;
	__int128_t l = 1;
	__int128_t bestm = 1;
	__int128_t mindiff = n -1;
	while(l <= r){
		__int128_t mid = (r - l)/2 + l;
		__int128_t minpow = calc((r - l)/2 + l ,k);

		if(minpow <=n){
			__int128_t diff = n - minpow;
			if(diff < mindiff || (diff == mindiff && mid < bestm)){
				mindiff = diff;
				bestm = mid;
			}
			l = mid + 1;
		}
		else{
			__int128_t diff = minpow - n;
			if(diff < mindiff || (diff == mindiff && mid < bestm)){
				mindiff = diff;
				bestm = mid;
			}
			r = mid - 1;
		}

	}
	return bestm;

}

int main(){
	std::ios::sync_with_stdio(false);
	std::cin.tie(0);
	int t;
	cin>>t;
	while(t--){
		__int128_t n,k;
		read(n);
		read(k);
		print(solve(n,k));
		cout<<endl;
	}

	return 0;
}


```

# F同位序列
## 题目描述
定义 f(x) 为 x 在二进制表示下的 1 的个数。  
例如 f(7)=3，f(8)=1，f(9)=2。  
定义 g(x) 为 第一个比 x 大的数字 y ，使得 f(x)=f(y)。
例如 g(1)=2，g(2)=4，g(3)=5。 
给你一个长度为 n 的数组 a ，第 i 个元素为 $a_i$。  
我们希望从数组 a中挑选出一些元素，构造一个长度为 m 的同位序列 b 。  
同位序列 满足如下条件：  
对于所有的$j∈[2,m]$，都有$b_j=g(b_{j-1})$ 。  
当然，同位序列越长越好，请你最大化其长度 m ，然后输出 m 和对应的同位序列。  如果有多解，输出任意一个即可。
## 思路
题目要求从给定的一个数组中，找到最大的同为序列长度m,即求m的最大值
有点像LIS，可以想到dp做法
我们先看如何确定g(x)
例如: 14的二进制为$1110$，$g(14)=19$,19的二进制为$00010011$,我们可以观察到，将第一次连续出现的1中的第一个1向高位移一位，剩余连续的1移到最低位，与`next_permutation`算法即可

状态转移：
- 如果当前元素x的g(x)在x之前的数组当中，那么就接在其序列
- 如果不在，就要新建一个序列
## 代码
```cpp
#include <bits/stdc++.h>
using namespace std;

void solve(){
    const int M = 32;
    int n;
    cin>>n;
    map<int,int> g;//g[i]
    vector<int> a(n);
    for(auto &x : a){//求g(i)
        cin>>x;
        vector<int> bit(M);//x拆为二进制
        for(int j = 0;j<M;j++) if(x>>j & 1) bit[M-j-1]=1;//化x为二进制
        next_permutation(bit.begin(),bit.end());
        for(int j = 0;j<M;j++) if(bit[M-j-1]) g[x]|= 1 << j;
    }
    set<int> ans;
    sort(a.rbegin(),a.rend());//从大到小
    map<int,int> mp;//相当于dp
    int max = 0,id = 0;

    for(auto x : a){
        if(mp.contains(g[x])) mp[x] = mp[g[x]] + 1;//如果以前序列中已经出现g[x],长度+1
        else mp[x] = 1;//新建一个序列
        if(mp[x] > max) max = mp[x],id = x;  //id是最长序列的首元素 
    }

    ans.clear();
    ans.insert(id);
    while(mp.contains(g[id])){
        id = g[id];
        ans.insert(id);
    }

    cout<<ans.size()<<endl;
    for(auto x : ans) cout<<x<<" ";
}
int main() {
    solve();
    return 0;
}
```
