Score : $1400$ points

## Problem Statement

You have an $N \times N$ grid board.
You want to color all cells in $3$ colors so that no two adjacent (edge-sharing) cells have the same color. 

You have already painted the border of the board. Determine if you can color the rest of the board properly.

More precisely, you are given a string $S$ of length $4N-4$ consisting of characters `1`, `2`, and `3`. The string denotes the colors of the cells on the border, starting from the cell $(1, 1)$, in clockwise order.
Strictly speaking, the $i$-th character of $S$ denotes the color of the cell:

- $(1, i)$ for $1 \le i \le N-1$
- $(i - (N-1), N)$ for $N \le i \le 2N-2$
- $(N, 3N - 1 - i)$ for $2N-1 \le i \le 3N-3$
- $(4N-2 - i, 1)$ for $3N-2 \le i \le 4N-4$.

Here, $(r,c)$ denotes the cell in the $r$-th row and the $c$-th column.

It is guaranteed that no two adjacent cells on the border have the same color.

Solve $T$ test cases for each input file.

## Constraints

- $1 \le T \le 5 \cdot 10^4$
- $3 \le N \le 2 \cdot 10^5$
- $S$ is a string of length $4N-4$ consisting of characters `1`, `2`, and `3`.
- $S_i \neq S_{i+1}$ for $1 \le i \le 4N-5$, and $S_{4N-4} \neq S_1$.
- The sum of $N$ in one input file doesn't exceed $2\cdot 10^5$.
- All numbers in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each case is in the following format:

> $N$
> 
> $S$

## Output

For each test case, output `YES` if there is a way to color the rest of the board in $3$ colors properly, and `NO` otherwise. You can output each letter in any case (upper or lower).

```input1
4
3
12312312
4
121212121212
7
321312312312121212121321
7
321312312312121312121321
```

```output1
NO
YES
NO
YES
```

It can be shown that there is no way to properly color the rest of the board in the first and the third test cases. The proper colorings for the second and fourth test cases are shown below.

![](https://img.atcoder.jp/agc059/1ada4c7ac4b8e04277788b67a8d2a71c.png)