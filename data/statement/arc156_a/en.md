Score : $400$ points

## Problem Statement

We have $N$ coins numbered $1$ to $N$ with two distinguishable sides. A string $S$ represents the current state of the coins. If the $i$-th character of $S$ is `1`, coin $i$ is showing heads; if that character is `0`, coin $i$ is showing tails.

You can repeat the following operation zero or more times.

- Choose a pair of integers $(i,j)$ such that $1\leq i &lt; j\leq N$ and $j-i\geq \bm{2}$. Flip coin $i$ and coin $j$.

Determine whether it is possible to make all the $N$ coins show tails. If it is possible, find the minimum number of operations needed.

You are given $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 2\times 10^5$
- $3 \leq N \leq 2\times 10^5$
- $S$ is a string of length $N$ consisting of `0` and `1`.
- All numbers in the input are integers.
- For each input file, the sum of $N$ over the test cases is at most $2\times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

​
Each case is in the following format:

> $N$
> 
> $S$

## Output

Print $T$ lines. The $i$-th line $(1\leq i \leq T)$ should contain the minimum number of operations needed to make all the coins show tails if it is possible, and `-1` otherwise.

```input1
5
3
101
6
101101
5
11111
6
000000
30
111011100110101100101000000111
```

```output1
1
2
-1
0
8
```

For the first test case, you can perform the operation with $(i,j)=(1,3)$ to make all the coins show tails in one operation.

For the second test case, you can perform the operation with $(i,j)=(1,3)$ and then with $(i,j)=(4,6)$ to make all the coins show tails in two operations.

For the third test case, you can prove that there is no way to make all the coins show tails, so you should print `-1`.

For the fourth test case, the coins already show tails, so no operation is needed.