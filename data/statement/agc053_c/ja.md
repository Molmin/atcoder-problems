配点 : $900$ 点

## 問題文

$2N$ 枚のカードがあり、それぞれには $1$ から $2N$ までの番号が付いています。
このカードを用いて行う、次のゲームを考えます。

まず、ディーラーはそれぞれの山が $N$ 枚のカードからなるように、カードを $2$ つの山にランダムに分けます。
このとき、ディーラーは各山におけるカードの順序もランダムに定めます。
その後プレイヤーは、一方の山が空になるまで次の操作を繰り返し行い、最終的な操作回数がこのゲームのスコアとなります。

- ある正の整数 $k$ を選び、一方の山の上から $k$ 枚目のカードと、もう一方の山の上から $k$ 枚目のカードを比較する。（ただし、$k$ は各山のカード枚数を超えてはいけない。）そして、番号が小さい方のカードをそのカードを含む山から取り除く。

このゲームを* チーター *がプレイするとします。
つまり、各山の各カードの番号を常に把握できるプレイヤーがプレイするとします。
このプレイヤーがスコアを最小化するよう最適にプレイしたときの、スコアの期待値を $\bmod 10^9+7$ で求めてください（注記参照）。

## 注記

- 求める期待値は有理数となります。期待値を分数 $\frac{y}{x}$（$x$ と $y$ は互いに素な正の整数）で表したとき、$x$ は $P=10^9+7$ と互いに素になるので、
$xz \equiv y \pmod P$ なる $0$ 以上 $P-1$ 以下の唯一の整数 $z$ を出力してください。

## 制約

- $1 \leq N \leq 10^6$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

答えを出力せよ。

```input1
1
```

```output1
1
```

```input2
3
```

```output2
486111118
```