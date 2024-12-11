配点 : $700$ 点

## 問題文

$N$ 頂点 $M$ 辺の有向グラフ $G$ があります。頂点には $1$ から $N$ の番号が付いており、各辺には `(` , `)` のいずれかのラベルが付与されています。$i$ 番目の辺は頂点 $u_i$ から頂点 $v_i$ に向かう辺であり、ラベル $c_i$ が付与されています。このグラフは多重辺、自己ループを持ちません。

このグラフにおいては任意の $2$ 頂点 $s,t$ に対して、 $s$ から $t$ に向かうパスが存在します。

グラフ $G$ 上の**ウォーク**であって、以下の条件をすべて満たすものが存在するか判定してください。

- ウォークの始点と終点は同じ頂点である
- $i=1,2,\dots,M$ に対して、 $i$ 番目の辺はウォークに $1$ 回以上用いられる
- ウォークに用いた辺のラベルを、辺の使用順に並べて得られる文字列は正しい括弧列である

 ウォークとは

グラフ $G$ 上のウォークとは、 $k$ 個（ $k$ は正整数）の頂点と $k-1$ 個の辺を交互に並べた列 $(v_1,e_1,v_2,\dots,v_{k-1},e_{k-1},v_k)$ であって、辺 $e_i$ が頂点 $v_i$ から頂点 $v_{i+1}$ へ向かう辺であるようなものを指し、頂点 $v_1,v_k$ をそれぞれウォークの始点、終点とよぶ。

 正しい括弧列とは 

正しい括弧列とは、以下のいずれかの条件を満たす文字列です。

- 空文字列
- ある正しい括弧列 $A$ が存在して `(`, $A$, `)` をこの順に連結した文字列
- ある空でない正しい括弧列 $A,B$ が存在して、 $A,B$ をこの順に連結した文字列

## 制約

- $2 \leq N \leq 4000$
- $N \leq M \leq 8000$
- $1 \leq u_i,v_i \leq N$
- $c_i$ は `(` , `)` のいずれか
- $u_i \neq v_i$
- $i \neq j$ ならば $(u_i,v_i) \neq (u_j,v_j)$
- 入力される数値はすべて整数
- 入力で与えられるグラフにおいて、任意の $2$ 頂点 $s,t$ に対して、 $s$ から $t$ に向かうパスが存在する。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $u_1$ $v_1$ $c_1$
> 
> $u_2$ $v_2$ $c_2$
> 
> $\vdots$
> 
> $u_M$ $v_M$ $c_M$

## 出力

条件を満たすウォークが存在する場合は `Yes` を、存在しない場合は `No` を出力せよ。

```input1
5 7
1 2 (
2 3 )
3 4 (
4 1 )
2 4 )
4 5 (
5 1 )
```

```output1
Yes
```

辺 $1,2,3,4,1,5,6,7$ をこの順で用いるウォークは、すべての辺を一度以上用いており、辺のラベルを使用順に並べて得られる文字列 `()()()()` は正しい括弧列であるため、条件を満たします。

ウォークは同じ辺を $2$ 回以上使用したり、同じ頂点を $2$ 回以上訪れるものであっても構いません。

```input2
2 2
1 2 )
2 1 )
```

```output2
No
```

```input3
10 20
4 5 (
5 6 (
6 7 )
2 5 )
5 8 (
6 3 )
8 5 )
1 2 (
9 10 (
4 7 (
3 4 )
8 9 (
2 1 )
1 4 )
2 3 )
3 2 (
7 8 (
7 4 )
10 9 )
9 8 )
```

```output3
Yes
```