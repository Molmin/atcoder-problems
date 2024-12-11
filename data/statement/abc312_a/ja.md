配点 : $100$ 点

## 問題文

英大文字からなる長さ $3$ の文字列 $S$ が与えられます。$S$ が `ACE`、`BDF`、`CEG`、`DFA`、`EGB`、`FAC`、`GBD` のいずれかと等しいとき `Yes` を、そうでないとき `No` を出力してください。

## 制約

- $S$ は英大文字からなる長さ $3$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

$S$ が `ACE`、`BDF`、`CEG`、`DFA`、`EGB`、`FAC`、`GBD` のいずれかと等しいとき `Yes` を、そうでないとき `No` を出力せよ。

```input1
ABC
```

```output1
No
```

$S =$ `ABC` のとき、$S$ は `ACE`、`BDF`、`CEG`、`DFA`、`EGB`、`FAC`、`GBD` のいずれとも等しくないので `No` を出力します。

```input2
FAC
```

```output2
Yes
```

```input3
XYX
```

```output3
No
```