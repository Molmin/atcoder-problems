配点 : $1200$ 点

## 問題文

正の整数 $N$ が与えられるので，次の条件を満たす$\{1,2,\ldots,N\}$ の部分集合 $S$ の個数を $998244353$ で割ったあまりを求めてください．

- $N$ 以下の正の整数はすべて $S$ のいくつかの相異なる要素の和として表せる．さらに，そのような表し方は高々 $2$ 通りである．

## 制約

- $1 \leq N \leq 1500$

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$

## 出力

答えを出力せよ．

```input1
3
```

```output1
2
```

$\{1,2\}$ と $\{1,2,3\}$ が条件を満たす部分集合です．

```input2
5
```

```output2
5
```

```input3
1000
```

```output3
742952024
```