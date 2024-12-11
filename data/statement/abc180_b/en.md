Score : $200$ points

## Problem Statement

Given is a point $(x_1,\ldots,x_N)$ in an $N$-dimensional space.

Find the Manhattan distance, Euclidian distance, and Chebyshev distance between this point and the origin.
Here, each of them is defined as follows:

- The Manhattan distance: $|x_1|+\ldots+|x_N|$
- The Euclidian distance: $\sqrt{|x_1|^2+\ldots+|x_N|^2}$
- The Chebyshev distance: $\max(|x_1|,\ldots,|x_N|)$

## Constraints

- $1 \leq N \leq 10^5$
- $-10^5 \leq x_i \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $\ldots$ $x_N$

## Output

Print the Manhattan distance, Euclidian distance, and Chebyshev distance between the given point and the origin, each in its own line.
Each value in your print will be accepted when its absolute or relative error from the correct value is at most $10^{-9}$.

```input1
2
2 -1
```

```output1
3
2.236067977499790
2
```

Each of the distances is computed as follows:

- The Manhattan distance: $|2|+|-1|=3$
- The Euclidian distance: $\sqrt{|2|^2+|-1|^2}=2.236067977499789696\ldots$
- The Chebyshev distance: $\max(|2|,|-1|)=2$

```input2
10
3 -1 -4 1 -5 9 2 -6 5 -3
```

```output2
39
14.387494569938159
9
```