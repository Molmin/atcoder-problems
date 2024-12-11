配点 : $300$ 点

## 問題文

整数 $S,P$ が与えられます。
$N+M=S,N \times M =P$ を満たすような正の整数の組 $(N,M)$ はありますか？

## 制約

- 与えられる入力は全て整数
- $1 \leq S,P \leq 10^{12}$

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$ $P$

## 出力

$N+M=S,N \times M =P$ を満たすような正の整数の組 $(N,M)$ があるなら `Yes`、そうでないなら `No` を出力せよ。

```input1
3 2
```

```output1
Yes
```

- 例えば $N=1,M=2$ のとき、$N+M=3,N \times M =2$ となります。

```input2
1000000000000 1
```

```output2
No
```

- そのような $(N,M)$ は存在しません。