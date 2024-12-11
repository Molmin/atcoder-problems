Score : $600$ points

## Problem Statement

Let us define **balanced parenthesis string** as a string satisfying one of the following conditions:

- An empty string.
- A concatenation of $s$ and $t$ in this order, for some non-empty balanced parenthesis strings $s$ and $t$.
- A concatenation of `(`, $s$, `)` in this order, for some balanced parenthesis string $s$.

Also, let us say that the $i$-th and $j$-th characters of a parenthesis string $s$ is **corresponding** to each other when all of the following conditions are satisfied:

- $1 \le i &lt; j \le |s|$.
- $s_i =$ `(`.
- $s_j =$ `)`.
- The string between the $i$-th and $j$-th characters of $s$, excluding the $i$-th and $j$-th characters, is a balanced parenthesis string.

You are given a sequence of length $2N$: $A = (A_1, A_2, A_3, \dots, A_{2N})$.<br>
Let us define the **score** of a balanced parenthesis string $s$ of length $2N$ as the sum of $|A_i - A_j|$ over all pairs $(i, j)$ such that the $i$-th and $j$-th characters of $s$ are corresponding to each other.

Among the balanced parenthesis strings of length $2N$, find one with the maximum score.

## Constraints

- $1 \le N \le 2 \times 10^5$
- $1 \le A_i \le 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_{2N}$

## Output

Print a balanced parenthesis string of length $2N$ with the maximum score.<br>
If there are multiple such strings, any of them will be accepted.

```input1
2
1 2 3 4
```

```output1
(())
```

There are two balanced parenthesis strings of length $4$: `(())` and `()()`, with the following scores:

- `(())`: $|1 - 4| + |2 - 3| = 4$
- `()()`: $|1 - 2| + |3 - 4| = 2$

Thus, `(())` is the only valid answer.

```input2
2
2 3 2 3
```

```output2
()()
```

`(())` and `()()` have the following scores:

- `(())` : $|2 - 3| + |3 - 2| = 2$
- `()()` : $|2 - 3| + |2 - 3| = 2$

Thus, either is a valid answer in this case.