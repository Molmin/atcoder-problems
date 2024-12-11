配点 : $100$ 点

## 問題文

整数 $a, b, c$ が与えられます。$b$ がこれらの整数の中央値であるかどうか判定してください。

## 制約

- $1 \leq a, b, c \leq 100$
- 入力は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $a$ $b$ $c$

## 出力

$b$ が与えられた整数の中央値であるならば `Yes`、そうでないならば `No` と出力せよ。

```input1
5 3 2
```

```output1
Yes
```

与えられた整数を小さい順に並べると $2, 3, 5$ となり、$b$ はこれらの整数の中央値です。

```input2
2 5 3
```

```output2
No
```

$b$ は与えられた整数の中央値ではありません。

```input3
100 100 100
```

```output3
Yes
```