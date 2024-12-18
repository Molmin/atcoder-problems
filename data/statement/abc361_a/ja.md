配点 : $100$ 点

## 問題文

長さ $N$ の整数列 $A$ と整数 $K,X$ が与えられます。<br>
整数列 $A$ の $K$ 要素目の直後に整数 $X$ を $1$ つ挿入した整数列 $B$ を出力してください。

## 制約

- 入力は全て整数
- $1 \le K \le N \le 100$
- $1 \le A_i,X \le 100$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$ $X$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## 出力

整数列 $A$ の $K$ 要素目の直後に整数 $X$ を $1$ つ挿入した整数列 $B$ を、以下の形式で出力せよ。

> $B_1$ $B_2$ $\dots$ $B_{N+1}$

```input1
4 3 7
2 3 5 11
```

```output1
2 3 5 7 11
```

$K=3, X=7, A=(2,3,5,11)$ のとき、 $B=(2,3,5,7,11)$ です。

```input2
1 1 100
100
```

```output2
100 100
```

```input3
8 8 3
9 9 8 2 4 4 3 5
```

```output3
9 9 8 2 4 4 3 5 3
```