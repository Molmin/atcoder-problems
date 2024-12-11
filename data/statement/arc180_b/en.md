Score : $600$ points

## Problem Statement

You are given a permutation $P=(P_1,P_2,\cdots,P_N)$ of $(1,2,\cdots,N)$. 
Additionally, you are given an integer $K$.

You can perform the following operation zero or more times:

- Choose integers $l$ and $r$ ($1 \leq l &lt; r \leq N$). Here, the pair $(l,r)$ must satisfy all of the following conditions:-   - $K \leq r-l$.
-   - $P_l &amp;gt; P_r$ at the time of the operation.
-   - The pair $(l,r)$ has never been chosen before.
- Then, swap the values of $P_l$ and $P_r$.

You want to maximize the number of operations. 
Find one way to achieve this.

## Constraints

- $2 \leq N \leq 500$
- $1 \leq K \leq N-1$
- $(P_1,P_2,\cdots,P_N)$ is a permutation of $(1,2,\cdots,N)$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\cdots$ $P_N$

## Output

Print the answer in the following format:

> $m$
> 
> $l_1$ $r_1$
> 
> $l_2$ $r_2$
> 
> $\vdots$
> 
> $l_m$ $r_m$

Here, $m$ is the maximum number of operations, and $l_i$ and $r_i$ are the values of $l$ and $r$ chosen in the $i$-th operation, respectively.
If multiple solutions exist, you can print any of them.

```input1
3 1
3 2 1
```

```output1
3
2 3
1 3
1 2
```

In this example, the maximum number of operations is $3$.
The operations in the sample output proceed as follows:

- 1st operation: Choose $(l,r)=(2,3)$. We have $1 \leq 3-2$ and $P_2 &gt; P_3$, and $(2,3)$ has not been chosen before, so the conditions are satisfied. Swap $P_2$ and $P_3$, resulting in $P=(3,1,2)$.
- 2nd operation: Choose $(l,r)=(1,3)$. We have $1 \leq 3-1$ and $P_1 &gt; P_3$, and $(1,3)$ has not been chosen before, so the conditions are satisfied. Swap $P_1$ and $P_3$, resulting in $P=(2,1,3)$.
- 3rd operation: Choose $(l,r)=(1,2)$. We have $1 \leq 2-1$ and $P_1 &gt; P_2$, and $(1,2)$ has not been chosen before, so the conditions are satisfied. Swap $P_1$ and $P_2$, resulting in $P=(1,2,3)$.

```input2
5 4
1 4 3 2 5
```

```output2
0
```

```input3
4 2
4 1 2 3
```

```output3
2
1 4
1 3
```

```input4
10 5
8 7 6 10 9 3 1 5 2 4
```

```output4
15
3 8
2 8
3 10
3 9
1 8
2 10
2 9
2 7
1 10
5 10
1 9
4 10
4 9
1 7
1 6
```