配点 : $100$ 点

## 問題文

髙橋君はサッカーの試合で $N$ 回ペナルティキックを蹴ります。

髙橋君は $i$ 回目のペナルティキックでは、$i$ が $3$ の倍数の場合は失敗しそれ以外の場合は成功します。

髙橋君がペナルティキックを蹴ったときの結果を出力してください。

## 制約

- $1 \leq N \leq 100$
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

髙橋君のペナルティキックの結果を表す長さ $N$ の文字列を出力せよ。結果を表す文字列の $i (1 \leq i \leq N)$ 文字目は髙橋君が $i$ 回目のペナルティキックで成功した場合は `o` 、失敗した場合は `x` とする。

```input1
7
```

```output1
ooxooxo
```

髙橋君は $3$ 回目と $6$ 回目のペナルティキックに失敗するので、$3$ 文字目と $6$ 文字目が `x` となります。

```input2
9
```

```output2
ooxooxoox
```