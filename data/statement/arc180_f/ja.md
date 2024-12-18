配点 : $1100$ 点

## 問題文

整数 $N,A$ が与えられます．

あなたはこれから以下の操作を行います．

- $0$ 以上 $1$ 以下の実数をランダムに $N$ 個生成する．
すべての生成は独立であり，かつ乱数は一様であるものとする．
- 生成した $N$ 個の実数を小さい順に $x_1,x_2,\cdots,x_N$ と呼ぶ．
つまり，$0 \leq x_1 \leq x_2 \leq \cdots \leq x_N \leq 1$ である．
- ここで，あなたのスコアは次の式の値になる．

$\displaystyle \prod_{i=1}^{N} \left(1+\sum_{j=i+1}^N x_j^A \right)$

スコアの期待値を $\pmod{10^9+7}$ で求めてください．

期待値 $\pmod{10^9+7}$ の定義

求める期待値は必ず有理数になることが証明できます．また，この問題の制約のもとでは，その値を既約分数 $\frac{P}{Q}$ で表した時，$Q \neq 0 \pmod{10^9+7}$ となることも証明できます． よって，$R \times Q \equiv P \pmod{10^9+7}, 0 \leq R &lt; 10^9+7$ を満たす整数 $R$ が一意に定まります． この $R$ を答えてください．

## 制約

- $1 \leq N \leq 10^4$
- $1 \leq A \leq 5 \times 10^4$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$ $A$

## 出力

答えを出力せよ．

```input1
2 1
```

```output1
666666673
```

スコアの期待値は $5/3$ です．

```input2
1 1
```

```output2
1
```

```input3
2 2
```

```output3
500000005
```

```input4
3 2
```

```output4
142857147
```

```input5
5 3
```

```output5
758371066
```

```input6
10000 12345
```

```output6
32201773
```