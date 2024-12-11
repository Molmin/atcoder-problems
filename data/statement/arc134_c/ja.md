配点 : $500$ 点

## 問題文

$1$ から $K$ の番号がついた $K$ 個の箱があります。はじめ、箱は全て空です。

すぬけ君は $1$ 以上 $N$ 以下の整数が書かれたボールをいくつか持っています。
すぬけ君が持っているボールのうち、$i$ が書かれたものは $a_i$ 個あります。
同じ整数が書かれたボール同士は区別できません。

すぬけ君は持っている全てのボールを箱にしまうことにしました。
すぬけ君はどの箱についても $1$ と書かれたボールが過半数を占めるようにしたいです。
過半数を占めるとは、$1$ と書かれたボールの個数がそれ以外のボールの個数より多いことを意味します。

そのようなしまい方の個数を $998244353$ で割ったあまりを求めてください。

$2$ つのしまい方が異なるとは、$1 \leq i \leq K, 1 \leq j \leq N$ を満たす整数の組 $(i,j)$ であって、箱 $i$ に入っている $j$ が書かれたボールの個数が異なるようなものが存在することをいいます。

## 制約

- 与えられる入力は全て整数
- $1 \leq N \leq 10^5$
- $1 \leq K \leq 200$
- $1 \leq a_i &lt; 998244353$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$ 
> 
> $a_1$ $\cdots$ $a_N$

## 出力

どの箱も $1$ と書かれたボールが過半数を占めるようなしまい方の個数を $998244353$ で割ったあまりを出力せよ。

```input1
2 2
3 1
```

```output1
2
```

- $1$ と書かれたボールが過半数を占めるようなしまい方は $2$ 通りあります。
- 例えば $1$ と書かれたボールを箱 $1$ に $2$ 個、箱 $2$ に $1$ 個入れ、$2$ と書かれたボールを箱 $1$ に $1$ 個入れたとき条件を満たします。

```input2
2 1
1 100
```

```output2
0
```

- 条件を満たすようなしまい方が存在しないこともあります。

```input3
20 100
1073813 90585 41323 52293 62633 28788 1925 56222 54989 2772 36456 64841 26551 92115 63191 3603 82120 94450 71667 9325
```

```output3
313918676
```

- $998244353$ で割ったあまりを求めるのを忘れずに。