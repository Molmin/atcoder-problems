Score : $200$ points

## Problem Statement

You are given sequences of length $N$ each: $A = (A_1, A_2, A_3, \dots, A_N)$ and $B = (B_1, B_2, B_3, \dots, B_N)$.<br>
Find the number of integers $x$ satisfying the following condition:

- $A_i \le x \le B_i$ holds for every integer $i$ such that $1 \le i \le N$.

## Constraints

- $1 \le N \le 100$
- $1 \le A_i \le B_i \le 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $B_3$ $\dots$ $B_N$

## Output

Print the answer.

```input1
2
3 2
7 5
```

```output1
3
```

$x$ must satisfy both $3 \le x \le 7$ and $2 \le x \le 5$.<br>
There are three such integers: $3$, $4$, and $5$.

```input2
3
1 5 3
10 7 3
```

```output2
0
```

There may be no integer $x$ satisfying the condition.

```input3
3
3 2 5
6 9 8
```

```output3
2
```