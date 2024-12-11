Score : $600$ points

## Problem Statement

We have a sequence $A$ of $N$ non-negative integers.

Compute the sum of $\prod _{i = 1} ^N \dbinom{B_i}{A_i}$ over all sequences $B$ of $N$ non-negative integers whose sum is at most $M$, and print it modulo ($10^9 + 7$).

Here, $\dbinom{B_i}{A_i}$, the binomial coefficient, denotes the number of ways to choose $A_i$ objects from $B_i$ objects, and is $0$ when $B_i &lt; A_i$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2000$
- $1 \leq M \leq 10^9$
- $0 \leq A_i \leq 2000$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the sum of $\prod _{i = 1} ^N \dbinom{B_i}{A_i}$, modulo $(10^9 + 7)$.

```input1
3 5
1 2 1
```

```output1
8
```

There are four sequences $B$ such that $\prod _{i = 1} ^N \dbinom{B_i}{A_i}$ is at least $1$:

- <p>$B = \{1, 2, 1\}$, where $\prod _{i = 1} ^N \dbinom{B_i}{A_i} = \dbinom{1}{1} \times \dbinom{2}{2} \times \dbinom{1}{1} = 1$;</p>
- <p>$B = \{2, 2, 1\}$, where $\prod _{i = 1} ^N \dbinom{B_i}{A_i} = \dbinom{2}{1} \times \dbinom{2}{2} \times \dbinom{1}{1} = 2$;</p>
- <p>$B = \{1, 3, 1\}$, where $\prod _{i = 1} ^N \dbinom{B_i}{A_i} = \dbinom{1}{1} \times \dbinom{3}{2} \times \dbinom{1}{1} = 3$;</p>
- <p>$B = \{1, 2, 2\}$, where $\prod _{i = 1} ^N \dbinom{B_i}{A_i} = \dbinom{1}{1} \times \dbinom{2}{2} \times \dbinom{2}{1} = 2$.</p>

The sum of these is $1 + 2 + 3 + 2 = 8$.

```input2
10 998244353
31 41 59 26 53 58 97 93 23 84
```

```output2
642612171
```