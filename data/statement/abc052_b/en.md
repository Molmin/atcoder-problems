Score : $200$ points

## Problem Statement

You have an integer variable $x$.
Initially, $x=0$.

Some person gave you a string $S$ of length $N$, and using the string you performed the following operation $N$ times.
In the $i$-th operation, you incremented the value of $x$ by $1$ if $S_i=$`I`, and decremented the value of $x$ by $1$ if $S_i=$`D`.

Find the maximum value taken by $x$ during the operations (including before the first operation, and after the last operation).

## Constraints

- $1 \leq N \leq 100$
- $|S|=N$
- No characters except `I` and `D` occur in $S$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the maximum value taken by $x$ during the operations.

```input1
5
IIDID
```

```output1
2
```

After each operation, the value of $x$ becomes $1$, $2$, $1$, $2$ and $1$, respectively. Thus, the output should be $2$, the maximum value.

```input2
7
DDIDDII
```

```output2
0
```

The initial value $x=0$ is the maximum value taken by $x$, thus the output should be $0$.