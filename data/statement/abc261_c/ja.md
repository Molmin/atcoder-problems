配点 : $300$ 点

## 問題文

$2$ つの文字列 $A,B$ に対して、$A$ の末尾に $B$ を連結した文字列を $A+B$ と表します。

$N$ 個の文字列 $S_1,\ldots,S_N$ が与えられます。$i=1,\ldots,N$ の順に、次の指示に従って加工して出力してください。

- $S_1,\ldots,S_{i-1}$ の中に $S_i$ と同じ文字列が存在しないならば、$S_i$ を出力する。
- $S_1,\ldots,S_{i-1}$ の中に $S_i$ と同じ文字列が $X$ 個 $(X &gt; 0)$ 存在するならば、$X$ を文字列として扱って $S_i+$ `(` $+X+$ `)` を出力する。

## 制約

- $1 \leq N \leq 2\times 10^5$
- $S_i$ は英小文字のみからなる長さ $1$ 以上 $10$ 以下の文字列

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

## 出力

問題文中の指示にしたがって、$N$ 行出力せよ。  

```input1
5
newfile
newfile
newfolder
newfile
newfolder
```

```output1
newfile
newfile(1)
newfolder
newfile(2)
newfolder(1)
```

```input2
11
a
a
a
a
a
a
a
a
a
a
a
```

```output2
a
a(1)
a(2)
a(3)
a(4)
a(5)
a(6)
a(7)
a(8)
a(9)
a(10)
```