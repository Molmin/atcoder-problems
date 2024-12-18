配点 : $100$ 点

## 問題文

高橋君が $100$ 階建てのビルにいます。

高橋君は $2$ 階分までの上り、または、$3$ 階分までの下りであれば移動には階段を使い、そうでないときエレベーターを使います。

高橋君が $X$ 階から $Y$ 階への移動に使うのは階段ですか？

## 制約

- $1 \leq X,Y \leq 100$
- $X \neq Y$
- 入力は全ては整数である

## 入力

入力は以下の形式で標準入力から与えられる。

> $X$ $Y$

## 出力

移動に使うのが階段ならば `Yes`、エレベーターならば `No` を出力せよ。

```input1
1 4
```

```output1
No
```

$1$ 階から $4$ 階への移動は $3$ 階分の上りなのでエレベーターを使います。

```input2
99 96
```

```output2
Yes
```

$99$ 階から $96$ 階への移動は $3$ 階分の下りなので階段を使います。

```input3
100 1
```

```output3
No
```