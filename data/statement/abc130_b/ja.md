配点 : $200$ 点

## 問題文

数直線上を $N + 1$ 回跳ねるボールがあり、$1$ 回目は 座標 $D_1 = 0$,  $i$ 回目は 座標 $D_i = D_{i-1} + L_{i-1} (2 \leq i \leq N+1)$ で跳ねます。

数直線の座標が $X$ 以下の領域でボールが跳ねる回数は何回でしょうか。

## 制約

- $1 \leq N \leq 100$
- $1 \leq L_i \leq 100$
- $1 \leq X \leq 10000$
- 入力は全て整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$
> 
> $L_1$ $L_2$ $...$ $L_{N-1}$ $L_N$

## 出力

数直線の座標が $X$ 以下の領域でボールが跳ねる回数を出力せよ。

```input1
3 6
3 4 5
```

```output1
2
```

ボールは順に座標 $0, 3, 7, 12$ で跳ねるので、座標 $6$ 以下の領域で跳ねる回数は $2$ 回です。

```input2
4 9
3 3 3 3
```

```output2
4
```

ボールは順に座標 $0, 3, 6, 9, 12$ で跳ねるので、座標 $9$ 以下の領域で跳ねる回数は $4$ 回です。