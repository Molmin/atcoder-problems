配点 : $200$ 点

## 問題文

高橋くんは $N$ 種類の料理が食べ放題のビュッフェに行き、全種類の料理 (料理 $1$, 料理 $2$, $\ldots$, 料理 $N$) を $1$ 度ずつ食べました。

高橋くんが $i$ $(1 \leq i \leq N)$ 番目に食べた料理は料理 $A_i$ でした。

高橋くんは、料理 $i$ $(1 \leq i \leq N)$ を食べると満足度 $B_i$ を得ます。

また、料理 $i$ $(1 \leq i \leq N - 1)$ を食べた直後に料理 $i+1$ を食べると満足度 $C_i$ を追加で得ます。

高橋くんが得た満足度の合計を求めてください。

## 制約

- 入力は全て整数である。
- $2 \leq N \leq 20$
- $1 \leq A_i \leq N$
- $A_1, A_2, ..., A_N$ は全て異なる。
- $1 \leq B_i \leq 50$
- $1 \leq C_i \leq 50$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$
> 
> $B_1$ $B_2$ $...$ $B_N$
> 
> $C_1$ $C_2$ $...$ $C_{N-1}$

## 出力

高橋くんが得た満足度の合計を整数で出力せよ。

```input1
3
3 1 2
2 5 4
3 6
```

```output1
14
```

以下のように高橋くんは合計 $14$ の満足度を得ました。

- 高橋くんはまず料理 $3$ を食べ、満足度 $4$ を得ました。
- 高橋くんは次に料理 $1$ を食べ、満足度 $2$ を得ました。
- 高橋くんは最後に料理 $2$ を食べ、満足度 $5 + 3 = 8$ を得ました。

```input2
4
2 3 4 1
13 5 8 24
45 9 15
```

```output2
74
```

```input3
2
1 2
50 50
50
```

```output3
150
```