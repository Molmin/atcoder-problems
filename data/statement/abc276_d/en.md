Score : $400$ points

## Problem Statement

You are given a sequence of positive integers: $A=(a_1,a_2,\ldots,a_N)$.<br>
You can choose and perform one of the following operations any number of times, possibly zero.

- Choose an integer $i$ such that $1 \leq i \leq N$ and $a_i$ is a multiple of $2$, and replace $a_i$ with $\frac{a_i}{2}$.
- Choose an integer $i$ such that $1 \leq i \leq N$ and $a_i$ is a multiple of $3$, and replace $a_i$ with $\frac{a_i}{3}$.

Your objective is to make $A$ satisfy $a_1=a_2=\ldots=a_N$.<br>
Find the minimum total number of times you need to perform an operation to achieve the objective. If there is no way to achieve the objective, print `-1` instead.

## Constraints

- $2 \leq N \leq 1000$
- $1 \leq a_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $\ldots$ $a_N$

## Output

Print the answer.

```input1
3
1 4 3
```

```output1
3
```

Here is a way to achieve the objective in three operations, which is the minimum needed.

- Choose an integer $i=2$ such that $a_i$ is a multiple of $2$, and replace $a_2$ with $\frac{a_2}{2}$. $A$ becomes $(1,2,3)$.
- Choose an integer $i=2$ such that $a_i$ is a multiple of $2$, and replace $a_2$ with $\frac{a_2}{2}$. $A$ becomes $(1,1,3)$.
- Choose an integer $i=3$ such that $a_i$ is a multiple of $3$, and replace $a_3$ with $\frac{a_3}{3}$. $A$ becomes $(1,1,1)$.

```input2
3
2 7 6
```

```output2
-1
```

There is no way to achieve the objective.

```input3
6
1 1 1 1 1 1
```

```output3
0
```