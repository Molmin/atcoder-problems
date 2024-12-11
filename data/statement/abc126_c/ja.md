配点 : $300$ 点

## 問題文

すぬけ君は $1$ 〜 $N$ の整数が等確率で出る $N$ 面サイコロと表と裏が等確率で出るコインを持っています。すぬけ君は、このサイコロとコインを使って今から次のようなゲームをします。

1. まず、サイコロを $1$ 回振り、出た目を現在の得点とする。
2. 得点が $1$ 以上 $K-1$ 以下である限り、すぬけ君はコインを振り続ける。表が出たら得点は $2$ 倍になり、裏が出たら得点は $0$ になる。
3. 得点が $0$ になった、もしくは $K$ 以上になった時点でゲームが終了する。このとき、得点が $K$ 以上である場合すぬけ君の勝ち、 $0$ である場合すぬけ君の負けである。

$N$ と $K$ が与えられるので、このゲームですぬけ君が勝つ確率を求めてください。

## 制約

- $1 \leq N \leq 10^5$
- $1 \leq K \leq 10^5$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$

## 出力

すぬけ君が勝つ確率を出力せよ。絶対誤差または相対誤差が $10^{-9}$ 以下のとき正解とみなされる。

```input1
3 10
```

```output1
0.145833333333
```

- サイコロの出た目が $1$ のとき、得点が $10$ 以上になるためには、 $4$ 回コインを振って $4$ 連続で表が出る必要があります。この確率は、 $\frac{1}{3} \times (\frac{1}{2})^4 = \frac{1}{48}$ です。
- サイコロの出た目が $2$ のとき、得点が $10$ 以上になるためには、 $3$ 回コインを振って $3$ 連続で表が出る必要があります。この確率は、 $\frac{1}{3} \times (\frac{1}{2})^3 = \frac{1}{24}$ です。
- サイコロの出た目が $3$ のとき、得点が $10$ 以上になるためには、 $2$ 回コインを振って $2$ 連続で表が出る必要があります。この確率は、 $\frac{1}{3} \times (\frac{1}{2})^2 = \frac{1}{12}$ です。

よって、すぬけ君が勝つ確率は、 $\frac{1}{48} + \frac{1}{24} + \frac{1}{12} = \frac{7}{48} \simeq 0.1458333333$ です。

```input2
100000 5
```

```output2
0.999973749998
```