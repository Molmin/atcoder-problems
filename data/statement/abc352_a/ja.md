配点 : $100$ 点

## 問題文

鉄道の AtCoder 線には $N$ 個の駅があり、それぞれ $1, 2, \ldots, N$ の番号が付けられています。

AtCoder 線では、駅 $1$ を始発駅として駅 $2, 3, \ldots, N$ の順に各駅に停車する**上り列車**および、駅 $N$ を始発駅として駅 $N - 1, N - 2, \ldots, 1$ の順に各駅に停車する**下り列車**が運行されています。

高橋君は AtCoder 線の上り列車あるいは下り列車の一方のみを使うことで駅 $X$ から駅 $Y$ まで移動しようとしています。

この移動の間に高橋君が乗っている電車が駅 $Z$ に停車することがあるか判定してください。

## 制約

- $3 \leq N \leq 100$
- $1 \leq X, Y, Z \leq N$
- $X, Y, Z$ は相異なる
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $X$ $Y$ $Z$

## 出力

駅 $X$ から駅 $Y$ への移動の間に高橋君が乗っている電車が駅 $Z$ に停車することがあるならば `Yes` を、そうでないならば `No` を出力せよ。

```input1
7 6 1 3
```

```output1
Yes
```

駅 $6$ から駅 $1$ に移動するためには下り列車に乗車します。

駅 $6$ を出発し、駅 $5, 4, 3, 2, 1$ の順に停車するため移動の間に電車が駅 $3$ に停車することがあり、`Yes` を出力します。

```input2
10 3 2 9
```

```output2
No
```

```input3
100 23 67 45
```

```output3
Yes
```