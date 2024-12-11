Score : $600$ points

## Problem Statement

We have a sequence of length $1$: $A=(X)$. Let us perform the following operation on this sequence $10^{100}$ times.

Operation: Let $Y$ be the element at the end of $A$. Choose an integer between $1$ and $\sqrt{Y}$ (inclusive), and append it to the end of $A$.

How many sequences are there that can result from $10^{100}$ operations?

You will be given $T$ test cases to solve.

It can be proved that the answer is less than $2^{63}$ under the Constraints.

## Constraints

- $1 \leq T \leq 20$
- $1 \leq X \leq 9\times 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\rm case_1$
> 
> $\vdots$
> 
> $\rm case_T$

Each case is in the following format:

> $X$

## Output

Print $T$ lines.
The $i$-th line should contain the answer for $\rm case_i$.

```input1
4
16
1
123456789012
1000000000000000000
```

```output1
5
1
4555793983
23561347048791096
```

In the first case, the following five sequences can result from the operations.

- $(16,4,2,1,1,1,\ldots)$
- $(16,4,1,1,1,1,\ldots)$
- $(16,3,1,1,1,1,\ldots)$
- $(16,2,1,1,1,1,\ldots)$
- $(16,1,1,1,1,1,\ldots)$