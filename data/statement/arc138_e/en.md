Score : $1000$ points

## Problem Statement

You are given integers $N$ and $K$.
Let us call an integer sequence $A=(A_1,A_2,\cdots,A_N)$ **good** when it satisfies all of the conditions below.

- $0 \leq A_i \leq i$ ($1 \leq i \leq N$)
- For every integer $v=1,2,\cdots,N$, there is at most one index $i$ such that $A_i=v$.

Find the sum, modulo $(10^9+7)$, of the answers to the following problem for all good sequences $A$.

- Find the number of length-$K$ (not necessarily contiguous) subsequences of $A$ consisting of positive integers that are decreasing. In other words, find the number of sequences of indices $1 \leq i_1 &lt; i_2 &lt; \cdots &lt; i_K \leq N$ such that $A_{i_1} &gt; A_{i_2} &gt; \cdots &gt; A_{i_K} \geq 1$.

## Constraints

- $3 \leq N \leq 5000$
- $2 \leq K$
- $2K-1 \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the answer.

```input1
3 2
```

```output1
1
```

For example, $A=(0,2,1)$ is a good sequence, with one subsequence satisfying the condition.
There are other good sequences such as $A=(0,1,0),(1,2,3),(0,0,0)$, but none of them has subsequences satisfying the condition.
In the end, no good sequence other than $A=(0,2,1)$ has subsequences satisfying the condition, so the answer is $1$.

```input2
6 2
```

```output2
660
```

```input3
10 3
```

```output3
242595
```

```input4
100 10
```

```output4
495811864
```