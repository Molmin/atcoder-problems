Score : $500$ points

## Problem Statement

You are given a positive integer $S$.
For a sequence of positive integers $x$, we define $f(x)$ as follows:

- Consider decomposing $x$ into several contiguous subsequences. For each contiguous subsequence, the sum of its elements must be **at most** $S$.
The minimum number of contiguous subsequences in such a decomposition is the value of $f(x)$.

It can be proved that the value of $f$ is always definable under the constraints of this problem.

You are given a sequence of positive integers $A=(A_1,A_2,\cdots,A_N)$.
Find the value of $\sum_{1 \leq l \leq r \leq N} f((A_l,A_{l+1},\cdots,A_r))$.

## Constraints

- $1 \leq N \leq 250000$
- $1 \leq S \leq 10^{15}$
- $1 \leq A_i \leq \min(S,10^9)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $S$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
3 3
1 2 3
```

```output1
8
```

For example, consider $x=(1,2,3)$. The decomposition $(1,2),(3)$ satisfies the condition, and no decomposition into fewer than two contiguous subsequences satisfies the condition, so $f((1,2,3))=2$.

Shown below are the possible $l,r$ and the corresponding values of $f$:

- $(l,r)=(1,1)$: $f((1))=1$
- $(l,r)=(1,2)$: $f((1,2))=1$
- $(l,r)=(1,3)$: $f((1,2,3))=2$
- $(l,r)=(2,2)$: $f((2))=1$
- $(l,r)=(2,3)$: $f((2,3))=2$
- $(l,r)=(3,3)$: $f((3))=1$

Thus, the answer is $1+1+2+1+2+1=8$.

```input2
5 1
1 1 1 1 1
```

```output2
35
```

```input3
5 15
5 4 3 2 1
```

```output3
15
```

```input4
20 1625597454
786820955 250480341 710671229 946667801 19271059 404902145 251317818 22712439 520643153 344670307 274195604 561032101 140039457 543856068 521915711 857077284 499774361 419370025 744280520 249168130
```

```output4
588
```