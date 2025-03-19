Score : $400$ points

## Problem Statement

You are given the first $N$ terms $A _ 1,A _ 2,\dotsc,A _ N$ of an infinite sequence $A=(A _ 1,A _ 2,A _ 3,\dotsc)$ that has period $N$.

Determine if there exists a non-empty contiguous subsequence of this infinite sequence whose sum is $S$.

Here, an infinite sequence $A$ has period $N$ when $A _ i=A _ {i-N}$ for every integer $i &gt; N$.

## Constraints

- $1\leq N\leq2\times10 ^ 5$
- $1\leq A _ i\leq 10 ^ 9$
- $1\leq S\leq 10 ^ {18}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $S$
> 
> $A _ 1$ $A _ 2$ $\dotsc$ $A _ N$

## Output

If there exists a contiguous subsequence $(A _ l,A _ {l+1},\dotsc,A _ r)$ of $A$ for which $A _ l+A _ {l+1}+\dotsb+A _ r=S$, print `Yes`. Otherwise, print `No`.

```input1
3 42
3 8 4
```

```output1
Yes
```

The sequence $A$ is $(3,8,4,3,8,4,3,8,4,\dotsc)$.

For the subsequence $(A _ 2,A _ 3,A _ 4,A _ 5,A _ 6,A _ 7,A _ 8,A _ 9)=(8,4,3,8,4,3,8,4)$, we have $8+4+3+8+4+3+8+4=42$, so print `Yes`.

```input2
3 1
3 8 4
```

```output2
No
```

All elements of $A$ are at least $3$, so the sum of any non-empty contiguous subsequence is at least $3$.

Thus, there is no subsequence with sum $1$, so print `No`.

```input3
20 83298426
748 169 586 329 972 529 432 519 408 587 138 249 656 114 632 299 984 755 404 772
```

```output3
Yes
```

```input4
20 85415869
748 169 586 329 972 529 432 519 408 587 138 249 656 114 632 299 984 755 404 772
```

```output4
No
```