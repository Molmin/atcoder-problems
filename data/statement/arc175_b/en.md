Score: $400$ points

## Problem Statement

You are given a string $S$ of length $2N$ consisting of the characters `(` and `)`. Let $S_i$ denote the $i$-th character from the left of $S$.

You can perform the following two types of operations zero or more times in any order:

- <p>Choose a pair of integers $(i,j)$ such that $1\leq i &lt; j \leq 2N$. Swap $S_i$ and $S_j$. The cost of this operation is $A$.</p>
- <p>Choose an integer $i$ such that $1\leq i \leq 2N$. Replace $S_i$ with `(` or `)`. The cost of this operation is $B$.</p>

Your goal is to make $S$ a correct parenthesis sequence. Find the minimum total cost required to achieve this goal. It can be proved that the goal can always be achieved with a finite number of operations.

What is a correct parenthesis sequence?

A correct parenthesis sequence is a string that satisfies any of the following conditions:

- It is an empty string.
- It is formed by concatenating `(`, $A$, `)` in this order where $A$ is a correct parenthesis sequence.
- It is formed by concatenating $A$ and $B$ in this order where $A$ and $B$ are correct parenthesis sequences.

## Constraints

- All input values are integers.
- $1 \leq N \leq 5\times 10^5$
- $1\leq A,B\leq 10^9$
- $S$ is a string of length $2N$ consisting of the characters `(` and `)`.

## Input

The Input is given from Standard Input in the following format:

> $N$ $A$ $B$
> 
> $S$

## Output

Print the answer in a single line.

```input1
3 3 2
)))(()
```

```output1
5
```

Here is one way to operate:

- Swap $S_3$ and $S_4$. $S$ becomes `))()()`. The cost is $3$.
- Replace $S_1$ with `(`. $S$ becomes `()()()`, which is a correct parentheses sequence. The cost is $2$.

In this case, we have made $S$ a correct bracket sequence for a total cost of $5$. There is no way to make $S$ a correct bracket sequence for less than $5$.

```input2
1 175 1000000000
()
```

```output2
0
```

The given $S$ is already a correct bracket sequence, so no operation is needed.

```input3
7 2622 26092458
))()((((()()((
```

```output3
52187538
```