配点 : $300$ 点

## 問題文

整数 $X$ が与えられます。この $X$ に以下を施すことを「操作」と呼びます。  

- 以下の $2$ つのうちどちらかを選択し、実行する。-   - $X$ に $1$ を加算する。
-   - $X$ から $1$ を減算する。

初項 $A$ 、公差 $D$ 、項数 $N$ の等差数列 $S$ に含まれる数を「良い数」と呼びます。<br>
「操作」を $0$ 回以上何度でも使って $X$ を「良い数」にする時、必要な「操作」の最小回数を求めてください。

## 制約

- 入力は全て整数
- $-10^{18} \le X,A \le 10^{18}$
- $-10^6 \le D \le 10^6$
- $1 \le N \le 10^{12}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $X$ $A$ $D$ $N$

## 出力

答えを整数として出力せよ。

```input1
6 2 3 3
```

```output1
1
```

$A=2,D=3,N=3$ であるため、 $S=(2,5,8)$ です。<br>
$X=6$ を「良い数」にするためには、 $X$ から $1$ を減算することを $1$ 度行えば良いです。<br>
$0$ 回の操作で $X$ を「良い数」にすることはできません。

```input2
0 0 0 1
```

```output2
0
```

$D=0$ である場合もあります。また、操作を $1$ 回も必要としない場合もあります。

```input3
998244353 -10 -20 30
```

```output3
998244363
```

```input4
-555555555555555555 -1000000000000000000 1000000 1000000000000
```

```output4
444445
```