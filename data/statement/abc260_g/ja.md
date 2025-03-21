配点 : $600$ 点

## 問題文

$N \times N$ のグリッドがあり、このグリッドの上から $i$ マス目、左から $j$ マス目を $(i,j)$ と呼びます。<br>
このグリッドの各マスには高々 $1$ 個のコマが置かれています。<br>
グリッドの状態は $N$ 個の文字列 $S_i$ として与えられ、

- $S_i$ の $j$ 文字目が `O` であるとき  $(i,j)$ に $1$ つコマが置かれていること
- $S_i$ の $j$ 文字目が `X` であるとき  $(i,j)$ にコマは置かれていないこと

を表します。

整数 $M$ が与えられます。 この $M$ を使って、 $(s,t)$ に置かれているコマ $P$ について、以下の条件を全て満たすマス $(u,v)$ を $P$ が守っているマスと定義します。

- $s \le u \le N$
- $t \le v \le N$
- $(u - s) + \frac{(v - t)}{2} &lt; M$

$Q$ 個のマス $(X_i,Y_i)$ について、そのマスを守っているコマの個数を求めてください。

## 制約

- $N,M,X_i,Y_i,Q$ は整数
- $1 \le N \le 2000$
- $1 \le M \le 2 \times N$
- $S_i$ は `O`, `X` からなる
- $1 \le Q \le 2 \times 10^5$
- $1 \le X_i,Y_i \le N$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$
> 
> $Q$
> 
> $X_1$ $Y_1$
> 
> $X_2$ $Y_2$
> 
> $\vdots$
> 
> $X_Q$ $Y_Q$

## 出力

$Q$ 行出力せよ。<br>
そのうち $i$ ( $1 \le i \le Q$ ) 行目には、マス $(X_i,Y_i)$ を守っているコマの個数を整数として出力せよ。

```input1
4 2
OXXX
XXXX
XXXX
XXXX
6
1 1
1 4
2 2
2 3
3 1
4 4
```

```output1
1
1
1
0
0
0
```

マス $(1,1)$ のみにコマが置かれ、このコマによって以下の `#` のマスが守られます。

```output1
####
##..
....
....
```

```input2
5 10
OOOOO
OOOOO
OOOOO
OOOOO
OOOOO
5
1 1
2 3
3 4
4 2
5 5
```

```output2
1
6
12
8
25
```

```input3
8 5
OXXOXXOX
XOXXOXOX
XOOXOOXO
OXOOXOXO
OXXOXXOX
XOXXOXOX
XOOXOOXO
OXOOXOXO
6
7 2
8 1
4 5
8 8
3 4
1 7
```

```output3
5
3
9
14
5
3
```