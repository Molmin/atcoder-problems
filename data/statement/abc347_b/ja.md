配点 : $200$ 点

## 問題文

英小文字からなる文字列 $S$ が与えられます。$S$ の空でない部分文字列は何種類ありますか？

ただし、部分文字列とは連続する部分列のことを指します。例えば、`xxx` は `yxxxy` の部分文字列ですが、`xxyxx` の部分文字列ではありません。

## 制約

- $S$ は英小文字からなる長さ $1$ 以上 $100$ 以下の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

答えを出力せよ。

```input1
yay
```

```output1
5
```

$S$ の空でない部分文字列は以下の $5$ 種類です。

- `a`
- `y`
- `ay`
- `ya`
- `yay`

```input2
aababc
```

```output2
17
```

```input3
abracadabra
```

```output3
54
```