配点 : $100$ 点

## 問題文

高橋君は AtCoder Land を目指しています。
目の前に看板が置かれているので、ここが AtCoder Land であるかどうか判定したいです。

文字列 $S,T$ が空白区切りで与えられます。
$S=$ `AtCoder` かつ $T=$ `Land` であるかどうか判定してください。

## 制約

- $S,T$ は英大小文字からなる長さ $1$ 以上 $10$ 以下の文字列

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$ $T$

## 出力

$S=$ `AtCoder` かつ $T=$ `Land` であるならば `Yes` を、そうでないならば `No` を出力せよ。

```input1
AtCoder Land
```

```output1
Yes
```

$S=$ `AtCoder` かつ $T=$ `Land` です。

```input2
CodeQUEEN Land
```

```output2
No
```

$S=$ `AtCoder` ではありません。

```input3
aTcodeR lANd
```

```output3
No
```

大文字と小文字は区別します。