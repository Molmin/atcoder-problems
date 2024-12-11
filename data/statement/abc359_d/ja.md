配点 : $450$ 点

## 問題文

`A`, `B`, `?` からなる $N$ 文字の文字列 $S$ が与えられます。

正整数 $K$ が与えられます。
`A`, `B` からなる文字列 $T$ が次の条件を満たすとき、$T$ は**良い文字列**であるということにします。

- $T$ の長さ $K$ の連続する部分文字列で、回文であるものが**存在しない**。

$S$ に含まれる `?` の個数を $q$ 個とします。
$q$ 個の `?` をそれぞれ `A`, `B` のどちらかに置き換えて得られる文字列は $2 ^ q$ 通りありますが、その中に良い文字列がいくつあるか求めてください。

ただし、答えは非常に大きくなる場合があるので、$998244353$ で割った余りを求めてください。

## 制約

- $2\leq K\leq N\leq 1000$
- $K\leq 10$
- $S$ は `A`, `B`, `?` からなる文字列
- $S$ の長さは $N$
- $N,K$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $S$

## 出力

答えを出力せよ。

```input1
7 4
AB?A?BA
```

```output1
1
```

与えられた文字列の中に `?` は $2$ 個あります。
$2$ 個の `?` をそれぞれ `A`, `B` のどちらかに置き換えて得られる文字列は次の $4$ 通りあります。

- `ABAAABA`
- `ABAABBA`
- `ABBAABA`
- `ABBABBA`

このうち、最初の `ABAAABA` 以外の $3$ つの文字列は、長さ $4$ の回文 `ABBA` を連続する部分文字列として含むため、良い文字列ではありません。

よって、`1` を出力してください。

```input2
40 7
????????????????????????????????????????
```

```output2
116295436
```

良い文字列の個数を $998244353$ で割った余りを求めることに注意してください。

```input3
15 5
ABABA??????????
```

```output3
0
```

`?` をどのように置き換えても良い文字列にならないこともあります。

```input4
40 8
?A?B??B?B?AA?A?B??B?A???B?BB?B???BA??BAA
```

```output4
259240
```