配点 : $200$ 点

## 問題文

整数または小数 $X$ が与えられるので、小数点以下を切り捨てて整数で出力してください。  

## 制約

- $0 \le X \le 10^{100}$
- $X$ は整数、または小数点以下が $100$ 桁以下の小数であり、先頭に余計な $0$ は付かない

## 入力

入力は以下の形式で標準入力から与えられる。

> $X$

## 出力

$X$ を、小数点以下を切り捨てて整数の形式で出力せよ。  

```input1
5.90
```

```output1
5
```

$5.90$ の小数点以下を切り捨てた $5$ を整数で出力します。整数の形式でない `5.0` などは不正解になります。  

```input2
0
```

```output2
0
```

$X$ は小数点を含まないかもしれません。  

```input3
84939825309432908832902189.9092309409809091329
```

```output3
84939825309432908832902189
```

大きい数の扱いに注意してください。