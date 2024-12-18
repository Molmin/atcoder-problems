配点: $100$ 点

## 問題文

$N \times N$ のマス目があります。

このマス目の各マスを白色または黒色に塗ることにしました (すべてのマスをどちらか片方の色に塗ります)。

ちょうど $A$ マスを白色に塗るとき、黒色に塗ることになるマスはいくつあるでしょうか。

## 制約

- $1 \leq N \leq 100$
- $0 \leq A \leq N^2$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A$

## 出力

黒色に塗ることになるマスの個数を出力せよ。

```input1
3
4
```

```output1
5
```

$3 \times 3$ のマス目にはマスが $9$ 個あります。
そのうち $4$ 個を白く塗るので、残った $5$ マスは黒く塗ることになります。

```input2
19
100
```

```output2
261
```

```input3
10
0
```

```output3
100
```

白く塗るマスの個数が $0$ なので、すべてのマスが黒く塗られます。