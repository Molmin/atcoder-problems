配点 : $475$ 点

## 問題文

長さ $N$ の数列 $A=(A_1,A_2,\dots,A_N)$ があり、最初全ての項が $0$ です。<br>
入力で与えられる整数 $K$ を用いて関数 $f(A)$ を以下のように定義します。

- $A$ を降順に (広義単調減少となるように) ソートしたものを $B$ とする。
- このとき、 $f(A)=B_1 + B_2 + \dots + B_K$ とする。

この数列に合計 $Q$ 回の更新を行うことを考えます。<br>
数列 $A$ に対し以下の更新を $i=1,2,\dots,Q$ の順に行い、各更新ごとにその時点での $f(A)$ の値を出力してください。  

- $A_{X_i}$ を $Y_i$ に変更する。

## 制約

- 入力は全て整数
- $1 \le K \le N \le 5 \times 10^5$
- $1 \le Q \le 5 \times 10^5$
- $1 \le X_i \le N$
- $0 \le Y_i \le 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$ $Q$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_Q$ $Y_Q$

## 出力

全体で $Q$ 行出力せよ。そのうち $i$ 行目には $i$ 回目の更新を終えた時点での $f(A)$ の値を整数として出力せよ。

```input1
4 2 10
1 5
2 1
3 3
4 2
2 10
1 0
4 0
3 1
2 0
3 0
```

```output1
5
6
8
8
15
13
13
11
1
0
```

この入力では $N=4,K=2$ です。 $Q=10$ 回の更新を行います。

- $1$ 回目の更新を受けて $A=(5,0,0,0)$ となります。このとき $f(A)=5$ です。
- $2$ 回目の更新を受けて $A=(5,1,0,0)$ となります。このとき $f(A)=6$ です。
- $3$ 回目の更新を受けて $A=(5,1,3,0)$ となります。このとき $f(A)=8$ です。
- $4$ 回目の更新を受けて $A=(5,1,3,2)$ となります。このとき $f(A)=8$ です。
- $5$ 回目の更新を受けて $A=(5,10,3,2)$ となります。このとき $f(A)=15$ です。
- $6$ 回目の更新を受けて $A=(0,10,3,2)$ となります。このとき $f(A)=13$ です。
- $7$ 回目の更新を受けて $A=(0,10,3,0)$ となります。このとき $f(A)=13$ です。
- $8$ 回目の更新を受けて $A=(0,10,1,0)$ となります。このとき $f(A)=11$ です。
- $9$ 回目の更新を受けて $A=(0,0,1,0)$ となります。このとき $f(A)=1$ です。
- $10$ 回目の更新を受けて $A=(0,0,0,0)$ となります。このとき $f(A)=0$ です。