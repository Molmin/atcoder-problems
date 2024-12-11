配点 : $625$ 点

## 問題文

$N$ 個の英小文字からなる文字列 $S_1,S_2,\ldots,S_N$ と $N$ 個の正整数 $A_1,A_2,\ldots,A_N$ があります。

ある $\lbrace 1,2,\ldots,N \rbrace$ の部分集合 $T$ は $i,j \in T (i \neq j)$ で $S_i$ が $S_j$ の部分文字列となるような $i,j$ の組がないとき**良い集合**であるといいます。 

良い集合 $T$ を選んだ時 $\displaystyle \sum_{i \in T} A_i$ としてありえる値の最大値を求めてください。

部分文字列とは？
$S$ の**部分文字列**とは、$S$ の先頭から $0$ 文字以上、末尾から $0$ 文字以上削除して得られる文字列のことをいいます。
例えば、`ab` は `abc` の部分文字列ですが、`ac` は `abc` の部分文字列ではありません。

## 制約

- $1 \leq N \leq 100$
- $S_i$ は英小文字からなる文字列である
- $1 \leq |S_i|$
- $|S_1|+|S_2| + \ldots + |S_N| \leq 5000$
- $1 \leq A_i \leq 10^9$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## 出力

答えを出力せよ。

```input1
4
atcoder
at
coder
code
5 2 3 4
```

```output1
6
```

良い集合 としてありえる $T$ とそれぞれに対する $\displaystyle \sum_{i \in T} A_i$ は以下の通りです。

- $T = \lbrace 1 \rbrace$ のとき $\displaystyle \sum_{i \in T} A_i = 5$
- $T = \lbrace 2 \rbrace$ のとき $\displaystyle \sum_{i \in T} A_i = 2$
- $T = \lbrace 3 \rbrace$ のとき $\displaystyle \sum_{i \in T} A_i = 3$
- $T = \lbrace 4 \rbrace$ のとき $\displaystyle \sum_{i \in T} A_i = 4$
- $T = \lbrace 2,3 \rbrace$ のとき $\displaystyle \sum_{i \in T} A_i = 5$
- $T = \lbrace 2,4 \rbrace$ のとき $\displaystyle \sum_{i \in T} A_i = 6$

このうち最大値は $6$ なので、$6$ を出力します。

```input2
10
abcd
abc
ab
a
b
c
d
ab
bc
cd
100 10 50 30 60 90 80 70 40 20
```

```output2
260
```