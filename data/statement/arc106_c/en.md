Score : $500$ points

## Problem Statement

Two segments $[L_1:R_1]$ and $[L_2:R_2]$ are said to *intersect* when $L_1 \leq R_2$ and $L_2 \leq R_1$ holds.

Consider the following problem $P$:

```plain
Input: $N$ segments $[L_1: R_1], \cdots, [L_N:R_N]$
       $L_1, L_2, \cdots, L_N, R_1, R_2, \cdots, R_N$ are pairwise distinct.
Output: the maximum number of segments that can be chosen so that no two of them intersect.
```

Takahashi has implemented a program that works as follows:

```plain
Sort the given segments in the increasing order of $R_i$ and let the result be $[L_{p_1}:R_{p_1}], [L_{p_2}:R_{p_2}], \cdots , [L_{p_N}:R_{p_N}]$.
For each $i = 1, 2, \cdots , N$, do the following:
  Choose $[L_{p_i}:R_{p_i}]$ if it intersects with none of the segments chosen so far.
Print the number of chosen segments.
```

Aoki, on the other hand, has implemented a program that works as follows:

```plain
Sort the given segments in the increasing order of $L_i$ and let the result be $[L_{p_1}:R_{p_1}], [L_{p_2}:R_{p_2}], \cdots , [L_{p_N}:R_{p_N}]$.
For each $i = 1, 2, \cdots , N$, do the following:
  Choose $[L_{p_i}:R_{p_i}]$ if it intersects with none of the segments chosen so far.
Print the number of chosen segments.
```

Given are integers $N$ and $M$. Construct an input for the problem $P$, consisting of $N$ segments, such that the following holds:

$$
(\text{The value printed by Takahashi's program}) - (\text{The value printed by Aoki's program}) = M
$$

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2 \times 10^5$
- $-N \leq M \leq N$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

If there is no set of $N$ segments that satisfies the condition, print `-1`.

Otherwise, print $N$ lines as follows:

> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
>   $\vdots$
> 
> $L_N$ $R_N$

Here, $[L_1:R_1], \cdots, [L_N:R_N]$ must satisfy the following:

- $1 \leq L_i &lt; R_i \leq 10^9$
- $L_i \neq L_j$ ($i \neq j$)
- $R_i \neq R_j$ ($i \neq j$)
- $L_i \neq R_j$
- $L_1, \cdots , L_N , R_1, \cdots , R_N$ are integers (21:46 added)

If there are multiple answers, any of them will be accepted.

Be sure to print a newline at the end of the output.

```input1
5 1
```

```output1
1 10
8 12
13 20
11 14
2 4
```

Let us call the five segments Segment $1$, Segment $2$, $\cdots$, Segment $5$.

Takahashi's program will work as follows:

```output1
Rearrange the segments into the order Segment $5$, Segment $1$, Segment $2$, Segment $4$, Segment $3$.
Choose Segment $5$.
Skip Segment $1$ (because it intersects with Segment $5$).
Choose Segment $2$.
Skip Segment $4$ (because it intersects with Segment $2$).
Choose Segment $3$.
```

Thus, Takahashi's program will print $3$.

Aoki's program will work as follows:

```output1
Rearrange the segments into the order Segment $1$, Segment $5$, Segment $2$, Segment $4$, Segment $3$.
Choose Segment $1$.
Skip Segment $5$ (because it intersects with Segment $1$).
Skip Segment $2$ (because it intersects with Segment $1$).
Choose Segment $4$.
Skip Segment $3$ (because it intersects with Segment $4$).
```

Thus, Aoki's program will print $2$.

Here, we have $3 - 2 = 1 \left(= M \right)$, and thus these five segments satisfy the condition.

```input2
10 -10
```

```output2
-1
```