Score : $650$ points

## Problem Statement

There is a rooted tree with $N + 1$ vertices numbered from $0$ to $N$. Vertex $0$ is the root, and the parent of vertex $i$ is vertex $p_i$.<br>
One of the vertices among vertex $1$, vertex $2$, ..., vertex $N$ hides a treasure. The probability that the treasure is at vertex $i$ is $\frac{a_i}{\sum_{j=1}^N a_j}$.
Also, each vertex is in one of the two states: "searched" and "unsearched". Initially, vertex $0$ is searched, and all other vertices are unsearched.<br>
Until the vertex containing the treasure becomes searched, you perform the following operation:

- Choose an unsearched vertex whose parent is searched, and mark it as searched.

Find the expected number of operations required when you act to minimize the expected number of operations, modulo $998244353$.

You are given $T$ test cases; solve each of them.

How to find an expected value modulo $998244353$

It can be proved that the expected value is always a rational number. Under the constraints of this problem, it can also be proved that when the expected value is expressed as an irreducible fraction $\frac{P}{Q}$, we have $Q \not\equiv 0 \pmod{998244353}$. In this case, there is a unique integer $R$ satisfying $R \times Q \equiv P \pmod{998244353},\ 0 \leq R &lt; 998244353$. Report this $R$.

## Constraints

- $1 \leq T \leq 2 \times 10^5$
- $1 \leq N \leq 2 \times 10^5$
- $0 \leq p_i &lt; i$
- $1 \leq a_i$
- $\sum_{i=1}^N a_i \leq 10^8$
- The sum of $N$ over all test cases is at most $2 \times 10^5$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format. Here, $\mathrm{case}_i$ denotes the $i$-th test case.

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each test case is given in the following format:

> $N$
> 
> $p_1$ $p_2$ $\dots$ $p_N$
> 
> $a_1$ $a_2$ $\dots$ $a_N$

## Output

Print $T$ lines. The $i$-th line should contain the answer for the $i$-th test case.

```input1
3
3
0 0 1
1 2 3
5
0 1 0 0 0
8 6 5 1 7
10
0 1 1 3 3 1 4 7 5 4
43 39 79 48 92 90 76 30 16 30
```

```output1
166374061
295776107
680203339
```

In the first test case, the expected number of operations is $\frac{13}{6}$.