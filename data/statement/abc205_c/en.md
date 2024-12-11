Score : $300$ points

## Problem Statement

For a base number $X$, the product of multiplying it $Y$ times is called *$X$ to the $Y$-th power* and represented as $\text{pow}(X, Y)$.
For example, we have $\text{pow}(2,3)=2\times 2\times 2=8$.

Given three integers $A$, $B$, and $C$, compare $\text{pow}(A,C)$ and $\text{pow}(B,C)$ to determine which is greater.

## Constraints

- $-10^9 \leq A,B \leq 10^9$
- $1 \leq C \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

If $\text{pow}(A,C)&lt; \text{pow}(B,C)$, print `&amp;lt;`; if $\text{pow}(A,C) &gt; \text{pow}(B,C)$, print `&amp;gt;`; if $\text{pow}(A,C)=\text{pow}(B,C)$, print `=`.

```input1
3 2 4
```

```output1
>
```

We have $\text{pow}(3,4)=81$ and $\text{pow}(2,4)=16$.

```input2
-7 7 2
```

```output2
=
```

We have $\text{pow}(-7,2)=49$ and $\text{pow}(7,2)=49$.

```input3
-8 6 3
```

```output3
<
```

We have $\text{pow}(-8,3)=-512$ and $\text{pow}(6,3)=216$.