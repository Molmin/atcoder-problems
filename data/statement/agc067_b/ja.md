配点 : $1100$ 点

## 問題文

長さ $N$ の整数列 $a=(a_1,a_2,\cdots,a_N)$ があります。
すべての要素ははじめ $0$ です。

整数 $C$ と $M$ 個の区間 $([L_1,R_1],[L_2,R_2],\cdots,[L_M,R_M])$ が与えられます。

あなたは、$(1,2,\cdots,M)$ の順列 $p$ と長さ $M$ の整数列 $w=(w_1,w_2,\cdots,w_M)$ を選びます。
ここで、$1\le w_i\le C$ でなければなりません。

そして、$M$ 回の変更を行います。
$i$ 回目の変更は以下です。

- $a_{L_{p_i}}, \cdots, a_{R_{p_i}}$ を $w_i$ に変える。

$a$ の中のすべての位置が少なくとも一つの区間に覆われることが保証されます。

すべての変更後の $a$ としてありうるものの個数を求め、答えを $998244353$ で割った余りを出力してください。

## 制約

- $1\le N\le 100$
- $1\le M\le\dfrac{N(N+1)}{2}$
- $1\le C&lt;998244353$
- $1 \le L_i \le R_i \le N$
- $(L_i,R_i) \neq (L_j,R_j)$ ($i \neq j$)
- $a$ の中のすべての位置は少なくとも一つの区間に覆われる。
- すべての入力値は整数である。

## 入力

入力は標準入力から以下の形式で与えられる。

> $N$ $M$ $C$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_M$ $R_M$

## 出力

答えを出力せよ。

```input1
5 5 2
1 3
2 2
3 3
1 5
3 5
```

```output1
16
```

ありうる数列は $16$ 個あります。
例えば、$a=(2,1,1,1,1)$ は以下のようにして得られます。

- $p=(4,1,2,3,5)$ と $w=(1,2,1,2,1)$ を選ぶ
- $1$ 回目の操作で $a$ が $(1,1,1,1,1)$ になる
- $2$ 回目の操作で $a$ が $(2,2,2,1,1)$ になる
- $3$ 回目の操作で $a$ が $(2,1,2,1,1)$ になる
- $4$ 回目の操作で $a$ が $(2,1,2,1,1)$ になる
- $5$ 回目の操作で $a$ が $(2,1,1,1,1)$ になる

```input2
20 30 20
1 14
1 7
1 16
3 13
1 17
4 8
2 11
4 12
9 14
3 15
11 19
1 13
4 15
8 19
3 17
15 18
10 18
1 18
17 19
16 20
1 8
8 15
13 17
1 19
13 19
1 20
6 13
10 12
11 20
17 18
```

```output2
258066445
```