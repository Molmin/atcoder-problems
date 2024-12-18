配点 : $100$ 点

## 問題文

明日の入学試験に合格するために、太郎くんはあと $T$ 時間の勉強をする必要があります。

幸いにも、彼は今いる世界(世界A)の $X$ 倍の速度で時間が進む世界Bへ世界跳躍(ワールドリープ)することができます。

世界Bで $(X \times t)$ 時間進むと、世界Aでは $t$ 時間進みます。

世界Bで $T$ 時間勉強したとき、世界Aでは何時間進んでいるでしょうか。

## 制約

- 入力は全て整数である。
- $1 \leq T \leq 100$
- $1 \leq X \leq 100$

## 入力

入力は以下の形式で標準入力から与えられる。

> $T$ $X$

## 出力

世界Aでは何時間進んでいるかを出力せよ。

なお、想定解答との絶対誤差または相対誤差が $10^{-3}$ 以下であれば正解として扱われる。

```input1
8 3
```

```output1
2.6666666667
```

$3$ 倍の速度で時間が進む世界Bで $8$ 時間勉強すると世界Aでは $2.6666...$ 時間進んでいます。

$10^{-3}$ 以下の絶対誤差・相対誤差が許容されることに注意してください。

```input2
99 1
```

```output2
99.0000000000
```

```input3
1 100
```

```output3
0.0100000000
```