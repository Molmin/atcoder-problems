Score : $800$ points

## Problem Statement

You are given two sequences, each of length $N$, consisting of non-negative integers: $A=(A_1,A_2,\ldots,A_{N})$ and $B=(B_1,B_2,\ldots,B_{N})$.

Determine whether it is possible to make $A$ equal to $B$ by performing the operation below at most $70000$ times. If it is possible, present a specific sequence of operations that achieves it.

- Choose an integer $K\ (1\le K \le N)$. For every integer $i\ (2\leq i \leq K)$, simultaneously replace the value of $A_i$ with $A_{i-1} \oplus A_i$.

Here, $\oplus$ denotes bitwise $\mathrm{XOR}$.

What is bitwise $\mathrm{XOR}$?

The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$, $A\oplus B$, is defined as follows:

- When $A\oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of the digits in that place of $A$ and $B$ are $1$, and $0$ otherwise.

For example, $3\oplus 5 = 6$ (in base two: $011\oplus 101 = 110$).

## Constraints

- $2 \leq N \leq 1000$
- $0 \leq A_i, B_i &lt; 2^{60}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$

## Output

If it is impossible to make $A$ equal to $B$ in at most $70000$ operations, print `No`. If it is possible, print a sequence of operations that achieves it in the following format, where $M$ is the number of operations, and $K_i$ is the integer chosen in the $i$-th operation:

> Yes
> 
> $M$
> 
> $K_1$ $K_2$ $\ldots$ $K_M$

If multiple solutions exist, any of them will be accepted.

```input1
3
1 2 0
1 2 3
```

```output1
Yes
2
2 3
```

In this output, the sequence $A$ is changed as follows:

- Initially: $A=(1, 2, 0)$.
- After the $1$-st operation: $A=(1, 3, 0)$.
- After the $2$-nd operation: $A=(1, 2, 3)$.

After the two operations, $A$ and $B$ are equal, achieving the objective.

```input2
2
10 100
1 0
```

```output2
No
```

```input3
2
1152921504606846975 0
1152921504606846975 0
```

```output3
Yes
0
```