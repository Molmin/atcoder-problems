配点 : $900$ 点

## 問題文

$N$ 人のすぬけ君が $1$ 列に並んでいます。
長さ $N$ の文字列 $S$ が与えられ、前から $i$ 人目のすぬけ君は $S$ の $i$ 文字目が `0` のとき赤いボールを $2$ つ、`1` 
のとき赤いボールと青いボールを $1$ つずつ、`2` のとき青いボールを $2$ つ持っています。

高橋君は最初、空の列を持っています。以下の操作を $2N$ 回繰り返してできる列としてありうるものの個数を $998244353$ で割った
あまりを求めてください。

- ボールを $1$ つ以上持っているすぬけ君は全員同時に、自分が持っているボールの中から $1$ つを選び、前のすぬけ君に渡す。ただし、先頭のすぬけ君は、高橋君に渡す。
- 高橋君は、先頭のすぬけ君から受け取ったボールを、列の末尾に並べる。

## 制約

- $1 \leq |S| \leq 2000$
- $S$ は `0`,`1`,`2` からなる

整数 $N$ は入力では与えられず、文字列 $S$ の長さとして間接的に与えられることに注意せよ。

## 入力

入力は以下の形式で標準入力から与えられる。

> $S$

## 出力

操作を $2N$ 回繰り返してできる列としてありうるものの個数を $998244353$ で割ったあまりを出力せよ。

```input1
02
```

```output1
3
```

前から $i$ 個目に並んだボールの色が赤のとき `r` を、青のとき `b` を $i$ 文字目の文字とした長さ $2N$ の文字列で列を表すことにすれば、
`rrbb`,`rbrb`,`rbbr` が条件を満たします。

```input2
1210
```

```output2
55
```

```input3
12001021211100201020
```

```output3
543589959
```