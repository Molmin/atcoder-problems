配点 : $200$ 点

## 問題文

$N$ 行 $M$ 列のマス目があり、最初は全てのマスが白いです。

各行各列には $1$ つずつボタンがあります。
ある行のボタンを押すと、その行のマスの色が全て反転します。すなわち、白なら黒、黒なら白に色が変わります。
また、ある列のボタンを押すと、その列のマスの色が全て反転します。

高橋君は、ボタンを押す操作を好きな回数行うことができます。黒く塗られたマスの個数をちょうど $K$ 個にすることができるかどうか判定してください。

## 制約

- $1 \leq N,M \leq 1000$
- $0 \leq K \leq NM$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $M$ $K$

## 出力

黒く塗られたマスの個数をちょうど $K$ 個にできるなら `Yes` を、そうでないなら `No` を出力せよ。

```input1
2 2 2
```

```output1
Yes
```

$1$ 行目、 $1$ 列目の順にボタンを押せばよいです。

```input2
2 2 1
```

```output2
No
```

```input3
3 5 8
```

```output3
Yes
```

$1$ 列目、$3$ 列目、$2$ 行目、$5$ 列目の順にボタンを押せばよいです。

```input4
7 9 20
```

```output4
No
```