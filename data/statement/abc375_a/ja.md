配点 : $100$ 点

## 問題文

$N$ 個の座席が並んでおり、座席には $1, 2, \ldots, N$ の番号が付けられています。

座席の状態は `#`, `.` からなる長さ $N$ の文字列 $S$ によって与えられます。$S$ の $i$ 文字目が `#` のとき座席 $i$ には人が座っていることを表し、$S$ の $i$ 文字目が `.` のとき座席 $i$ には人が座っていないことを表します。

$1$ 以上 $N - 2$ 以下の整数 $i$ であって、以下の条件を満たすものの個数を求めてください。

- 座席 $i, i + 2$ には人が座っており、座席 $i + 1$ には人が座っていない

## 制約

- $N$ は $1$ 以上 $2 \times 10^5$ 以下の整数
- $S$ は `#`, `.` からなる長さ $N$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $S$

## 出力

答えを出力せよ。

```input1
6
#.##.#
```

```output1
2
```

$i = 1, 4$ が条件を満たすので、答えは $2$ です。

```input2
1
#
```

```output2
0
```

```input3
9
##.#.#.##
```

```output3
3
```