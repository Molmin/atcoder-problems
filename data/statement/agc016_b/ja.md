配点 : $700$ 点

## 問題文

$N$ 匹の猫がいます。
猫には $1$ から $N$ まで番号が振られています。

各猫はある色の帽子を被っています。
猫 $i$ は「自分を除く $N-1$ 匹の猫が被っている帽子の色の種類数はちょうど $a_i$ である」と言っています。

すべての猫の発言と矛盾しないような帽子の色の組合せが存在するか判定してください。

## 制約

- $2 \leq N \leq 10^5$
- $1 \leq a_i \leq N-1$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## 出力

すべての猫の発言と矛盾しないような帽子の色の組合せが存在するならば、`Yes` を出力せよ。
存在しないならば、`No` を出力せよ。

```input1
3
1 2 2
```

```output1
Yes
```

例えば、猫 $1$, $2$, $3$ の帽子の色がそれぞれ赤、青、青ならば、すべての猫の発言と矛盾しません。

```input2
3
1 1 2
```

```output2
No
```

猫 $1$ の発言から、猫 $2$, $3$ の帽子の色は同一です。
また、猫 $2$ の発言から、猫 $1$, $3$ の帽子の色は同一です。
よって、猫 $1$, $2$ の帽子の色は同一ですが、これは猫 $3$ の発言に矛盾します。

```input3
5
4 3 4 3 4
```

```output3
No
```

```input4
3
2 2 2
```

```output4
Yes
```

```input5
4
2 2 2 2
```

```output5
Yes
```

```input6
5
3 3 3 3 3
```

```output6
No
```