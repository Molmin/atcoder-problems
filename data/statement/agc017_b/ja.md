配点 : $400$ 点

## 問題文

$N$ 個のマスが一列に並んでいます．
一番左のマスには整数 $A$ が，一番右のマスには整数 $B$ が書かれており，他のマスには何も書かれていません．

青橋君は，何も書かれていないマスに整数を書き込み，次の条件を満たすようにしたいです：

- どの隣接する $2$ マスについても，書かれている整数の差は $C$ 以上 $D$ 以下である．

青橋君は，この条件を満たす限り，いくらでも大きい整数や小さい整数を書き込むことができます．
青橋君が条件を満たすように整数を書き込むことができるかを判定してください．

## 制約

- $3 \leq N \leq 500000$
- $0 \leq A \leq 10^9$
- $0 \leq B \leq 10^9$
- $0 \leq C \leq D \leq 10^9$
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $A$ $B$ $C$ $D$

## 出力

青橋君が条件を満たすように整数を書き込むことができるなら `YES` を，できないなら `NO` を出力せよ．

```input1
5 1 5 2 4
```

```output1
YES
```

例えば，左のマスから順に $1, -1, 3, 7, 5$ となるように整数を書き込めばよいです．

```input2
4 7 6 4 5
```

```output2
NO
```

```input3
48792 105960835 681218449 90629745 90632170
```

```output3
NO
```

```input4
491995 412925347 825318103 59999126 59999339
```

```output4
YES
```