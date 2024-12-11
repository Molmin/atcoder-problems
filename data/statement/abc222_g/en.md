Score : $600$ points

## Problem Statement

We have a sequence $2,22,222,2222,\ldots$, where the $i$-th term is an $i$-digit integer whose digits are all $2$.

Where does a multiple of $K$ appear in this sequence for the first time? If the first multiple of $K$ is the $x$-th term of the sequence, print $x$; if there is no multiple of $K$, print `-1`.

Given $T$ cases, solve each of them.

## Constraints

- $1 \leq T \leq 200$
- $1 \leq K \leq 10^8$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\text{case}_2$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $K$

## Output

Print $T$ lines. The $i$-th line should contain the answer for $\text{case}_i$.

```input1
4
1
7
10
999983
```

```output1
1
6
-1
999982
```

We have four cases.

- $2$ is a multiple of $1$.
- None of $2,22,222,2222,22222$ is a multiple of $7$, but $222222$ is.
- None of $2,22,\ldots$ is a multiple of $10$.