Score : $1000$ points

## Problem Statement

Find the number of pairs $(P,Q)=((P_1,P_2,\cdots,P_N),(Q_1,Q_2,\cdots,Q_N))$ of permutations of $(1,2,\cdots,N)$ that satisfy the following condition, modulo $998244353$.

- For every $i$ ($1 \leq i \leq N-1$), one of the two conditions below holds.-   - $P_i &amp;lt; P_{i+1}$ and $Q_i &amp;lt; Q_{i+1}$.
-   - $P_i &amp;gt; P_{i+1}$ and $Q_i &amp;gt; Q_{i+1}$.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- All numbers in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
2
```

```output1
2
```

Two pairs, $(P,Q)=((1,2),(1,2))$ and $(P,Q)=((2,1),(2,1))$, satisfy the condition.

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