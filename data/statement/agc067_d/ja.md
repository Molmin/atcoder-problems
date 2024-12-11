配点 : $1500$ 点

## 問題文

整数 $N$ と素数 $P$ が与えられます。

以下がともに満たされるとき、またそのときに限り $N$ 個の区間からなる列 $([L_1,R_1] ,[L_2,R_2], \cdots, [L_N,R_N])$ を **良い** と呼びます。

- すべての $1\le i\le N$ に対して $1\le L_i\le R_i\le N$ が成り立つ。
- すべての $1\le i\le N$ に対して $L_i\le x_i\le R_i$ が成り立つような $(1,2,\cdots,N)$ の順列 $x=(x_1,x_2,\cdots,x_N)$ が **ただ一つ** 存在する。

**良い** 区間の列の個数を $P$ で割った余りを求めてください。

## 制約

- $2 \leq N \leq 5000$
- $10^9&lt;P&lt;1.01\times 10^9$
- $P$ は素数である。
- すべての入力値は整数である。

## 入力

入力は標準入力から以下の形式で与えられる。

> $N$ $P$

## 出力

答えを出力せよ。

```input1
2 1005488041
```

```output1
6
```

以下の $6$ 個が良い列です。

- $([1,1],[2,2])$
- $([1,2],[2,2])$
- $([1,1],[1,2])$
- $([2,2],[1,1])$
- $([2,2],[1,2])$
- $([1,2],[1,1])$

```input2
5 1005488041
```

```output2
102960
```

```input3
100 1005488041
```

```output3
47599495
```

```input4
1000 1005488041
```

```output4
632708165
```