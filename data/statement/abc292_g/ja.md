配点 : $600$ 点

## 問題文

数字( `0123456789` )と `?` からなる長さ $M$ の文字列の列 $S_1,\ldots,S_N$ が与えられます。  

`?` を独立に数字に置き換える方法は $10^q(q$ は $S_1,\ldots,S_N$ に含まれる `?` の個数の合計$)$ 通りありますが、そのうち置き換え後の文字列をそれぞれ整数値とみなしたときに $S_1\lt S_2 \lt \ldots \lt S_N$ が成り立つようなものが何通りあるかを $998244353$ で割った余りを求めてください。  

なお、`?` を置き換えた後の $S_i$ は先頭に $1$ 個以上の `0` が連続していても構いません。例えば、`0000000292` を整数値とみなすと $292$ となります。

## 制約

- $2 \leq N \leq 40$
- $1 \leq M \leq 40$
- $N,M$ は整数
- $S_i$ は数字と `?` からなる長さ $M$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $S_1$
> 
> $\vdots$
> 
> $S_N$

## 出力

答えを出力せよ。

```input1
3 2
?0
??
05
```

```output1
4
```

条件を満たす置き換え方は以下の $4$ 通りです。

- $S_1$ の $1$ 文字目の `?` を `0` に、$S_2$ の $1,2$ 文字目の `?` をそれぞれ `0`, `1` に置き換える。
- $S_1$ の $1$ 文字目の `?` を `0` に、$S_2$ の $1,2$ 文字目の `?` をそれぞれ `0`, `2` に置き換える。
- $S_1$ の $1$ 文字目の `?` を `0` に、$S_2$ の $1,2$ 文字目の `?` をそれぞれ `0`, `3` に置き換える。
- $S_1$ の $1$ 文字目の `?` を `0` に、$S_2$ の $1,2$ 文字目の `?` をそれぞれ `0`, `4` に置き換える。

```input2
2 1
0
0
```

```output2
0
```

```input3
10 10
1?22??37?4
1??8?0??49
3?02??8044
51?4?8?7??
5?9?20???2
68?7?6?800
?3??2???23
?442312158
??2??921?8
????5?96??
```

```output3
137811792
```

答えを $998244353$ で割った余りを求めてください。