配点 : $200$ 点

## 問題文

すぬけ君は $A$ 以上 $B$ 以下の整数が好きです。
高橋君は $C$ 以上 $D$ 以下の整数が好きです。

どちらも好きな整数は存在しますか？

## 制約

- $0 \leq A \leq B \leq 10^{18}$
- $0 \leq C \leq D \leq 10^{18}$
- 入力は全て整数である。

## 入力

入力は以下の形式で標準入力から与えられる。

> $A$ $B$ $C$ $D$

## 出力

`Yes` または `No` と出力せよ。

```input1
10 30 20 40
```

```output1
Yes
```

たとえば、どちらも $25$ が好きです。

```input2
10 20 30 40
```

```output2
No
```