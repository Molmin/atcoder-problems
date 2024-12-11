Score : $1800$ points

## Problem Statement

In the following undirected graph, count the number of walks from $S$ to $S$ that pass through the edges $ST$, $TU$, $UV$, $VS$ (in any direction) exactly $a$, $b$, $c$, $d$ times, respectively, modulo $998,244,353$.

![](https://img.atcoder.jp/agc051/48a379ab79ee4edf503b84c8b7984d50.png)

## Notes

A walk from $S$ to $S$ is a sequence of vertices $v_0 = S, v_1, \ldots, v_k = S$ such that for each $i (0 \leq i &lt; k)$, there is an edge between $v_i$ and $v_{i+1}$.
Two walks are considered distinct if they are distinct as sequences.

## Constraints

- $1 \leq a, b, c, d \leq 500,000$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $a$ $b$ $c$ $d$

## Output

Print the answer.

```input1
2 2 2 2
```

```output1
10
```

There are $10$ walks that satisfy the condition.
One example of such a walk is 
$S$ $\rightarrow$ $T$ $\rightarrow$ $U$ $\rightarrow$ $V$ $\rightarrow$ $U$ $\rightarrow$ $T$ $\rightarrow$ $S$ $\rightarrow$ $V$ $\rightarrow$ $S$.

```input2
1 2 3 4
```

```output2
0
```

```input3
470000 480000 490000 500000
```

```output3
712808431
```