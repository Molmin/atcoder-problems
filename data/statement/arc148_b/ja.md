配点 : $500$ 点

## 問題文

`d` と `p` からなる長さ $L$ の文字列 $T$ に対して、$T$ を $180$ 度回転した文字列を $f(T)$ と表します。より厳密には、$f(T)$ を次の条件を満たす文字列として定めます。

- $f(T)$ は `d` と `p` からなる長さ $L$ の文字列である。
- $1 \leq i \leq L$ であるすべての整数 $i$ について、$f(T)$ の $i$ 文字目は $T$ の $L + 1 - i$ 文字目と異なる。

例えば $T =$ `ddddd` のとき $f(T) =$ `ppppp`, $T =$ `dpdppp` のとき $f(T)=$ `dddpdp` です。  

`d` と `p` からなる長さ $N$ の文字列 $S$ が与えられます。<br>
あなたは次の操作を **$0$ 回以上 $1$ 回以下**行うことができます。

- $1 \leq L \leq R \leq N$ である整数の組 $(L, R)$ を $1$ つ選び、$S$ の $L$ 文字目から $R$ 文字目までからなる部分文字列を $T$ とする。そして、$S$ の $L$ 文字目から $R$ 文字目までを $f(T)$ に置き換える。

例えば $S=$ `dpdpp`, $(L,R)=(2,4)$ の場合、$T=$ `pdp`, $f(T)=$ `dpd` なので $S$ は `ddpdp` に変化します。

最終的な $S$ としてあり得る文字列のうち辞書順最小のものを出力してください。

 辞書順とは？

文字列 $S = S_1S_2\ldots S_{|S|}$ が文字列 $T = T_1T_2\ldots T_{|T|}$ より**辞書順で小さい**とは、下記の 1. と 2. のどちらかが成り立つことを言います。
ここで、$|S|, |T|$ はそれぞれ $S, T$ の長さを表します。

1. $|S| \lt |T|$ かつ $S_1S_2\ldots S_{|S|} = T_1T_2\ldots T_{|S|}$。
2. ある整数 $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ が存在して、下記の $2$ つがともに成り立つ。
1.    - $S_1S_2\ldots S_{i-1} = T_1T_2\ldots T_{i-1}$
2.    - $S_i$ が $T_i$ よりアルファベット順で小さい文字である。

## 制約

- $1 \leq N \leq 5000$
- $S$ は `d` と `p` からなる長さ $N$ の文字列
- $N$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

答えを出力せよ。

```input1
6
dpdppd
```

```output1
dddpdd
```

$(L, R) = (2, 5)$ とします。$T =$ `pdpp`, $f(T) =$ `ddpd` なので、操作後の $S$ は `dddpdd` になります。<br>
得られる文字列のうち `dddpdd` が辞書順最小なので、これを出力します。

```input2
3
ddd
```

```output2
ddd
```

操作を行わないことが最適な場合もあります。

```input3
11
ddpdpdppddp
```

```output3
ddddpdpdddp
```