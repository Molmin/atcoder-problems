配点 : $400$ 点

## 問題文

長さ $N$ の整数列 $A=(A_1,A_2,\cdots,A_N)$，および長さ $N-1$ の整数列 $P=(P_2,\cdots,P_N)$ が与えられます．
$P$ の添字が $2$ から始まることに注意してください．
また，$1 \leq P_i&lt;i$ が保証されます．

あなたは今から以下の操作を $10^{100}$ 回繰り返します．

- 各 $i=2,\cdots,N$ について，この順に，$A_{P_i}$ の値を $A_{P_i}+A_{i}$ で置き換える．

すべての操作が終了したときの $A_1$ が 正, 負, $0$ のいずれになるかを求めてください．

## 制約

- $2 \leq N \leq 250000$
- $-10^9 \leq A_i \leq 10^9$
- $1 \leq P_i &lt; i$
- 入力される値はすべて整数．

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $P_2$ $\cdots$ $P_N$

## 出力

すべての操作が終了したときの $A_1$ が正である場合 `+` を出力せよ．
負である場合 `-` を出力せよ．
$0$ である場合 `0` を出力せよ．

```input1
4
1 -2 3 -4
1 2 3
```

```output1
-
```

最初の数回の操作の結果を以下に示します．

- $1$ 回目の操作-   - 操作前: $A=(1,-2,3,-4)$
-   - $i=2$ について処理: $A_1$ の値を $A_1+A_2=1+(-2)=-1$ で置き換える．
-   - $i=3$ について処理: $A_2$ の値を $A_2+A_3=-2+3=1$ で置き換える．
-   - $i=4$ について処理: $A_3$ の値を $A_3+A_4=3+(-4)=-1$ で置き換える．
-   - 操作後: $A=(-1,1,-1,-4)$
- $2$ 回目の操作後，$A=(0,0,-5,-4)$ となる．
- $3$ 回目の操作後，$A=(0,-5,-9,-4)$ となる．
- $4$ 回目の操作後，$A=(-5,-14,-13,-4)$ となる．
- $\vdots$

操作を $10^{100}$ 回行うと，$A_1$ は負になります．
よって `-` を出力すべきです．

```input2
3
0 1 -1
1 1
```

```output2
0
```

```input3
5
1 -1 1 -1 1
1 1 2 2
```

```output3
+
```

```input4
20
568273618 939017124 -32990462 -906026662 403558381 -811698210 56805591 0 436005733 -303345804 96409976 179069924 0 0 0 -626752087 569946496 0 0 0
1 1 1 4 4 6 7 2 2 3 3 8 13 14 9 9 15 18 19
```

```output4
+
```