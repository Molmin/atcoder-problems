Score : $1100$ points

## Problem Statement

PCT-kun created the following problem.

    **Increasing Problem**
    

You are given a length-$N$ sequence of non-negative integers $A_1,A_2,\dots,A_N$. You can perform the following operation any number of times (possibly zero).

    

- Choose an integer $i$ such that $1 \le i \le N$, and increase or decrease $A_i$ by $1$.

    

Your goal is to make $A$ non-decreasing. Find the minimum number of operations required to achieve this goal.

Thinking that this problem is too easy to be placed at the end of the contest, PCT-kun has revised it as follows.

    **Many Increasing Problems**
    

There are $M^N$ integer sequences $A$ of length $N$ where all elements are between $1$ and $M$, inclusive. Find the sum of the answers to **Increasing Problem** for all those sequences, modulo $998244353$.

Solve **Many Increasing Problems**.

## Constraints

- $1 \le N,M \le 10^5$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer to **Many Increasing Problems**.

```input1
2 2
```

```output1
1
```

Let us solve **Increasing Problem** for all sequences of length $2$ where all elements are between $1$ and $2$, inclusive.

- For $A=(1,1)$, the answer is $0$.
- For $A=(1,2)$, the answer is $0$.
- For $A=(2,1)$, the answer is $1$.
- For $A=(2,2)$, the answer is $0$.

Therefore, the final answer is $0+0+1+0=1$.

```input2
6 4
```

```output2
14668
```

```input3
163 702
```

```output3
20728656
```

```input4
98765 99887
```

```output4
103564942
```