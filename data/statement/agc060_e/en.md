Score : $1400$ points

## Problem Statement

In this problem, a permutation of $(1,2,\cdots,N)$ is occasionally called just a permutation.

For a permutation $a=(a_1,a_2,\cdots,a_N)$, let $f(a)$ be the number of cycles in $a$.
More accurately, the value of $f(a)$ is defined as follows.

- Consider an undirected graph consisting of $N$ vertices numbered $1$ to $N$.
For each $1 \leq i \leq N$, add an edge connecting vertex $i$ and vertex $a_i$.
Then, let $f(a)$ be the number of connected components in this graph.

You are given a permutation $P=(P_1,P_2,\cdots,P_N)$ and an integer $K$.
Determine whether there is a permutation $x$ that satisfies the following condition, and construct one if it exists.

- Let $y_i=P_{x_i}$ to define a permutation $y$.
- Then, $f(x)+f(y)=K$ holds.

For each input file, solve $T$ test cases.

## Constraints

- $1 \leq T \leq 10^5$
- $2 \leq N \leq 2 \times 10^5$
- $2 \leq K \leq 2N$
- $(P_1,P_2,\cdots,P_N)$ is a permutation of $(1,2,\cdots,N)$.
- In each input file, the sum of $N$ does not exceed $2 \times 10^5$.
- All numbers in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each case is in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\cdots$ $P_N$

## Output

For each case, if no permutation $x$ satisfies the condition, print `No`. Otherwise, print your answer in the following format:

> Yes
> 
> $x_1$ $x_2$ $\cdots$ $x_N$

Each character in `Yes` or `No` in the output may be either uppercase or lowercase.
If multiple solutions exist, any of them will be accepted.

```input1
3
3 3
1 3 2
2 2
2 1
4 8
1 2 3 4
```

```output1
Yes
2 1 3
No
Yes
1 2 3 4
```

In the first case, letting $x=(2,1,3)$ makes $y=(3,1,2)$, satisfying $f(x)+f(y)=2+1=3$.