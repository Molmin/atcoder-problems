配点 : $1000$ 点

## 問題文

$(1,2,\cdots,N)$ の順列のペア $(P,Q)=((P_1,P_2,\cdots,P_N),(Q_1,Q_2,\cdots,Q_N))$ であって，次の条件を満たすものの個数を $998244353$ で割ったあまりを求めてください．

- すべての $i$ ($1 \leq i \leq N-1$) について，以下のいずれかの条件が成り立つ．-   - $P_i &amp;lt; P_{i+1}$ かつ $Q_i &amp;lt; Q_{i+1}$
-   - $P_i &amp;gt; P_{i+1}$ かつ $Q_i &amp;gt; Q_{i+1}$

## 制約

- $2 \leq N \leq 2 \times 10^5$
- 入力される数はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$

## 出力

答えを出力せよ．

```input1
2
```

```output1
2
```

$(P,Q)=((1,2),(1,2))$ と $(P,Q)=((2,1),(2,1))$ の $2$ つが条件を満たします．

```input2
3
```

```output2
10
```

```input3
4
```

```output3
88
```

```input4
10
```

```output4
286574791
```