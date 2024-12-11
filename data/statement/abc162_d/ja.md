配点 : $400$ 点

## 問題文

`R`, `G`, `B` のみからなる、長さ $N$ の文字列 $S$ があります。

以下の $2$ つの条件をともに満たす組 $(i, \sim j, \sim k) \sim (1 \leq i &lt; j &lt; k \leq N)$ の数を求めてください。

- $S_i \neq S_j$ かつ $S_i \neq S_k$ かつ $S_j \neq S_k$ である
- $j - i \neq k - j$ である

## 制約

- $1 \leq N \leq 4000$
- $S$ は `R`, `G`, `B` のみからなる、長さ $N$ の文字列である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

題意を満たす組の数を出力せよ。

```input1
4
RRGB
```

```output1
1
```

組 $(1, \sim 3, \sim 4)$ だけが $2$ つの条件をともに満たします。組 $(2, \sim 3, \sim 4)$ は、$1$ つ目の条件は満たしますが $2$ つ目の条件を満たさないので不適です。

```input2
39
RBRBGRBGGBBRRGBBRRRBGGBRBGBRBGBRBBBGBBB
```

```output2
1800
```