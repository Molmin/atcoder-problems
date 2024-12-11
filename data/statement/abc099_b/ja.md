配点 : $200$ 点

## 問題文

ある村には、高さ $1,(1+2),(1+2+3),...,(1+2+3+...+999)$ メートルの $999$ 本の塔が、西から順に $1$ メートル間隔で立っています。

長く降り続けた雪がようやく収まったので、まだ雪に完全には埋もれていない、互いに $1$ メートル離れたある $2$ つの塔の、雪に埋もれていない部分の高さを測ったところ、西側の塔は $a$ メートル、東側の塔は $b$ メートルでした。

積雪量と標高が村内のどこでも等しいと仮定したとき、雪が何メートル積もっているか求めてください。

ただし、雪は必ず $1$ メートル以上積もっているものとします。

## 制約

- $1 \leq a &lt; b &lt; 499500(=1+2+3+...+999)$
- 入力は全て整数
- 仮定が成り立たない入力は与えられない

## 入力

入力は以下の形式で標準入力から与えられる。

> $a$ $b$

## 出力

雪が $x$ メートル積もっているとき、$x$ を整数で出力せよ。

```input1
8 13
```

```output1
2
```

$2$ 本の塔の高さはそれぞれ $10$ メートルと $15$ メートルです。
よって、雪が $2$ メートル積もっているとわかります。

```input2
54 65
```

```output2
1
```