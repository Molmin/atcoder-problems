配点 : $1800$ 点

## 問題文

$N$ 頂点の木 $T$ があります。
頂点には $1$ から $N$ までの番号が振られています。
各 $1 \leq i \leq N - 1$ について、$i$ 番目の辺は頂点 $a_i$ と頂点 $b_i$ を繋いでいます。

すぬけ君は、$T$ のすべての辺をそれぞれ好きな向きに向き付け、有向グラフ $T'$ を作ろうとしています。
($T'$ は $2^{N - 1}$ 通りありえます。)

$T'$ をひとつ固定したとき、各 $1 \leq s,\ t \leq N$ について $d(s,\ t)$ を次のように定義します。

- $d(s,\ t) =$(頂点 $s$ から頂点 $t$ までのパスに沿って $T'$ 上を移動するとき、辺の向きと逆向きに通るような辺の本数)

特に、各 $1 \leq s \leq N$ について $d(s,\ s) = 0$ です。
また、一般に $d(s,\ t) \neq d(t,\ s)$ であることに注意してください。

さらに、$D$ を次のように定義します。

![3d2f3f88e8fa23f065c04cd175c14ebf.png](https://atcoder.jp/img/mujin/3d2f3f88e8fa23f065c04cd175c14ebf.png)

すぬけ君は、$D$ が最小値をとるように $T'$ を作ろうとしています。
$D$ が最小値をとるような $T'$ は何通りありうるでしょうか？
$10^9 + 7$ で割った余りを求めてください。

## 制約

- $2 \leq N \leq 1000$
- $1 \leq a_i,\ b_i \leq N$
- 入力のグラフは木である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $:$
> 
> $a_{N - 1}$ $b_{N - 1}$

## 出力

$D$ が最小値をとるような $T'$ は何通りありうるか？
$10^9 + 7$ で割った余りを出力せよ。

```input1
4
1 2
1 3
1 4
```

```output1
2
```

$D$ の最小値は $1$ です。
$D$ が最小値をとるような $T'$ は、次図の $2$ 通りです。

![](https://atcoder.jp/img/mujin/de49901ddf69d8565fde5b6870afb595.png)

```input2
4
1 2
2 3
3 4
```

```output2
6
```

$D$ の最小値は $2$ です。
$D$ が最小値をとるような $T'$ は、次図の $6$ 通りです。

![](https://atcoder.jp/img/mujin/dcb377e8c7fe15d6dd0cb815dc57c41a.png)

```input3
6
1 2
1 3
1 4
2 5
2 6
```

```output3
14
```

```input4
10
2 4
2 5
8 3
10 7
1 6
2 8
9 5
8 6
10 6
```

```output4
102
```