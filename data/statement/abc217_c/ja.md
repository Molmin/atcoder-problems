配点 : $300$ 点

## 問題文

$1,2,\dots,N$ が $1$ 回ずつ現れる長さ $N$ の数列を「長さ $N$ の順列」と呼びます。<br>
長さ $N$ の順列 $P = (p_1, p_2,\dots,p_N)$ が与えられるので、以下の条件を満たす長さ $N$ の順列 $Q = (q_1,\dots,q_N)$ を出力してください。  

- 全ての $i$ $(1 \leq i \leq N)$ に対して $Q$ の $p_i$ 番目の要素が $i$ である。

ただし、条件を満たす $Q$ は必ずただ $1$ つ存在することが証明できます。

## 制約

- $1 \leq N \leq 2 \times 10^5$
- $(p_1,p_2,\dots,p_N)$ は長さ $N$ の順列である。
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $p_1$ $p_2$ $\dots$ $p_N$

## 出力

数列 $Q$ を空白区切りで $1$ 行で出力せよ。

> $q_1$ $q_2$ $\dots$ $q_N$

```input1
3
2 3 1
```

```output1
3 1 2
```

以下に説明する通り、 $Q=(3,1,2)$ は条件を満たす順列です。

- $i = 1$ のとき $p_i = 2, q_2 = 1$
- $i = 2$ のとき $p_i = 3, q_3 = 2$
- $i = 3$ のとき $p_i = 1, q_1 = 3$

```input2
3
1 2 3
```

```output2
1 2 3
```

全ての $i$ $(1 \leq i \leq N)$ に対して $p_i = i$ が成り立つときは $P = Q$ になります。

```input3
5
5 3 2 4 1
```

```output3
5 3 2 4 1
```