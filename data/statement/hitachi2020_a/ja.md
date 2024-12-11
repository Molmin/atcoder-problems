配点 : $100$ 点

## 問題文

文字列 `hi` が $1$ 個以上繋がってできる文字列を、 hitachi文字列 と定義します。

例えば、 `hi` や `hihi` などは hitachi文字列 であり、 `ha` や `hii` は hitachi文字列 ではありません。

文字列 $S$ が与えられるので、 $S$ が hitachi文字列 かどうかを判定してください。

## 制約

- $S$ の長さは $1$ 以上 $10$ 以下
- $S$ は英小文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

$S$ が hitachi文字列 であれば `Yes` を、そうでなければ `No` を出力せよ。

```input1
hihi
```

```output1
Yes
```

`hihi` は `hi` を $2$ 個繋げてできる文字列なので、 hitachi文字列です。

```input2
hi
```

```output2
Yes
```

```input3
ha
```

```output3
No
```