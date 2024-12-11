配点 : $100$ 点

## 問題文

あなたは、電車とバスを乗り継いで旅行をする計画を立てました。
電車は旅程に沿って通常のきっぷを買うと $A$ 円かかり、乗り放題きっぷを買うと $B$ 円かかります。
バスは旅程に沿って通常のきっぷを買うと $C$ 円かかり、乗り放題きっぷを買うと $D$ 円かかります。

電車およびバスについて通常の切符を買うか乗り放題きっぷを買うかをうまく選んだときの、運賃の合計の最小値を求めてください。

## 制約

- $1 \leq A \leq 1,000$
- $1 \leq B \leq 1,000$
- $1 \leq C \leq 1,000$
- $1 \leq D \leq 1,000$
- 入力値はすべて整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$
> 
> $B$
> 
> $C$
> 
> $D$

## 出力

運賃の合計の最小値を出力せよ。

```input1
600
300
220
420
```

```output1
520
```

電車の通常のきっぷを買うと $600$ 円かかり、乗り放題きっぷを買うと $300$ 円かかります。
よって、電車については乗り放題きっぷを $300$ 円で買うほうが運賃が少なくなります。
一方、バスについては通常の切符を $220$ 円で買うほうが運賃が少なくなります。

したがって、運賃の合計の最小値は $300 + 220 = 520$ 円となります。

```input2
555
555
400
200
```

```output2
755
```

```input3
549
817
715
603
```

```output3
1152
```