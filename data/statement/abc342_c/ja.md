配点 : $350$ 点

## 問題文

英小文字からなる長さ $N$ の文字列 $S$ が与えられます。

文字列 $S$ に対して操作を $Q$ 回行います。
$i$ 回目 $(1\leq i\leq Q)$ の操作は文字の組 $(c _ i,d _ i)$ で表され、次のような操作に対応します。

- $S$ に含まれる文字 $c _ i$ をすべて文字 $d _ i$ で置き換える。

すべての操作が終わったあとの文字列 $S$ を出力してください。

## 制約

- $1\leq N\leq2\times10^5$
- $S$ は英小文字からなる長さ $N$ の文字列
- $1\leq Q\leq2\times10^5$
- $c _ i,d _ i$ は英小文字 $(1\leq i\leq Q)$
- $N,Q$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$
> 
> $Q$
> 
> $c _ 1$ $d _ 1$
> 
> $c _ 2$ $d _ 2$
> 
> $\vdots$
> 
> $c _ Q$ $d _ Q$

## 出力

すべての操作が終わったあとの $S$ を出力せよ。

```input1
7
atcoder
4
r a
t e
d v
a r
```

```output1
recover
```

$S$ は `atcoder` → `atcodea` → `aecodea` → `aecovea` → `recover` と変化します。
たとえば、$4$ 番目の操作では $S={}$`aecovea` に含まれる `a` （$1$ 文字目と $7$ 文字目）をすべて `r` に置き換えるので $S={}$`recover` となります。

すべての操作が終わったときには $S={}$`recover` となっているため、`recover` を出力してください。

```input2
3
abc
4
a a
s k
n n
z b
```

```output2
abc
```

$c _ i=d _ i$ であるような操作や $S$ に $c _ i$ が含まれないような操作もあります。

```input3
34
supercalifragilisticexpialidocious
20
g c
l g
g m
c m
r o
s e
a a
o f
f s
e t
t l
d v
p k
v h
x i
h n
n j
i r
s i
u a
```

```output3
laklimamriiamrmrllrmlrkramrjimrial
```