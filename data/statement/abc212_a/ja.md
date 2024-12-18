配点 : $100$ 点

## 問題文

高橋くんは $A$ グラムの純金と $B$ グラムの純銀 $(0 \leq A,B,\ 0 \lt A+B)$ をよく溶かした上で混ぜ合わせ、新たな金属を生成しました。

生成された金属は「純金」「純銀」「合金」のいずれでしょうか？

なお、生成された金属は

- $0 \lt A$ かつ $B=0$ なら「純金」
- $A=0$ かつ $0 \lt B$ なら「純銀」
- $0 \lt A$ かつ $0 \lt B$ なら「合金」

であるとみなします。

## 制約

- $0 \leq A,B \leq 100$
- $0 \lt A+B$
- $A,B$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$

## 出力

生成された金属が「純金」なら `Gold` と、「純銀」なら `Silver` と、「合金」なら `Alloy` と出力せよ。

```input1
50 50
```

```output1
Alloy
```

$0 \lt A$ かつ $0 \lt B$ であるため、生成された金属は「合金」です。

```input2
100 0
```

```output2
Gold
```

$0 \lt A$ かつ $B=0$ であるため、生成された金属は「純金」です。

```input3
0 100
```

```output3
Silver
```

$A=0$ かつ $0 \lt B$ であるため、生成された金属は「純銀」です。

```input4
100 2
```

```output4
Alloy
```