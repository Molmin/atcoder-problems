配点 : $300$ 点

## 問題文

先頭の桁が $0$ でない $N$ 桁の正整数 $A,B$ が与えられます。

あなたは、以下の操作を好きな回数（$0$ 回でもよい）繰り返すことができます。

- $0 \le i \le N-1$ を満たす整数 $i$ を選び、$A,B$ の $10^{i}$ の位の数字を交換する。

操作を終えたときの $A \times B$ の最小値を $998244353$ で割ったあまりを求めてください。

$A \times B$ を $998244353$ で割ったあまりの最小値を求めるのではないことに注意してください。

## 制約

- $1 \le N \le 200000$
- $A,B$ は先頭の桁が $0$ でない $N$ 桁の正整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A$
> 
> $B$

## 出力

答えを $1$ 行に出力せよ。

```input1
2
13
22
```

```output1
276
```

以下のように $1$ 回操作を行うと $A \times B$ を $276$ にすることが出来ます。

- $i=0$ を選び、$A,B$ の $1$ の位の数字を交換する。$A=12,B=23$ となる。

$A \times B$ を $275$ 以下にすることは出来ないので、答えは $276$ です。

```input2
8
20220122
21002300
```

```output2
54558365
```

$998244353$ で割ったあまりを求めてください。