配点 : $100$ 点

## 問題文

あるプログラミングコンテストでは、以下のルールに従って参加者に T シャツをプレゼントします。

- 上位 $A$ 位までの参加者は、必ず T シャツが貰える。
- 加えて、上位 $A+1$ 位から $B$ 位までの参加者のうち $C$ 人が一様ランダムに選ばれ、選ばれた参加者は T シャツを貰える。

コンテストには $1000$ 人が参加し、全ての参加者が相異なる順位を取りました。<br>
このコンテストの参加者であるいろはちゃんは、$X$ 位を取りました。<br>
このとき、いろはちゃんが T シャツを貰える確率を求めてください。

## 制約

- 入力はすべて整数
- $1 \le A &lt; B \le 1000$
- $1 \le C \le B-A$
- $1 \le X \le 1000$

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$ $C$ $X$

## 出力

答えを出力せよ。
なお、想定解との絶対誤差または相対誤差が $10^{ - 6}$ 以下であれば、正解として扱われる。

```input1
30 500 20 103
```

```output1
0.042553191489
```

いろはちゃんは $103$ 位を取りました。<br>
$31$ 位から $500$ 位までの $470$ 人の参加者の中から $20$ 人が一様ランダムに選ばれ、ここで選ばれるといろはちゃんは T シャツを貰えます。この確率は $\frac{20}{470}=0.04255319\dots$ です。

```input2
50 500 100 1
```

```output2
1.000000000000
```

いろはちゃんは $1$ 位を取りました。この入力において、いろはちゃんは確実に T シャツを貰えます。

```input3
1 2 1 1000
```

```output3
0.000000000000
```

いろはちゃんは $1000$ 位を取りました。この入力において、いろはちゃんが T シャツを貰えることはありません。