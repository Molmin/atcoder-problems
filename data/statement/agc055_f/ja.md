配点 : $1800$ 点

## 問題文

整数 $N, K$ が与えられます。

長さ $K$ の整数列 $a=[a_1, a_2, \ldots, a_K]$ が全ての $1 \le i \le K$ について $1 \le a_i \le i$ を満たすとき、$a$ を**良い**列と呼びます。

長さ $NK$ の整数列 $b=[b_1, b_2, \ldots, b_{NK}]$ が次の条件を満たすとき、$b$ を**素晴らしい**列と呼びます: $b$ を $N$ 個の長さ $K$ の（連続とは限らない）部分列に分解する方法であって、各部分列が良い列であるような方法が存在する。

$f(pos, val)$ を、$b_{pos}=val$ であるような素晴らしい列 $b$ の個数と定義します。

全ての $1\le pos \le NK$, $1 \le val \le K$ について $f(pos, val)$ を求めてください。これらの数値は非常に大きい可能性があるため、これらを素数 $P$ で割った余りを出力してください。

## 制約

- $1 \le N \le 20$
- $1 \le K \le 20$
- $10^8 \le P \le 10^9$
- $P$ は素数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$ $P$

## 出力

$NK$ 行出力せよ。$i$ 行目の $j$ 個目の数値が $(f(i, j) \bmod P)$ となるようにすること。

```input1
2 2 965166677
```

```output1
6 0 
4 2 
4 2 
3 3
```

以下の $6$ 個の素晴らしい列が存在します。

- $[1, 1, 1, 1]$: $[b_1, b_2], [b_3, b_4]$ に分割できます。
- $[1, 1, 1, 2]$: $[b_1, b_2], [b_3, b_4]$ に分割できます。
- $[1, 2, 1, 1]$: $[b_1, b_2], [b_3, b_4]$ に分割できます。
- $[1, 2, 1, 2]$: $[b_1, b_2], [b_3, b_4]$ に分割できます。
- $[1, 1, 2, 1]$: $[b_1, b_3], [b_2, b_4]$ に分割できます。
- $[1, 1, 2, 2]$: $[b_1, b_3], [b_2, b_4]$ に分割できます。