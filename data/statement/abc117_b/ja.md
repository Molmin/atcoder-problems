配点 : $200$ 点

## 問題文

$2$ 次元平面上に辺の長さがそれぞれ $L_1, L_2, ..., L_N$ の $N$ 角形(凸多角形でなくてもよい)が描けるかを判定してください。

ここで、次の定理を利用しても構いません。

**定理** : 一番長い辺が他の $N-1$ 辺の長さの合計よりも真に短い場合に限り、条件を満たす $N$ 角形が描ける。

## 制約

- 入力は全て整数である。
- $3 \leq N \leq 10$
- $1 \leq L_i \leq 100$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $L_1$ $L_2$ $...$ $L_N$

## 出力

条件を満たす $N$ 角形が描けるなら `Yes`、そうでないなら `No` を出力せよ。

```input1
4
3 8 5 1
```

```output1
Yes
```

$8 &lt; 9 = 3 + 5 + 1$ なので、定理より $2$ 次元平面上に条件を満たす $N$ 角形が描けます。

```input2
4
3 8 4 1
```

```output2
No
```

$8 \geq 8 = 3 + 4 + 1$ なので、定理より $2$ 次元平面上に条件を満たす $N$ 角形は描けません。

```input3
10
1 8 10 5 8 12 34 100 11 3
```

```output3
No
```