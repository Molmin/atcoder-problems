配点 : $200$ 点

## 問題文

整数 $N$ が与えられます。<br>
以下の操作を $K$ 回行った後の整数 $N$ を出力してください。

- 整数 $N$ が $200$ の倍数であれば、$N$ を $200$ で割る。
- そうでなければ、整数 $N$ を、$N$ の後ろに文字列として $200$ を付け加えた整数に置き換える。-   - 例えば、$7$ を置き換えると $7200$ に、$1234$ を置き換えると $1234200$ になります。

## 制約

- 入力は全て整数
- $1 \le N \le 10^5$
- $1 \le K \le 20$

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $K$

## 出力

答えを整数として出力せよ。

```input1
2021 4
```

```output1
50531
```

$N=2021$ に $4$ 回操作を行うと、$N$ の値は操作を行うごとに $2021 \rightarrow 2021200 \rightarrow 10106 \rightarrow 10106200 \rightarrow 50531$ となります。

```input2
40000 2
```

```output2
1
```

```input3
8691 20
```

```output3
84875488281
```

答えは $32$ bit 符号付き整数型に収まらない可能性があります。