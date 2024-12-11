配点 : $100$ 点

## 問題文

英小文字からなる文字列 $S$ が与えられます。<br>
$S$ から `a`, `e`, `i`, `o`, `u` をすべて取り除いて得られる文字列を出力してください。<br>
なお、$S$ は `a`, `e`, `i`, `o`, `u` 以外の文字を一つ以上含みます。

## 制約

- $S$ は英小文字からなる長さ $1$ 以上 $100$ 以下の文字列
- $S$ は `a`, `e`, `i`, `o`, `u` 以外の文字を一つ以上含む

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

答えを出力せよ。

```input1
atcoder
```

```output1
tcdr
```

$S =$ `atcoder` のとき、$1, 4, 6$ 文字目を取り除いて `tcdr` を得ます。

```input2
xyz
```

```output2
xyz
```

```input3
aaaabbbbcccc
```

```output3
bbbbcccc
```