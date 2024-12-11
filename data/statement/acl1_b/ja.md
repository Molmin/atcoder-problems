配点 : $600$ 点

## 問題文

整数 $N$ が与えられます．
正の整数 $k$ であって，$(1+2+\cdots+k)$ が $N$ の倍数になるもののうち，
最小のものを求めてください．
なお，このような正の整数 $k$ が必ず存在することは証明できます．

## 制約

- $1 \leq N \leq 10^{15}$
- 入力は全て整数である．

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$

## 出力

答えを一行に出力せよ．

```input1
11
```

```output1
10
```

$1+2+\cdots+10=55$ であり，これは確かに $N=11$ の倍数です．
$k \leq 9$ で条件を満たすものは存在しないため，$k=10$ が答えになります．

```input2
20200920
```

```output2
1100144
```